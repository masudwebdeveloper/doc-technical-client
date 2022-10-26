import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Register = () => {
   const [error, setError] = useState('')

   const { createUser, userUpdateProfile, setUser, signInWithGoogle,signInWithFacebook } = useContext(AuthContext);
   const handleGoogleSignIn = () => {
      signInWithGoogle()
         .then(result => {
            const user = result.user;
            setUser(user);
            setError('');
            console.log(user);
         })
         .catch(error => {
         setError(error.message)
      })
   } 

   const handleFacebookSignIn = () => {
      signInWithFacebook()
         .then(result => {
            const user = result.user;
            setUser(user);
            setError('');
            console.log(user);
      })
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photoURL = form.userphotourl.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name, photoURL, email, password);
      createUser(email, password)
         .then(result => {
            const user = result.user;
            form.reset();
            setError('');
            handleUpdateUserProfile(name, photoURL);
            setUser(user);
            console.log(user);
         })
      .catch(error=> setError(error.message))
   }

   const handleUpdateUserProfile = (name, photoURL) => {
      const profile = {
         displayName: name,
         photoURL: photoURL
      }
      userUpdateProfile(profile)
         .then(() => { })
         .catch(error => {
         setError(error.message)
      })
   }
   return (
         <div className="max-w-md mx-auto my-10 p-8 space-y-3 rounded-xl dark:bg-slate-900 dark:text-gray-100">
            
         <h1 className="text-2xl font-bold text-center text-red-500">{ error}</h1>
         <h1 className="text-2xl font-bold text-center">Please Register</h1>
            <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
               <div className="space-y-1 text-sm">
                  <label htmlFor="username" className="bloc font-bold text-md text-light-400 mb-3">Username</label>
                  <input type="text" name="name" id="username" placeholder="Username" className="w-full font-bold text-md px-4 py-3 rounded-md border-light-700 bg-light-900 dark:text-gray-900 focus:border-violet-400" required />
               </div>
               <div className="space-y-1 text-sm">
                  <label htmlFor="userphotourl" className="block font-bold text-md text-light-400 mb-3">UserPhotoURL</label>
                  <input type="text" name="userphotourl" id="userphotourl" placeholder="Userphotourl" className="w-full font-bold text-md px-4 py-3 rounded-md border-light-700 bg-light-900 dark:text-gray-900 focus:border-violet-400" required />
               </div>
               <div className="space-y-1 text-sm">
                  <label htmlFor="useremail" className="block font-bold text-md text-light-400 mb-3">Useremail</label>
                  <input type="email" name="email" id="useremail" placeholder="User email" className="w-full px-4 py-3 font-bold text-md rounded-md border-light-700 bg-light-900 dark:text-gray-900 focus:border-violet-400" required />
               </div>
               <div className="space-y-1 text-sm">
                  <label htmlFor="password" className="block font-bold text-md text-light-900 mb-3">Password</label>
                  <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-light-700 bg-light-900 dark:text-gray-900 focus:border-violet-400" required />
               </div>
            <button className="block w-full px-3 py-2 text-center rounded-sm text-light-900 font-bold text-2xl dark:bg-violet-400">Sign Up</button>
            <p className='text-red-600 text-xl font-semibold'>{ error}</p>
            </form>
            <div className="flex items-center pt-4 space-x-1">
               <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
               <p className="px-3 text-sm text-light-400">Login with social accounts</p>
               <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
               <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                     <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
               </button>
               <button onClick={handleFacebookSignIn} aria-label="Log in with Facebook" className="p-3 rounded-sm">
                  <FaFacebook className='w-5 h-5 fill-current'></FaFacebook>
               </button>
               <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                     <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
               </button>
            </div>
            <p className="text-xs text-center sm:px-6 text-light-400">Already you have an account?
               <Link rel="noopener noreferrer" to="/login" className="underline text-blue-500 text-xl"> Please Login</Link>
            </p>
         </div>
   );
};

export default Register;