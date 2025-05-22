import React from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { useNavigate } from 'react-router-dom';

const OAuth = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      dispatch(showLoading());
      const resultsFromGoogle = await signInWithPopup(auth, provider);

      const res = await fetch("/api/v1/user/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL,
        }),
      });

      const data = await res.json();
      dispatch(hideLoading());

      if (res.ok) {
        //  Store JWT token in localStorage
        localStorage.setItem("token", data.token);

        //  Optionally, store user info if needed
        // localStorage.setItem("user", JSON.stringify(data.user));

        //  Redirect to homepage
        navigate("/");
      } else {
        console.error("OAuth login failed:", data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.error("Error during Google login:", error);
    }
  };

  return (
   <button
  type="button"
  onClick={handleGoogleClick}
  className="flex items-center justify-center w-100 bg-white text-xs text-gray-800 border border-gray-300 rounded px-2 py-1 shadow-sm hover:bg-gray-100 transition duration-200"
  style={{marginTop: '10px' }} // <-- add this marginTop
>
  <img
    src="https://developers.google.com/identity/images/g-logo.png"
    alt="Google logo"
    style={{ width: '28px', height: '28px', marginRight: '5px' }}
  />
  Sign in with Google
</button>


  );
};

export default OAuth;
