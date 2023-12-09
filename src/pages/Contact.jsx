import React from 'react';
import swal from 'sweetalert';
import SectionTitle from '../components/Shared/SectionTitle';



function Contact() {

  const formSubmite=()=>{
    swal("Error", "Form data was not submitted. Please try again.", "error");
  }
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className='pt-14 pb-7 pd:pb-5'>
           <SectionTitle title="Contact Us" align='center'/>
           </div>

      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

        <div className="grid grid-cols-1 gap-8  lg:grid-cols-2">

          <div className="p-4 rounded-lg bg-blue-50">
            <span className="inline-block p-3 text-primery rounded-lg bg-blue-100/80">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </span>

            <h2 className="mt-4 text-2xl font-medium text-gray-800">Chat to sales</h2>
            <p className="mt-2 text-xl text-gray-500">Speak to our friendly team.</p>
            <p className="mt-2 text-xl text-primery">hello@merakiui.com</p>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
            <span className="inline-block p-3 text-primery rounded-lg bg-blue-100/80 dark:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </span>
            
            <h2 className="mt-4 text-2xl font-medium text-gray-800 dark:text-white">Chat to support</h2>
            <p className="mt-2 text-xl text-gray-500 dark:text-gray-400">We’re here to help.</p>
            <p className="mt-2 text-xl text-primery dark:text-blue-400">Start new chat</p>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
            <span className="inline-block p-3 text-primery rounded-lg bg-blue-100/80 dark:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </span>
            
            <h2 className="mt-4 text-2xl font-medium text-gray-800 dark:text-white">Visit us</h2>
            <p className="mt-2 text-xl text-gray-500 dark:text-gray-400">Visit our office HQ..</p>
            <p className="mt-2 text-xl text-primery dark:text-blue-400"> Collingwood VIC 3066 AU</p>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
            <span className="inline-block p-3 text-primery rounded-lg bg-blue-100/80 dark:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </span>
            
            <h2 className="mt-4 text-2xl font-medium text-gray-800 dark:text-white">Call us</h2>
            <p className="mt-2 text-xl text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
            <p className="mt-2 text-xl text-primery dark:text-blue-400">+1 (555) 000-0000</p>
          </div>
        </div>
          
          
          <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
            
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-xl text-gray-600 dark:text-gray-200">First Name</label>
                  <input type="text" placeholder="John" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none" />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-xl text-gray-600 dark:text-gray-200">Last Name</label>
                  <input type="text" placeholder="Doe" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none" />
                </div>
              </div>

              <div className="mt-4">
                <label className="block mb-2 text-xl text-gray-600 dark:text-gray-200">Email address</label>
                <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:outline-none" />
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-xl text-gray-600 dark:text-gray-200">Message</label>

                <textarea  className="block !h-24 w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900  focus:outline-none" placeholder="Message"></textarea>
              </div>

              <button onClick={formSubmite} className="w-full px-6 py-3 mt-4 text-xl font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primery">
                Send message
              </button>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
