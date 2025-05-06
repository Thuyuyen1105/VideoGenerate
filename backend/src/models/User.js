const db = require("../db");

// Tạo người dùng mới
async function createUser({ username, email, password }) {
    return db.one(
        "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
        [username, email, password]
    );
}

// Tìm người dùng theo email
async function findUserByEmail(email) {
    return db.oneOrNone("SELECT * FROM users WHERE email = $1", [email]);

}


module.exports = { createUser, findUserByEmail };
