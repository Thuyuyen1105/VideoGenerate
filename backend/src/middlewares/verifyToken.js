const jwt = require('jsonwebtoken');
const User = require('../models/Users');

class Authentication {
  authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
      return res.status(401).json({
        data: null,
        message: 'Token is null',
        code: 0
      });
    }

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({
          data: null,
          message: 'Authentication failed',
          code: 0
        });
      }
      req.user = user;
      next();
    });
  }

  async reCheckUser(req, res, next) {
    const userId = req.params.userId;
    const reqUserId = req.user.id;
    const personal = await User.findById(reqUserId)
    req.personalRole = personal.role;
    if (userId !== reqUserId && personal.role !== 'admin') {
      return res.status(403).json({
        data: null,
        message: 'You are not authorized to access this resource',
        code: 0
      });
    }
    next();
  }

}


module.exports = new Authentication();
