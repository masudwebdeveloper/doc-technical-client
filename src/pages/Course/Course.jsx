import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
   const { image_url, title, duration, total_price, details, _id  } = course;
   return (
      <div className="card w-96 bg-base-100 shadow-xl">
         <figure><img src={image_url} alt="course" /></figure>
         <div className="card-body">
            <h2 className="card-title">{ title}</h2>
            <p>{ details.length > 100 ? details.slice(0,150) + "..." : details}</p>
            <div className="card-actions justify-end">
               <Link to={`/courses/${_id}`} className="btn btn-primary">Details</Link>
            </div>
         </div>
      </div>
   );
};

export default Course;