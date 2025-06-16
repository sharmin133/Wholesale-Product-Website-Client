import React from 'react';
import { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {

  const{user,logOutUser}=use(AuthContext)

  const links=(
    <>

     <li><NavLink to='/' >Home</NavLink></li>
     <li><NavLink  to='/login' >Login</NavLink></li>
     <li><NavLink  to='/register' >Register</NavLink></li>
     <li> <NavLink  to='/addProduct' >Add Product</NavLink></li>
     <li> <NavLink  to='/myProduct' >My Product</NavLink></li>
     <li><NavLink to='/allProduct'> All Product</NavLink></li>
     <li><NavLink to='/updatedProduct/:id'> updated Product</NavLink></li>
     <li><NavLink to='/carts' > Cart</NavLink> </li>
   
    
    </>
  )

  const handleLogOut=()=>{
    logOutUser()
    .then(result=>{
      console.log(result.user)
      .catch(error=>{
        console.log(error)
      })
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
      <div> <img className='w-12 h-12' src="/Allimage/logo.png" alt="" /></div>
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
  
  {
    user? <button className='btn' onClick={handleLogOut}> Log Out</button>:
    <>
     <NavLink className='btn'  to='/login' >Login</NavLink>
       <NavLink  className='btn' to='/register' >Register</NavLink>
      


    </>
  }


  </div>
</div>
        </div>
    );
};

export default Navbar;