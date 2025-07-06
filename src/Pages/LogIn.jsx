import React, { useEffect, useState } from 'react';
import { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { Zoom } from 'react-awesome-reveal';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {
  useEffect(() => {
    document.title = "Login | PrimeGo ";
  }, []);

  const { logInUser, googleSignIn } = use(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const handleLogIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setSuccessMessage('');
    setErrorMessage('');

    logInUser(email, password)
      .then(result => {
        console.log(result.user)
        toast.success('User has been logged in successfully.');
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1500);
      })
      .catch(error => {
        setErrorMessage(error.message);
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
         console.log(result.user)
        toast.success('User has been logged in successfully.');
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1500);
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <ToastContainer position="top-center" autoClose={3000} />
      <Zoom triggerOnce>
        <div className="card w-full max-w-sm bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700">
          <div className="card-body">
            <h1 className="text-4xl font-bold text-center text-emerald-600 dark:text-emerald-500 mb-4">Login Now</h1>

            <form onSubmit={handleLogIn}>
              <label className="label font-semibold">Email</label>
              <input type="email" name="email" className="input input-bordered w-full mb-3" placeholder="Email" required />

              <label className="label font-semibold">Password</label>
              <input type="password" name="password" className="input input-bordered w-full mb-3" placeholder="Password" required />

              <div className="mb-2">
                <a className="link link-hover text-sm text-pink-500">Forgot password?</a>
              </div>

              <button className="btn w-full bg-emerald-500 hover:bg-emerald-700 text-white font-bold">
                Login
              </button>
            </form>

            {errorMessage && <p className="text-sm text-pink-500 mt-2">{errorMessage}</p>}
            {successMessage && <p className="text-sm text-emerald-500 mt-2">{successMessage}</p>}

            <p className="text-sm mt-4">
              New to this site?{" "}
              <Link to="/register" className="text-blue-600 underline">
                Register
              </Link>
            </p>

            <div className="divider">or</div>

            <button onClick={handleGoogleSignIn} className="btn bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 w-full">
              <svg aria-label="Google logo" width="20" height="20" className="mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <g><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                  <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                  <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                  <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                </g>
              </svg>
              Login with Google
            </button>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default LogIn;
