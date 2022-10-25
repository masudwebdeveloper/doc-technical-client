import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CoursesDetails = () => {
   const singleCourse = useLoaderData();
   console.log(singleCourse);
   return (
      <div>
         <h1>
            this courses details page
         </h1>
      </div>
   );
};

export default CoursesDetails;