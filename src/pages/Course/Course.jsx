import React from 'react';

const Course = ({ course }) => {
   const { image_url, title, duration, total_price, details  } = course;
   return (
      <div className="card w-96 bg-base-100 shadow-xl">
         <figure><img src={image_url} alt="course" /></figure>
         <div className="card-body">
            <h2 className="card-title">{ title}</h2>
            <p>{ details.length > 100 ? details.slice(0,150) + "..." : details}</p>
            <div className="card-actions justify-end">
               <button className="btn btn-primary">Buy Now</button>
            </div>
         </div>
      </div>
   );
};

export default Course;