import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
   const category = useLoaderData();
   return (
      <div>
         <h3>This is category</h3>
      </div>
   );
};

export default Category;