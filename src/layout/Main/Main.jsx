import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../parts/Footer/Footer';
import Header from '../../parts/Header/Header';

const Main = () => {
   return (
      <div>
         <Header></Header>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Main;