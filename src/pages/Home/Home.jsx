import React from 'react';
import heroPhoto from '../../assets/brands/hero-photo.jpg'

const Home = () => {

   return (
      <section className='dark:bg-gray-900'>
         <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 container px-3 lg:px-20'>
            <div className='flex flex-col justify-center lg:p-10'>
               <h1 className='text-6xl mb-3 font-bold text-white'>I want work for NASA</h1>
               <p className='text-xl font-semibold text-white'>Online learning has become an integral component of higher education, as is evident by the steady emergence and growth of online course offerings and online academic and professional degree programs</p>
               <button className="btn btn-secondary w-28 mt-5">Explore</button>
            </div>
            <div className='p-5'>
               <img className=' rounded-xl' src={heroPhoto} alt="" />
            </div>
         </div>
      </section >
   );
};

export default Home;