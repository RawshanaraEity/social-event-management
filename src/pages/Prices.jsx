import React from 'react';
import NavBar from '../home/NavBar';

const Prices = () => {

    return (
       <div>
        <NavBar></NavBar>
        <div className='bg-gray-200 p-7'>
                <h2 className='text-xl text-slate-500 font-bold'>Prices</h2>
            </div>
          <div className="bg-gray-800">
      <h2 className="text-6xl text-center text-white font-bold  pt-14">Our Prices</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20 px-5">

        <div className="card bg-base-100 lg:mt-10 shadow-xl">
         <p className="text-2xl font-bold w-28 mx-auto py-10 text-red-500 bg-gray-200 rounded-full shadow-lg items-center flex justify-center mt-8">
           $899
          </p>
        
          <div className="card-body">
            <h2 className=" text-center font-semibold text-2xl">
            Month-of Coordination
            </h2>
            <div className=" justify-end text-center mt-5 text-gray-400 font-semibold text-lg">
              <p>Pre-wedding preparations</p>
              <p className='my-5'>Wedding Day</p>
              <p>Post-wedding</p>
              <p className='my-5'>Wedding Consultation</p>
              <div>
                <button className='btn bg-amber-500 text-white'>
                    booked
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
         <p className="text-2xl font-bold w-28 mx-auto py-10 text-red-500 bg-gray-200 rounded-full items-center flex justify-center mt-8">
           $999
          </p>
        
          <div className="card-body">
            <h2 className=" text-center font-semibold text-2xl">
            Full-Service Planning
            </h2>
            <div className=" justify-end text-center mt-5 text-gray-400 font-semibold text-lg">
              <p>Pre-wedding preparations</p>
              <p className='my-5'>Wedding Day</p>
              <p>Post-wedding</p>
              <p className='my-5'>Wedding Consultation</p>
              <div>
                <button className='btn bg-amber-500 text-white'>
                    booked
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 lg:mt-10 shadow-xl">
         <p className="text-2xl font-bold w-28 mx-auto py-10 text-red-500 bg-gray-200 rounded-full items-center flex justify-center mt-8">
           $477
          </p>
        
          <div className="card-body">
            <h2 className=" text-center font-semibold text-2xl">
            Day-of Managing
            </h2>
            <div className=" justify-end text-center mt-5 text-gray-400 font-semibold text-lg">
              <p>Pre-wedding preparations</p>
              <p className='my-5'>Wedding Day</p>
              <p>Post-wedding</p>
              <p className='my-5'>Wedding Consultation</p>
              <div>
                <button className='btn bg-amber-500 text-white'>
                    booked
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
       </div>
       </div>
    );
};

export default Prices;