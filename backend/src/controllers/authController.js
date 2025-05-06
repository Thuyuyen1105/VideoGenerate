const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { findUserByEmail } = require("../models/User.js");  // Giả sử bạn có hàm này để tìm người dùng

// Đăng nhập
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await findUserByEmail(username);
        if (!user) {
            const message = "Email không tồn tại!";
            console.log(`Status: 400 - Message: ${message}`);
            return res.status(400).json({ message });
        }
        // Kiểm tra mật khẩu
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            const message = "Sai mật khẩu!";
            console.log(`Status: 400 - Message: ${message}`);
            return res.status(400).json({ message });
        }
        // Tạo JWT
        const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET, { expiresIn: "1d" });

        // Send response with cookie and token
        const message = "Đăng nhập thành công!";
        console.log(`Status: 200 - Message: ${message}`);
        res.cookie("token", token, { httpOnly: true }).json({ message, token });
    } catch (error) {
        const message = "Lỗi server!";
        console.log(`Status: 500 - Message: ${message}`);
        res.status(500).json({ message });
    }
};

module.exports = { login };
