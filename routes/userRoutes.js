const express = require("express");
const {
    loginController,
    registerController,
    googleAuthController,
    authController,
    applyDoctorController,
    getAllNotificationController,
    deleteAllNotificationController,
    getAllDocotrsController,
    bookeAppointmnetController,
    bookingAvailabilityController,
    userAppointmentsController,
   
  } = require("../controllers/userCtrl");
  const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/google", googleAuthController);
router.post("/getUserData", authMiddleware, authController);
router.post("/apply-doctor", authMiddleware, applyDoctorController);
router.post("/get-all-notification",authMiddleware,getAllNotificationController);
router.post("/delete-all-notification",authMiddleware,deleteAllNotificationController);
router.get("/getAllDoctors", authMiddleware, getAllDocotrsController);
router.post("/book-appointment", authMiddleware, bookeAppointmnetController);
router.post("/booking-availbility",authMiddleware,bookingAvailabilityController);
router.get("/user-appointments", authMiddleware, userAppointmentsController);


module.exports = router;