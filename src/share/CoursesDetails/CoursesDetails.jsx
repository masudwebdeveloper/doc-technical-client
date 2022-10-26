import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import MyDocument from '../../pages/MyDocument/MyDocument';

const CoursesDetails = () => {
   const singleCourse = useLoaderData();
   const { title, image_url, details, duration, rating, total_price} = singleCourse;
   return (
      <div className="flex flex-col w-full lg:flex-row my-5">
         <div className="p-5  lg:w-[50%] grid flex-grow card bg-base-300 rounded-box ">
            <img className='rounded-lg' src={image_url} alt="" /> 
            <Link to='/courses' className="link link-hover duration-700 hover:text-white hover:bg-sky-700 font-bold text-xl mx-auto bg-sky-400 w-44 py-3 px-3 rounded-lg my-5">Back to Courses</Link>
         </div>
         <div className="divider lg:divider-horizontal">OR</div>
         <div className="grid flex-grow lg:w-[50%] p-5 card bg-base-300 rounded-box ">
            <h1 className='text-5xl font-semibold m-0'>{title}</h1>
            <p className='text-xl'>{details}</p>
            <div className='flex justify-between'>
               <h4>Duration: { duration } months</h4>
               <h4>Rating: { rating.number } </h4>
               <h4>Total Price: { total_price} $</h4>
            </div>
            <Link to='/mydocument' className="link link-hover duration-700 hover:text-white hover:bg-sky-700 font-bold text-xl mx-auto bg-sky-400 w-44 px-3 rounded-lg h-12 pt-2 text-center">Show Pdf file</Link>

         </div>
         
      </div>
   );
};

export default CoursesDetails;