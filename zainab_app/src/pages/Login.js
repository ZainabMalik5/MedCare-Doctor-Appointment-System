import React from 'react';
import '../styles/RegisterStyles.css'
import {Form, Input,message } from 'antd';
import {Link,useNavigate} from 'react-router-dom';
import axios from "axios";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import OAuth from '../pages/OAuth';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };

  return (
    <div className="form-container">
      <Form layout="vertical" onFinish={onfinishHandler} className="register-form">
        <h3 className="text-center">Login</h3>

        <Form.Item label="Email" name="email">
          <Input type="email" required />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input type="password" required />
        </Form.Item>

        {/* Stack Login button and Google sign-in button with same width, more space between buttons */}
        <div className="flex flex-col items-center space-y-8 mt-6">
          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            LogIn
          </button>

          <div className="w-48">
            <OAuth />
          </div>
        </div>

        {/* Register link with bigger margin top */}
        <div className="mt-12 text-center">
          <Link to="/register" style={{ marginTop: '15px', display: 'block' }}>
  Already a user? login here
</Link>
        </div>

      </Form>
    </div>
  );
};

export default Login;
