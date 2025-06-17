import React, {  useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { updateProfile } from 'firebase/auth';

const Register = () => {

 const{createUser}=useContext(AuthContext)
 const[errorMessage,setErrorMessage]=useState(false)
 const [successMessage, setSuccessMessage]=useState('')

     const  navigate=useNavigate();
   const location=useLocation()
    const from = location.state?.from || '/'; 
      const handleRegister=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
          const user_photo = form.user_photo.value;
        const password=form.password.value;
          const role = form.role.value;
        console.log(name,email,password,role )
        setSuccessMessage(false);
        setErrorMessage('')

           const passwordRegExp = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (passwordRegExp.test(password) === false) {
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
      setTimeout(() => {
  navigate(from, { replace: true });
}, 1500)
      
      // Save user info to DB
      axios.post('https://wholesale-product-server.vercel.app/users', {
        uid: result.user.uid,
        name,
        email,
        role,
      });

    })
    .catch(error => {
      console.error("Profile update failed", error);
    });
  })
  .catch(error => {
    console.log(error);
    setErrorMessage(error.message);
    toast.error(error.message);
  });



    }

    




    return (
       
            <div className="hero bg-base-200 min-h-screen">
                 <ToastContainer position="top-center" autoClose={3000} />

    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
           <h1 className="text-5xl font-bold">Register Now </h1>
        <form onSubmit={handleRegister} className="fieldset">

          <label className="label">Select Role</label>
  <select name="role" className="input" required>
    <option value="">-- Choose a role --</option>
    <option value="normal">Regular User</option>
    <option value="brand">Brandized User</option>
  </select>

            <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Your Name" required />
           <label className="label">Photo URL</label>
          <input type="text" className="input" name="user_photo" placeholder="Your photo URL" />
          <label className="label">Email</label>
          <input type="email"  name='email' className="input" placeholder="Email" required />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" required />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </form>

        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        {successMessage && <p className="text-green-600">{successMessage}</p>}
         <p> Already have an account? please <Link className='text-blue-600 underline' to='/login'>LogIn</Link> </p>
      </div>
  
  </div>
</div>

       
    );
};

export default Register;