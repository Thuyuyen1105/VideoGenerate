// routes/authRouter.js

const express = require("express");
const router = express.Router();
const { login } = require("../controllers/authController.js");  // Import controller

// Đăng nhập
router.post("/login", login);

module.exports = router;
