import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { useState } from 'react';
import { FaUserAlt, } from 'react-icons/fa';


const Header = () => {
   const { user, logOut } = useContext(AuthContext)
   const [error, setError] = useState('');
   const handleSignOut = () => {
      logOut()
         .then(() => { })
         .catch(error => setError(error.message))
   }
   return (
      <div className="navbar bg-blue-900 lg:px-20 sticky top-0 z-10">
         <div className="navbar-start">
            <div className="dropdown">
               <label tabIndex={0} className="btn btn-light lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </label>
               <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-md w-52">
                  <li><Link to='/home'>HOME</Link></li>
                  <li><Link to='/courses'>COURSES</Link></li>
                  <li><Link to='/blogs'>BLOGS</Link></li>
                  <li><Link to='/frequentlyaq'>FAQ</Link></li>
                  {
                     user ? <></> : <>
                        <li><Link to='/login'>LOG IN</Link></li>
                        <li><Link to='/register'>SIGN UP</Link></li>
                     </>
                  }
               </ul>
            </div>
            <Link to='/' className="btn btn-ghost normal-case text-xl lg:text-3xl text-white font-bold">Doc Technical</Link>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
               <li><NavLink to='/home' className={({ isActive }) => isActive ? "text-white font-bold bg-slate-600 mr-3" : "text-white font-semibold mr-3"}>HOME</NavLink></li>
               <li><NavLink to='/courses' className={({ isActive }) => isActive ? "text-white font-bold bg-slate-600 mr-3" : "text-white font-semibold mr-3"}>COURSES</NavLink></li>
               <li><NavLink to='/blogs' className={({ isActive }) => isActive ? "text-white font-bold bg-slate-600 mr-3" : "text-white font-semibold mr-3"}>BLOGS</NavLink></li>
               <li><NavLink to='/frequentlyaq' className={({ isActive }) => isActive ? "text-white font-bold bg-slate-600 mr-3" : "text-white font-semibold mr-3"}>FAQ</NavLink></li>

               {
                  user ? <></> : <>
                     <li><NavLink to="/login" className={({ isActive }) => isActive ? "text-white font-bold bg-slate-600 mr-3" : "text-white font-semibold mr-3"}>Log in</NavLink></li>
                     <li><NavLink to="/register" className={({ isActive }) => isActive ? "text-white font-bold bg-slate-600 mr-3" : "text-white font-semibold mr-3"}>Sign Up</NavLink></li>
                  </>
               }

            </ul>
         </div>
         <div className="navbar-end">
            <label className="swap text-white swap-rotate">
               <input type="checkbox" />
               <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
               <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
            </label>
            <ul className="menu menu-horizontal">
               <li tabIndex={0}>
                  <div>
                     {
                        user?.photoURL ?
                           <img className='rounded-full' style={{ width: "30px", height: "30px" }} src={user?.photoURL} alt='' />
                           :
                           <FaUserAlt className='text-white' style={{ width: "30px", height: "30px" }}></FaUserAlt>
                     }

                  </div>
                  <ul className="p-2 bg-base-100 z-50">
                     <li><Link to='/'>{user?.displayName}</Link></li>
                     <li><a href='/'>Profile</a></li>
                     <li><a href='/'>Setting</a></li>
                     <li><button onClick={() => handleSignOut()} >Sign Out</button></li>
                  </ul>
               </li>
            </ul>

         </div>
      </div>
   );
};

export default Header;