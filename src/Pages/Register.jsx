import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { updateProfile } from 'firebase/auth';
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  useEffect(() => {
    document.title = "Register | PrimeGo";
  }, []);

  const { createUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user_photo = form.user_photo.value;
    const password = form.password.value;
    const role = form.role.value;

    setErrorMessage('');

    const passwordRegExp = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegExp.test(password)) {
      setErrorMessage('Password must have one lowercase, one uppercase, and 6 characters or longer.');
      return;
    }

    createUser(email, password)
      .then(result => {
        updateProfile(result.user, { displayName: name, photoURL: user_photo })
          .then(() => {
            toast.success('User has been created successfully.');
            axios.post('https://primego-wholesale-server.vercel.app/users', { uid: result.user.uid, name, email, role });
            setTimeout(() => navigate(from, { replace: true }), 1500);
          })
          .catch(err => console.error("Profile update failed", err));
      })
      .catch(error => {
        setErrorMessage(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen relative bg-amber-50 dark:bg-gray-900 flex items-center justify-center p-4 overflow-hidden">
      {/* Floating ellipses */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-emerald-300 dark:bg-emerald-600 opacity-40 rounded-full"
          style={{
            width: 80 + i * 15,
            height: 40 + i * 10,
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`
          }}
          animate={{ x: [0, 20, -20, 0], y: [0, 15, -15, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 7 + i, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <ToastContainer position="top-center" autoClose={3000} />

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl border-t-4 border-amber-400 p-6 w-full max-w-sm relative z-10"
      >
        <h1 className="text-4xl font-bold text-center text-emerald-700 dark:text-emerald-400 mb-6">
          Register Now
        </h1>

        <form onSubmit={handleRegister} className="space-y-3">
          <div>
            <label className="block text-emerald-700 dark:text-emerald-400 font-semibold mb-1">Select Role</label>
            <select name="role" className="w-full border p-2 rounded dark:bg-gray-700" required>
              <option value="">-- Choose a role --</option>
              <option value="normal">Regular User</option>
              <option value="brand">Brandized User</option>
            </select>
          </div>

          <div>
            <label className="block text-emerald-700 dark:text-emerald-400 font-semibold mb-1">Name</label>
            <input type="text" name="name" placeholder="Your Name" className="w-full border p-2 rounded dark:bg-gray-700" required />
          </div>

          <div>
            <label className="block text-emerald-700 dark:text-emerald-400 font-semibold mb-1">Photo URL</label>
            <input type="text" name="user_photo" placeholder="Photo URL" className="w-full border p-2 rounded dark:bg-gray-700" />
          </div>

          <div>
            <label className="block text-emerald-700 dark:text-emerald-400 font-semibold mb-1">Email</label>
            <input type="email" name="email" placeholder="Email" className="w-full border p-2 rounded dark:bg-gray-700" required />
          </div>

          <div>
            <label className="block text-emerald-700 dark:text-emerald-400 font-semibold mb-1">Password</label>
            <input type="password" name="password" placeholder="Password" className="w-full border p-2 rounded dark:bg-gray-700" required />
          </div>

          <div className="text-right">
            <a className="text-amber-500 hover:underline text-sm">Forgot password?</a>
          </div>

          <button className="w-full bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 rounded-lg transition mt-2">
            Register
          </button>

          {errorMessage && <p className="text-amber-500 mt-2">{errorMessage}</p>}
        </form>

        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 text-center">
          Already have an account? <Link to="/login" className="text-emerald-600 underline">Log In</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
