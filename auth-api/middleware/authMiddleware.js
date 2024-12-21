const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];  // Get token from header
      const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Verify token

      req.user = await User.findById(decoded.id).select('-password');  // Attach user info to request
      next();
    } catch (error) {
      res.status(401).json({ message: 'Unauthorized - Invalid Token' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'No token provided, authorization denied' });
  }
};

module.exports = { protect };
