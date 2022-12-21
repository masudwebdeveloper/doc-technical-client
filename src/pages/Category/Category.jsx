import React from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const Category = () => {
   const category = useLoaderData();
   const { title, image_url, details, total_price, duration, rating } = category[0];
   return (
      <section className="dark:bg-gray-800 dark:text-gray-100">
         <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
               <h1 className="text-5xl font-bold leading-none sm:text-6xl">{title}</h1>
               <p className="mt-6 mb-8 text-lg sm:mb-12">{details}</p>
               <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <a rel="noopener noreferrer" href="##" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Price: {total_price} $</a>
                  <a rel="noopener noreferrer" href="##" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Duration: {duration} months</a>
               </div>
               <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-5">
                  <a rel="noopener noreferrer" href="##" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Rating: {rating.number} <FaStar className='inline ml-2 text-warning'></FaStar></a>
                  <Link rel="noopener noreferrer" to="/courses" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to Course <FaArrowRight className='inline ml-2'></FaArrowRight></Link>
               </div>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
               <img src={image_url} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
            </div>
         </div>
      </section>
   );
};

export default Category;