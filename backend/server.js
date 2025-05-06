require('dotenv').config();


const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const authRouter = require("./src/routes/auth");  // Import router


// Middleware
app.use(cors({
    origin: 'http://localhost:5173', // Thay đổi thành URL frontend của bạn
    credentials: true, // Cho phép gửi cookie & token trong request
}));

app.use(bodyParser.json());

// Đăng ký router
app.use("/api/v1/auth", authRouter);  // Đăng ký authRouter cho các yêu cầu bắt đầu bằng /api/v1/auth

// Lắng nghe server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
