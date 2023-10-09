import Aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';


const Banner = () => {

  useEffect(() =>{
    Aos.init(
      {
        duration: 1000, 
      offset: 200,
      } 
    );
  },[])


  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/Y0BR61K/andrew-knechel-g-G6yeh-L64fo-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md" data-aos="zoom-in-up" >
            <h1 className="mb-5 text-4xl md:text-5xl font-bold">
             Let's Celebrate Your Special Moment With Us!!!
            </h1>
            <p className="mb-5">
                Planning a Wedding,Birthday Parties,Engagement or any other events in our busy city is not so easy.Thats why we are here to help you make it easy and more attractive.
            </p>
            <button className="btn bg-amber-500 border-none text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
