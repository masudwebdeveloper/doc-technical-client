import React from 'react';
import photo1 from '../../assets/brands/cors.png';
import photo2 from '../../assets/brands/Firebase.png';
import photo3 from '../../assets/brands/firebase-auth.png';
import photo4 from '../../assets/brands/private-route.png';
import photo5 from '../../assets/brands/node.jpg';
import photo6 from '../../assets/brands/node-work.png';
import photo7 from '../../assets/brands/spa.png';

const Blogs = () => {
   return (
      <section className="dark:bg-gray-800 dark:text-gray-100 pt-5">
         <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12" data-aos="fade-up">
            <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900" data-aos="zoom-in">
               <img src={ photo1} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
               <div className="p-6 space-y-2 lg:col-span-5">
                  <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">What is cors?</h3>
                  <span className="text-xs dark:text-gray-400">Octobar 25, 2022</span>
                  <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
               </div>
            </a>
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" >
               <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900" data-aos="fade-left">
                  <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={photo2} />
                  <div className="p-6 space-y-2">
                     <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Why we use Firebase?</h3>
                     <span className="text-xs dark:text-gray-400">Octobar 24, 2022</span>
                     <p>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.</p>
                  </div>
               </a>
               <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900" data-aos="zoom-in">
                  <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={photo3} />
                  <div className="p-6 space-y-2">
                     <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">What other options do you have to implement authentication?</h3>
                     <span className="text-xs dark:text-gray-400">Octobar 22, 2022</span>
                     <p>Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                  </div>
               </a>
               <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900" data-aos="fade-right">
                  <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={photo4} />
                  <div className="p-6 space-y-2">
                     <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">How does the private route work?</h3>
                     <span className="text-xs dark:text-gray-400">Octobar 23, 2022</span>
                     <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</p>
                  </div>
               </a>
               <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block" data-aos="fade-left">
                  <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={photo5} />
                  <div className="p-6 space-y-2">
                     <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">What is Node?</h3>
                     <span className="text-xs dark:text-gray-400">Octobar 24, 2022</span>
                     <p>Javascript has existed since 1995 and has since taken over as the dominant language for web development. For much of its life, JavaScript was used mainly for client-side scripting inside script tags executing in web browsers. This limitation meant that developers were often working in many different languages and frameworks between the front-end (client-side) and backend (server-side) aspects of a web application.</p>
                  </div>
               </a>
               <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block" data-aos="zoom-in">
                  <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={photo6} />
                  <div className="p-6 space-y-2">
                     <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">How does Node work?</h3>
                     <span className="text-xs dark:text-gray-400">Octobar 25, 2022</span>
                     <p>Node is completely event-driven. Basically the server consists of one thread processing one event after another. A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function.</p>
                  </div>
               </a>
               <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block" data-aos="fade-right">
                  <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={ photo7} />
                  <div className="p-6 space-y-2">
                     <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">What is Single Page Application?</h3>
                     <span className="text-xs dark:text-gray-400">Octobar 26, 2022</span>
                     <p>An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown.</p>
                  </div>
               </a>
            </div>
            <div className="flex justify-center">
               <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button>
            </div>
         </div>
      </section>
   );
};

export default Blogs;