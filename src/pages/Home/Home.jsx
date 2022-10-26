import React from 'react';
import { FaPlay } from 'react-icons/fa';
import heroPhoto from '../../assets/brands/hero-photo.jpg'
import photo1 from '../../assets/brands/masud-pic.jpg'

const Home = () => {

   return (
      <div>
         <section className='dark:bg-gray-900 py-5 lg:py-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 container px-3 lg:px-20'>
               <div className='flex flex-col justify-center p-5 lg:p-10'>
                  <h1 className='text-4xl lg:text-6xl mb-3 font-bold text-white'>I want work for NASA</h1>
                  <p className='text-lg lg:text-xl font-semibold text-white'>Online learning has become an integral component of higher education, as is evident by the steady emergence and growth of online course offerings and online academic and professional degree programs</p>
                  <button className="btn btn-secondary w-28 mt-5">Explore</button>
               </div>
               <div className='p-5'>
                  <img className=' rounded-xl' src={heroPhoto} alt="" />
               </div>
            </div>
         </section >
         <section className="light:bg-gray-800 py-5 lg:py-10 dark:text-gray-900 container lg:px-20">
            <div className="container flex flex-col mx-auto lg:flex-row">
               <div className="w-full lg:w-1/3 p-5 relative" >
                  <img className='rounded-lg' src={photo1} alt="" />
                  <div className='rounded-full opacity-30 absolute top-[30%] left-[30%] bg-slate-300 w-48 h-48 z-50 flex justify-center items-center'>
                     <div className='flex justify-center items-center rounded-full w-[50%] h-[50%] bg-zinc-100 opacity-200 '>
                        <FaPlay className='w-[50%] h-[50%]'></FaPlay>
                     </div>
                  </div>
               </div>

               <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                  <h2 className="text-5xl font-bold leading-none uppercase">I am Masud Rana</h2>
                  <div className='border-2 mt-5'></div>
                  <p className="mt-4 mb-8 text-lg"><span>Hey,</span> <br />Thanks for stopping by. I am Masud, an web developer, font-end developer, my dream wanna to be full stack developer & entrepreneur . On an average day, I learn 10 hours of web programming!!</p>
                  <h4 className='text-sky-800 text-lg underline'>This is my story</h4>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Home;