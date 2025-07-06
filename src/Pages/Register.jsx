import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { updateProfile } from 'firebase/auth';
import { Zoom } from 'react-awesome-reveal';

const Register = () => {
  useEffect(() => {
    document.title = "Register | PrimeGo ";
  }, []);

  const { createUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

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

    setSuccessMessage('');
    setErrorMessage('');

    const passwordRegExp = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegExp.test(password)) {
      setErrorMessage('Password must have one lowercase, one uppercase, and 6 characters or longer.');
      return;
    }

    createUser(email, password)
      .then(result => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: user_photo
        })
        .then(() => {
          toast.success('User has been created successfully.');
          axios.post('https://primego-wholesale-server.vercel.app/users', {
            uid: result.user.uid,
            name,
            email,
            role,
          });
          setTimeout(() => navigate(from, { replace: true }), 1500);
        })
        .catch(err => {
          console.error("Profile update failed", err);
        });
      })
      .catch(error => {
        console.error(error);
        setErrorMessage(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="hero bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <ToastContainer position="top-center" autoClose={3000} />
      <Zoom triggerOnce>
        <div className="card bg-gray-50 dark:bg-gray-800 w-full max-w-sm shadow-2xl border border-emerald-200 dark:border-emerald-700">
          <div className="card-body">
            <h1 className="text-4xl font-bold text-blue-800 mb-4">Register Now</h1>
            <form onSubmit={handleRegister} className="space-y-3">

              <label className="label text-cyan-800 font-medium">Select Role</label>
              <select name="role" className="input input-bordered w-full" required>
                <option value="">-- Choose a role --</option>
                <option value="normal">Regular User</option>
                <option value="brand">Brandized User</option>
              </select>

              <label className="label text-cyan-800 font-medium">Name</label>
              <input type="text" name='name' className="input input-bordered w-full" placeholder="Your Name" required />

              <label className="label text-cyan-800 font-medium">Photo URL</label>
              <input type="text" name="user_photo" className="input input-bordered w-full" placeholder="Photo URL" />

              <label className="label text-cyan-800 font-medium">Email</label>
              <input type="email" name='email' className="input input-bordered w-full" placeholder="Email" required />

              <label className="label text-cyan-800 font-medium">Password</label>
              <input type="password" name='password' className="input input-bordered w-full" placeholder="Password" required />

              <div><a className="link link-hover text-amber-800 font-medium">Forgot password?</a></div>

              <button className="btn bg-emerald-500 hover:bg-emerald-700 text-white w-full mt-2">Register</button>
            </form>

            {errorMessage && <p className="text-pink-600 mt-2">{errorMessage}</p>}
            {successMessage && <p className="text-green-600 mt-2">{successMessage}</p>}

            <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
              Already have an account? Please <Link className="text-blue-600 underline" to="/login">Log In</Link>
            </p>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Register;
