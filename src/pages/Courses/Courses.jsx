import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
   const [categories, setCategories] = useState([]);
   const courses = useLoaderData();
   useEffect(() => {
      fetch('https://doc-technical-server.vercel.app/categories-courses')
         .then(res => res.json())
         .then(data => setCategories(data))
   }, [])
   return (
      <section>
         <div className='grid grid-col-1 lg:grid-cols-3 px-5 lg:px-20 '>
            <aside className='col-span-1'>
               <h3 className='text-xl font-semibold mt-3 text-slate-400'>Do you want to details course Click Below Course?</h3>
               <ul className="menu bg-base-100 w-56 rounded my-5">
                  {
                     categories.map((category, index) => <li key={index} className='hover-bordered mb-1'>
                        <Link to={`/course-category/${category.id}`}>{category.name}</Link>
                     </li>)
                  }

               </ul>
            </aside>
            <aside className='col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-5 my-5'>
               {
                  courses.map(course => <Course key={course._id} course={course}></Course>)
               }
            </aside>
         </div>
      </section>
   );
};

export default Courses;