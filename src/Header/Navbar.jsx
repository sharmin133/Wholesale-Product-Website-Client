import React from 'react';
import { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { FaCartShopping } from "react-icons/fa6";
import "./navbar.css"

const Navbar = () => {

  const{user,logOutUser}=use(AuthContext)

  const links=(
    <>

     <li><NavLink to='/' >Home</NavLink></li>
     <li><NavLink to='/categories' >Categories</NavLink></li>
     
    
    {
          user&&
          <>  

             <li> <NavLink  to='/addProduct' >Add Product</NavLink></li>
             <li><NavLink to='/allProduct'> All Product</NavLink></li>
             <li> <NavLink  to='/myProduct' >My Product</NavLink></li>
              <li><NavLink to='/carts' > <FaCartShopping size={24} /></NavLink> </li>

        
     
      </>
        }
    </>



  )

    const handleSignOut=()=>{
    logOutUser()
    .then(()=>{
      console.log('signout successfully')
    })
    .catch(error=>{
      console.log(error)
    })
  }

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      {
      links
      }
      </ul>
    </div>
    <div className='flex justify-between'>
      <div> <img className='w-12 h-12 ' src="/Allimage/logo.png" alt="" /></div>
      <a className="btn btn-ghost text-xl">PrimeGo</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     
            {
              links
            }
          
    </ul>
  </div>
  <div className="navbar-end">
  
   {user?
        <div className='flex gap-2 p-2'>

          <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
             <img className='md:w-12 md:h-12 w-8 h-8 rounded-full border-2 border-green-500 ' src={user.photoURL} alt="" />
          </div>
          
        <a className="btn bg-blue-600 text-white rounded-2xl p-2" onClick={handleSignOut}><span className='text-2xl sm:text-xl'>Log Out</span></a>
        </div>
          :<div className='flex gap-2 '>
            <div> <Link to='/register' ><span className=' md:text-2xl bg-blue-600 text-sm text-white rounded-2xl px-4 py-2 md:font-medium'> Sign Up</span></Link></div>
           <div> <Link to='/login' ><span className=' md:text-2xl text-sm bg-blue-600 text-white rounded-2xl px-4 py-2 md:font-medium'> Log In</span></Link></div>
            </div>}


  </div>
</div>
        </div>
    );
};

export default Navbar;