import React from 'react';
import { FaArrowRight, FaBootstrap, FaCss3, FaHtml5, FaNodeJs, FaPlay, FaReact } from 'react-icons/fa';
import heroPhoto from '../../assets/brands/hero-photo.jpg'
import photo1 from '../../assets/brands/masud-pic.jpg';
import photo2 from '../../assets/brands/guides.png';
import photo3 from '../../assets/brands/productive.png';
import photo4 from '../../assets/brands/developer.png';
import WebCourse from '../../share/WebCourse/WebCourse';
import WebProjectGallary from '../../share/WebProjectGallary/WebProjectGallary';
import CourseBenifit from '../../share/CourseBenifit/CourseBenifit';
import SupportGroup from '../../share/SupportGroup/SupportGroup';
import FrequentlyAQ from '../../share/FrequentlyAQ/FrequentlyAQ';

const Home = () => {

   return (
      <div>
         <section className='dark:bg-gray-800 py-5 lg:py-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 container mx-auto  px-3' >
               <div className='flex flex-col justify-center p-5 lg:p-10' data-aos="fade-right" data-aos-duration="2000">
                  <h1 className='text-4xl lg:text-6xl mb-3 font-bold text-white'>I want work for NASA</h1>
                  <p className='text-lg lg:text-xl font-semibold text-white'>Online learning has become an integral component of higher education, as is evident by the steady emergence and growth of online course offerings and online academic and professional degree programs</p>
                  <button className="btn btn-secondary w-40 mt-5 hover:scale-105 hover:translate-x-4 duration-700">Explore <FaArrowRight className='ml-2 inline'></FaArrowRight></button>
               </div>
               <div className='p-5' data-aos="fade-left" data-aos-duration="2000">
                  <img className=' rounded-xl' src={heroPhoto} alt="" />
               </div>
            </div>
         </section >
         <section className="light:bg-gray-800 py-5 lg:py-10 dark:text-gray-900 container mx-auto lg:px-20">
            <div className="container flex flex-col mx-auto lg:flex-row">
               <div className="w-full lg:w-1/3 p-5 relative" data-aos="zoom-in-down" data-aos-duration="2000">
                  <img className='rounded-lg' src={photo1} alt="" />
                  <div className='rounded-full opacity-30 absolute top-[30%] left-[30%] bg-slate-300 w-48 h-48 z-50 flex justify-center items-center'>
                     <div className='flex justify-center items-center rounded-full w-[50%] h-[50%] bg-zinc-100 opacity-200 '>
                        <FaPlay className='w-[50%] h-[50%]'></FaPlay>
                     </div>
                  </div>
               </div>

               <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12" data-aos="zoom-in-up" data-aos-duration="2000">
                  <h2 className="text-5xl font-bold leading-none uppercase">I am Masud Rana</h2>
                  <div className='border-2 mt-5'></div>
                  <p className="mt-4 mb-8 text-lg"><span>Hey,</span> <br />Thanks for stopping by. I am Masud, an web developer, font-end developer, my dream wanna to be full stack developer & entrepreneur . On an average day, I learn 10 hours of web programming!!</p>
                  <h4 className='text-sky-800 text-lg underline'>This is my story</h4>
               </div>
            </div>
         </section>
         <section className="lg:py-10 dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto p-4 my-6 space-y-2 text-center" data-aos="fade-down" data-aos-duration="2000">
               <h2 className="text-4xl lg:text-5xl font-bold">whatever web development will be taught</h2>
               <p className="dark:text-gray-300 text-lg">Team Member with Doc Technical</p>
            </div>
            <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
               <div className="flex flex-col items-center p-4" data-aos="fade-right" data-aos-duration="2000">
                  <FaHtml5 className='text-6xl'></FaHtml5>
                  <h3 className="my-3 text-3xl font-semibold">HTML5</h3>
                  <div className="space-y-1 leading-tight">
                     <p>html4 & html5 all tags</p>
                  </div>
               </div>
               <div className="flex flex-col items-center p-4" data-aos="zoom-in" data-aos-duration="2000">
                  <FaCss3 className='text-6xl'></FaCss3>
                  <h3 className="my-3 text-3xl font-semibold">CSS3</h3>
                  <div className="space-y-1 leading-tight">
                     <p>css all styles</p>
                  </div>
               </div>
               <div className="flex flex-col items-center p-4" data-aos="fade-left" data-aos-duration="2000">
                  <h1 className='uppercase text-6xl'>js</h1>
                  <h3 className="my-3 text-3xl font-semibold">JavaScript</h3>
                  <div className="space-y-1 leading-tight">
                     <p>JavaScript All functionality</p>
                  </div>
               </div>
               <div className="flex flex-col items-center p-4" data-aos="fade-right" data-aos-duration="2000">
                  <FaBootstrap className='text-6xl'></FaBootstrap>
                  <h3 className="my-3 text-3xl font-semibold">Bootstrap</h3>
                  <div className="space-y-1 leading-tight">
                     <p>Bootstrap with react Bootsrap</p>
                  </div>
               </div>
               <div className="flex flex-col items-center p-4" data-aos="zoom-in" data-aos-duration="2000">
                  <FaReact className='text-6xl'></FaReact>
                  <h3 className="my-3 text-3xl font-semibold">React</h3>
                  <div className="space-y-1 leading-tight">
                     <p>React with React Router Dom</p>
                  </div>
               </div>
               <div className="flex flex-col items-center p-4" data-aos="fade-left" data-aos-duration="2000">
                  <FaNodeJs className='text-6xl'></FaNodeJs>
                  <h3 className="my-3 text-3xl font-semibold">Node Js</h3>
                  <div className="space-y-1 leading-tight">
                     <p>Nodejs with MongoDB</p>
                  </div>
               </div>
            </div>
         </section>

         <section className="light:bg-gray-800 dark:text-gray-800 lg:px-20 pb-5">
            <div className="container mx-auto flex flex-col items-center px-5 py-10 text-center  xl:max-w-3xl" data-aos="fade-down" data-aos-duration="2000">
               <h1 className="text-4xl font-bold leading-none sm:text-5xl">Find best
                  <span className="dark:text-violet-400"> Talented</span> Candidate
               </h1>
               <div className="flex flex-wrap flex-row justify-center hover:scale-105 hover:translate-x-3 mt-5 transition duration-700">
                  <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"> Successful Student <FaArrowRight className='inline ml-2'></FaArrowRight> </button>
               </div>
            </div>
            <div className="container mx-auto px-5 lg:p-10 grid grid-flow-col-1 lg:grid-cols-4 gap-4">
               <div className="lg:row-span-4 col-span-4 lg:col-span-2 bg-gray-800 rounded-xl flex flex-col p-5 " data-aos="fade-right" data-aos-duration="2000">
                  <img className='w-48 mb-2' src={photo2} alt="" />
                  <div className='pr-3'>
                     <h3 className='text-white text-3xl font-semibold'>Candidate Guides</h3>
                     <p className='text-white'>We shortlist and pre-assess resumes and candidates based on your unique needs.</p>
                  </div>
               </div>
               <div className="col-span-4 lg:col-span-2 row-span-2 flex items-center bg-gray-800 rounded-xl " data-aos="fade-down" data-aos-duration="2000">
               <img className='w-48 mb-2 p-4' src={photo3} alt="" />
                  <div className='pr-3'>
                     <h3 className='text-white text-3xl font-semibold'>Productive team</h3>
                     <p className='text-white'>Build high performing teams crafted just for you with the right fit for your specific requirements.</p>
                  </div>
               </div>
               <div className="col-span-4 lg:col-span-2 row-span-2 flex items-center bg-gray-800 rounded-xl" data-aos="fade-up" data-aos-duration="2000">
               <img className='w-48 mb-2 p-4' src={photo4} alt="" />
                  <div className='pr-3'>
                     <h3 className='text-white text-3xl font-semibold'>Futuristic Developer</h3>
                     <p className='text-white'>Hire energetic Developers who are challenge takers and a quick learner.</p>
                  </div>
               </div>
            </div>
         </section>
         <div>
            <WebCourse></WebCourse>
         </div>
         {/* web gallary */}
         <div>
            <WebProjectGallary></WebProjectGallary>
         </div>
         {/* our course benifit */}
         <div>
            <CourseBenifit></CourseBenifit>
         </div>
         {/* support group section */}
         <div>
            <SupportGroup></SupportGroup>
         </div>
         {/* frequently answer Questions */}
         <div>
            <FrequentlyAQ></FrequentlyAQ>
         </div>
      </div>
   );
};

export default Home;