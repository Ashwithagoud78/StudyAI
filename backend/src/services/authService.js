const users = [];

function registerUser({ name, email, password }) {
  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return {
      success: false,
      message: 'User already exists'
    };
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    role: 'student'
  };

  users.push(newUser);

  return {
    success: true,
    message: 'User registered successfully',
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role
    }
  };
}

function loginUser({ email, password }) {
  const user = users.find((item) => item.email === email && item.password === password);

  if (!user) {
    return {
      success: false,
      message: 'Invalid email or password'
    };
  }

  return {
    success: true,
    message: 'Login successful',
    user: {
      id: user.id,
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
