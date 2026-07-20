const { registerUser, loginUser } = require('../services/authService');

function register(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and password are required'
    });
  }

  const result = registerUser({ name, email, password });

  if (!result.success) {
    return res.status(409).json(result);
  }

  return res.status(201).json(result);
}

function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required'
    });
  }

  const result = loginUser({ email, password });

  if (!result.success) {
    return res.status(401).json(result);
  }

  return res.status(200).json(result);
}

module.exports = {
  register,
  login
};
