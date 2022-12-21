import React from 'react';
import faq from '../../assets/brands/faq.svg'

const FrequentlyAQ = () => {
   return (
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-1 p-2 lg:p-5'>
         <section className="dark:bg-gray-800 dark:text-gray-100 rounded-tl-md rounded-br-md rounded-tr-3xl rounded-bl-3xl" data-aos="fade-right" data-aos-duration="2000">
            <div className="container mx-auto flex flex-col items-center px-1 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
               <img src={faq} alt="" />
               <h1 className="text-2xl lg:text-4xl font-bold leading-none">Frequently asked questions <br />
                  <span className="dark:text-violet-400">Answer the question</span>
               </h1>
               <p className="px-4 lg:px-8 mt-8 mb-12 text-md lg:text-lg text-justify">We have listed here the answers to some of your common questions. We request you to read this list once before asking questions. Then you don't have to wait for our reply and save your precious time.</p>
            </div>
         </section>
         <section className="dark:bg-gray-800 dark:text-gray-100 p-5 lg:p-10 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md" data-aos="fade-left" data-aos-duration="2000">
            <div className="flex flex-col mt-0 lg:mt-20">
               <div className="flex flex-col divide-y divide-gray-700">
                  <details>
                     <summary className="py-2 font-semibold text-md lg:text-xl outline-none cursor-pointer focus:underline">How will the course videos be given?</summary>
                     <div className="px-4 pb-4 text-lg font-normal">
                        <p>Course videos will be pre-recorded. After you enroll you can watch the videos at any time by logging in with the login information provided to you. 1-2 modules will be released every week and each module will contain 10-12 videos. You have to finish watching these videos in the first 5 days of the week so that you can submit the end-of-module assignments in the remaining 2 days.</p>
                     </div>
                  </details>
                  <details>
                     <summary className="py-2 font-semibold text-md lg:text-xl outline-none cursor-pointer focus:underline">How to participate in the course tests?</summary>
                     <div className="px-4 pb-4">
                        <p>Each video will have quizzes and you have to answer the quizzes. Besides, there will be one major/medium assignment at the end of each module and you have to complete the assignment within 36 hours and submit the GitHub repository link of the source code. Besides, a final exam will be conducted online at the very end of the entire course. The final result will be determined by adding up the marks obtained in all quizzes, assignments and tests.</p>
                     </div>
                  </details>
                  <details>
                     <summary className="py-2 font-semibold text-md lg:text-xl outline-none cursor-pointer focus:underline">How long will the course last?</summary>
                     <div className="px-4 pb-4 space-y-2">
                        <p>The course will run for six weeks i.e. one and a half months (45 days). In case of any major disaster or unavoidable situation, the course duration may be extended for a few days.</p>
                     </div>
                  </details>
                  <details>
                     <summary className="py-2 font-semibold text-md lg:text-xl outline-none cursor-pointer focus:underline">What do you need to do the course?</summary>
                     <div className="px-4 pb-4 space-y-2">
                        <p>First of all it will require your dedicated time and sincere hard work and perseverance. If you cannot provide these, then you will not benefit from enrolling in this course. You will also need a laptop or computer with Google Chrome browser, Node.js and VS Code editor installed. Next you will need an internet connection of at least 2-10 Mbps. If you have a broadband internet connection, you can watch the videos well. You can watch the videos from mobile browser if you want but we never recommend that because while learning it is very important to code in real code editor which is never done well in mobile browser.</p>
                     </div>
                  </details>
                  <details>
                     <summary className="py-2 font-semibold text-md lg:text-xl outline-none cursor-pointer focus:underline">Does the course fee have to be paid in full before the course?</summary>
                     <div className="px-4 pb-4 space-y-2">
                        <p>yes The course fee must be paid in full at the beginning of the course. Login information will be given to you only after payment of course fee. Any arrears of course fee or request in this regard will not be entertained.</p>
                     </div>
                  </details>
                  <details>
                     <summary className="py-2 font-semibold text-md lg:text-xl outline-none cursor-pointer focus:underline">Are course fees refundable?</summary>
                     <div className="px-4 pb-4 space-y-2">
                        <p>Course fees are non-refundable once the course has commenced. However, you can contact our support center to claim back the course fee before the course starts.</p>
                     </div>
                  </details>
                  <details>
                     <summary className="py-2 font-semibold text-md lg:text-xl outline-none cursor-pointer focus:underline">Will any discount be given on the course fee?</summary>
                     <div className="px-4 pb-4 space-y-2">
                        <p>no We do not give any kind of discount on our course fees and we do not accept any request in this regard. We may offer discount coupons to some people on an individual basis but that is entirely our internal matter. Contact our support center as there may be special consideration for poor students.</p>
                     </div>
                  </details>
                  <details>
                     <summary className="py-2 font-semibold text-md lg:text-xl outline-none cursor-pointer focus:underline">What to do if you get stuck while doing the course?</summary>
                     <div className="px-4 pb-4 space-y-2">
                        <p>For this course we have created a private Facebook group where 4-5 other web developers along with course instructor Sumit Saha will directly answer your various questions. We commit to answer your questions within 24 hours maximum. But in most cases you will get the answer in less time than that. Besides, every week there will be live session on the discussed module where you can directly ask questions and get answers.</p>
                     </div>
                  </details>
                  <details>
                     <summary className="py-2 font-semibold text-md lg:text-xl outline-none cursor-pointer focus:underline">Unable to pay course fee. what to do?</summary>
                     <div className="px-4 pb-4 space-y-2">
                        <p>If for any reason you are facing problem to pay the course fee through bkash app or manual bkash or don't understand how to confirm with us after payment or don't get course enrollment confirmation message/login information, don't hesitate to inbox us directly. Or call our support center. Our support team will try their best to resolve your issue.</p>
                     </div>
                  </details>
                  <details>
                     <summary className="py-2 font-semibold text-md lg:text-xl outline-none cursor-pointer focus:underline">My question is not answered here. Where to ask questions?</summary>
                     <div className="px-4 pb-4 space-y-2">
                        <p>If you want, you can inbox our <span className='text-violet-500'>Facebook page</span> or post in <span className='text-violet-500'>public group</span> by writing your question in detail and adding necessary references. Also our support center number - +88017******51 will be open for you from 10:00 am to 10:00 pm.</p>
                     </div>
                  </details>
               </div>
            </div>
         </section>

      </div>
   );
};

export default FrequentlyAQ;