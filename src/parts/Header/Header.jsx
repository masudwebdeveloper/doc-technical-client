import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { useState } from 'react';


const Header = () => {
   const { user, logOut } = useContext(AuthContext)
   const [error, setError] = useState('');
   const handleSignOut = () => {
      logOut()
         .then(() => { })
         .catch(error => setError(error.message))
   }
   return (
      <div className="navbar bg-slate-100 lg:px-20">
         <div className="navbar-start">
            <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </label>
               <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>HOME</a></li>
                  <li><a>COURSES</a></li>
                  <li><a>BLOGS</a></li>
               </ul>
            </div>
            <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold">Doc Technical</Link>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
               <li><NavLink to='/home' className={({ isActive }) => isActive ? "text-gray-900 mr-3" : "text-blue-900 mr-3"}>HOME</NavLink></li>
               <li><NavLink to='/courses' className={({ isActive }) => isActive ? "text-gray-900 mr-3" : "text-blue-900 mr-3"}>COURSES</NavLink></li>
               <li><NavLink to='/blogs' className={({ isActive }) => isActive ? "text-gray-900 mr-3" : "text-blue-900 mr-3"}>BLOGS</NavLink></li>

               {
                  user ? <></> : <>
                     <li><NavLink to="/login" className={({ isActive }) => isActive ? "text-gray-900 mr-3" : "text-blue-900 mr-3"}>Log in</NavLink></li>
                     <li><NavLink to="/register" className={({ isActive }) => isActive ? "text-gray-900 mr-3" : "text-blue-900 mr-3"}>Sign Up</NavLink></li>
                  </>
               }
            </ul>
         </div>
         <div className="navbar-end">
            <ul className="menu menu-horizontal p-0">
               <li tabIndex={0}>
                  <div className='w-20'>
                     <img className='w-full rounded-full' src={user?.photoURL ? user.photoURL : ''} alt='' />
                  </div>
                  <ul className="p-2 bg-base-100 z-50">
                     <li><Link to='/'>{ user?.displayName}</Link></li>
                     <li><a href='/'>Profile</a></li>
                     <li><a href='/'>Setting</a></li>
                     <li><buttton onClick={() => handleSignOut()} >Sign Out</buttton></li>
                  </ul>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Header;