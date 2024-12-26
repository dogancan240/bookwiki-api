const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUser,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile/:id", getUserProfile);
router.put("/update/:id", updateUser);

module.exports = router;
