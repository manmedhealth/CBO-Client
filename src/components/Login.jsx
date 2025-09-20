import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = ({ settoken }) => {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (isLogin) {
        // Handle login logic
        const response = await axios.post('http://localhost:3000/api/user/login', { email: formData.email, password: formData.password });
        if (response.data.success) {
          settoken(response.data.token)
          toast.success('Login successful!');
        } else {
          toast.error(response.data.message)
        }
      } else {
        // Handle registration logic
        const response = await axios.post('http://localhost:3000/api/user/register', formData);
        if (response.data.success) {
          settoken(response.data.token);
          toast.success('Registration successful!');
        } else {
          toast.error(response.data.message)
        }
      }
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-500 p-4">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-md">
        <div className="py-6 px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-gray-600 text-center mb-8">
            {isLogin ? 'Sign in to continue' : 'Join us today for all the benefits'}
          </p>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {!isLogin && (
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            )}

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-800 to-gray-500 text-white py-3 rounded-lg font-semibold hover:from-gray-900 hover:to-gray-600 transition-all duration-300"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-900 cursor-pointer font-semibold hover:text-blue-700 transition-colors duration-300"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>

        <div className="bg-gray-100 py-4 px-8 text-center">
          <p className="text-xs text-gray-600">
            By {isLogin ? 'signing in' : 'registering'}, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;