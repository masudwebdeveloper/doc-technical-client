import React from 'react';
import { createRef } from 'react';
import Pdf from 'react-to-pdf';
const ref = createRef();
const options = {
   orientation: 'landscape'
};

const MyDocument = () => {

   return (
      <div className='text-center lg:text-left'>
         <div style={{ width: "100%", heigth: "100%" }} ref={ref} className="lg:px-20">
            <div className='text-center'>
               <h1 className='text-6xl font-bold'>Masud Rana</h1>
               <address className='text-xl font-semibold'>Natore, Rajshahi, Dhaka, Bangladesh.</address>
               <p className='text-lg'>Email: abdullainfo30@gmail.com</p>
               <div className='divider text-lg font-serif my-10' >Resume</div>
            </div>
            <h4 className='w-[75%] mx-auto text-xl'>Thanks for stopping by. I am Masud, an web developer, font-end developer, my dream wanna to be full stack developer & entrepreneur . On an average day, I learn 10 hours of web programming!</h4>
            <div className='mt-10'>
               <h1 className='uppercase ml-10 text-3xl font-bold'>Experience</h1>
               <div className='ml-20 mt-5'>
                  <h2 className='text-2xl font-semibold'>DATE 2021 - 2022</h2>
                  <h2><span className='text-green-500 text-2xl font-medium'>Web Developer</span>,<span className='text-xl font-serif'> Doc Technical</span></h2>
                  <p className='text-xl my-1'>I am always active my work. and very carefully dedicated. I am friendly with my tream member. mine always try to understand all work and explain my all tream member.</p>
               </div>
            </div>
            <div className='mt-10'>
               <h1 className='uppercase ml-10 text-3xl font-bold'>Education</h1>
               <div className='ml-20 mb-10 mt-5'>
                  <h2 className='text-2xl font-semibold'>DATE 2010 - 2015</h2>
                  <h2><span className='text-green-500 text-2xl font-medium'>SSC</span>,<span className='text-xl font-serif'> Manikpur High School.</span></h2>
                  <p className='text-xl my-1'>Manikpur, Braigram, Natore. </p>
               </div>
               <div className='ml-20 mb-10'>
                  <h2 className='text-2xl font-semibold'>DATE 2015 - 2019</h2>
                  <h2><span className='text-green-500 text-2xl font-medium'>Diploma in Engineering</span>,<span className='text-xl font-serif'>Barguna Polytechnic Institute.</span></h2>
                  <p className='text-xl my-1'>Barguna, Barishal, Dhaka.</p>
               </div>
               <div className='ml-20 mb-10'>
                  <h2 className='text-2xl font-semibold'>DATE 07/2022 - Present</h2>
                  <h2><span className='text-green-500 text-2xl font-medium'>Web Programing</span>,<span className='text-xl font-serif'>Programing-Hero</span></h2>
                  <p className='text-xl my-1'>Level-4, 34, Awal Centre, Banani, Dhaka</p>
               </div>
            </div>
            <div className='mt-10'>
               <h1 className='uppercase ml-10 text-3xl font-bold'>Skills</h1>
               <div className='ml-20 mb-10 mt-5 flex'>
                  <ul className='mr-32'>
                     <li className='list-disc'>HTML</li>
                     <li className='list-disc'>CSS</li>
                     <li className='list-disc'>JAVASCRIPT</li>
                  </ul>
                  <ul>
                     <li className='list-disc'>REACT</li>
                     <li className='list-disc'>REACT ROUTER DOM</li>
                     <li className='list-disc'>FIREBASE AUTHENTICATION</li>
                  </ul>
               </div>
            </div>
            <div className='mt-10'>
               <h1 className='uppercase ml-10 text-3xl font-bold'>Hobies</h1>
               <div className='ml-20 mb-10 mt-5 flex'>
                  <ul className='mr-32'>
                     <li className='list-disc'>Traveling</li>
                     <li className='list-disc'>Coding</li>
                     <li className='list-disc'>Reading</li>
                  </ul>
                  <ul>
                     <li className='list-disc'>Bloging</li>
                     <li className='list-disc'>Support Humanity</li>
                  </ul>
               </div>
            </div>
         </div>
         <Pdf targetRef={ref} filename="code-example.pdf" options={options}>
            {
               ({ toPdf }) => <button className='p-5 bg-indigo-900 text-white text-xl font-semibold rounded-md ml-60 mb-5' onClick={toPdf}>Download pdf</button>
            }
         </Pdf>
      </div>
   );
};

export default MyDocument;