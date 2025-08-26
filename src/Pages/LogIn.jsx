import React, { useEffect, useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Context/AuthContext';

const LogIn = () => {
  useEffect(() => {
    document.title = "Login | PrimeGo";
  }, []);

  const { logInUser, googleSignIn } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const handleLogIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setErrorMessage('');

    logInUser(email, password)
      .then(() => {
        toast.success('User logged in successfully!');
        setTimeout(() => navigate(from, { replace: true }), 1500);
      })
      .catch(error => {
        setErrorMessage(error.message);
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success('User logged in successfully!');
        setTimeout(() => navigate(from, { replace: true }), 1500);
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen relative bg-amber-50 dark:bg-gray-900 flex items-center justify-center p-4 overflow-hidden">
      {/* Floating emerald shapes */}
      {[...Array(9)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-emerald-300 dark:bg-emerald-600 opacity-50"
          style={{
            width: 100 + i * 20,
            height: 100 + i * 20,
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`
          }}
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <ToastContainer position="top-center" autoClose={3000} />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-t-4 border-amber-400 p-6 w-full max-w-sm relative z-10"
      >
        <h1 className="text-4xl font-bold text-center text-emerald-700 dark:text-emerald-400 mb-6">
          Login Now
        </h1>

        <form onSubmit={handleLogIn} className="space-y-4">
          <div>
            <label className="block text-emerald-700 dark:text-emerald-400 font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full border p-2 rounded dark:bg-gray-700"
            />
          </div>

          <div>
            <label className="block text-emerald-700 dark:text-emerald-400 font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full border p-2 rounded dark:bg-gray-700"
            />
          </div>

          <div className="text-right">
            <a className="text-sm text-amber-500 hover:underline">Forgot password?</a>
          </div>

          <button className="w-full bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 rounded-lg transition">
            Login
          </button>

          {errorMessage && <p className="text-sm text-amber-500 mt-2">{errorMessage}</p>}
        </form>

        <p className="text-center text-sm mt-4">
          New here?{' '}
          <Link to="/register" className="text-emerald-600 underline">
            Register
          </Link>
        </p>

        <div className="divider border-amber-400">or</div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center bg-white dark:bg-gray-700 border border-amber-400 hover:bg-amber-100 text-emerald-700 py-2 rounded-lg font-semibold transition"
        >
          <p className="w-5 h-5 mr-2" />
          Login with Google
        </button>
      </motion.div>
    </div>
  );
};

export default LogIn;
