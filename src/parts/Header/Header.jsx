import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
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
            <a className="btn btn-ghost normal-case text-2xl font-bold">Doc Technical</a>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
               <li><NavLink to='/home' className={({ isActive }) => isActive ? "bg-red-500 mr-3" : "bg-blue-500 mr-3"}>HOME</NavLink></li>
               <li><NavLink to='/courses' className={({ isActive }) => isActive ? "bg-red-500 mr-3" : "bg-blue-500 mr-3"}>COURSES</NavLink></li>
               <li><NavLink to='/blogs' className={({ isActive }) => isActive ? "bg-red-500 mr-3" : "bg-blue-500 mr-3"}>BLOGS</NavLink></li>
               <li><NavLink to="/login" className={({ isActive }) => isActive ? "bg-red-500 mr-3" : "bg-blue-500 mr-3"}>Log in</NavLink></li>
               <li><NavLink to="/register" className={({ isActive }) => isActive ? "bg-red-500 mr-3" : "bg-blue-500 mr-3"}>Sign Up</NavLink></li>
            </ul>
         </div>
         <div className="navbar-end">
            <div className="dropdown dropdown-end items-center flex">
               <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                     <img src="https://placeimg.com/80/80/people" alt='' />
                  </div>
               </label>
               <ul tabIndex={0} className="text-center menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40">
                  <li><a href='/' className="justify-between">Profile</a></li>
                  <li><a>Settings</a></li>
                  <li><a>Logout</a></li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Header;