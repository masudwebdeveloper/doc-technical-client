import React from 'react';

const Courses = () => {
   return (
      <section className='grid grid-col-1 lg:grid-cols-3'>
         <aside className='col-span-1'>
         <h3>left side</h3>
         </aside>
         <aside className='col-span-2'>
            <h3>right side</h3>
         </aside>
      </section>
   );
};

export default Courses;