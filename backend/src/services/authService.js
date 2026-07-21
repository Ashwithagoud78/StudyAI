const User = require('../models/User');
const bcrypt = require('bcryptjs');

async function registerUser({ name, email, password }) {
  const existingUser = await User.findOne({ email }).exec();

  if (existingUser) {
    return {
      success: false,
      message: 'User already exists'
    };
  }

  const hash = await bcrypt.hash(password, 10);

  const newUser = new User({ name, email, password: hash });
  await newUser.save();

  return {
    success: true,
    message: 'User registered successfully',
    user: {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role
    }
  };
}

async function loginUser({ email, password }) {
  const user = await User.findOne({ email }).exec();

  if (!user) {
    return {
      success: false,
      message: 'Invalid email or password'
    };
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return {
      success: false,
      message: 'Invalid email or password'
    };
  }

  return {
    success: true,
    message: 'Login successful',
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  };
}

module.exports = {
  registerUser,
  loginUser
};
