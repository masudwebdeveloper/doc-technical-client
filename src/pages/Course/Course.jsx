import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
   const { image_url, title, duration, total_price, details, _id  } = course;
   return (
      <div className="card bg-base-100 shadow-xl hover:scale-105 duration-500">
         <figure><img src={image_url} alt="course" /></figure>
         <div className="card-body">
            <h2 className="card-title text-2xl font-bold">{ title}</h2>
            <p>{details.length > 100 ? details.slice(0, 150) + "..." : details}</p>
            <div className='flex flex-col lg:flex-row gap-y-3 justify-between'>
               <button className='py-2 px-4 bg-slate-700 text-white font-semibold rounded-lg'>Price: {total_price } $</button>
               <button className='py-2 px-4 bg-slate-700 text-white font-semibold rounded-lg'>Duration: { duration} Months</button>
            </div>
            <div className="card-actions justify-end">
               <Link to={`/courses/${_id}`} className="btn btn-primary">Enroll <FaArrowRight className='inline ml-1'></FaArrowRight></Link>
            </div>
         </div>
      </div>
   );
};

export default Course;