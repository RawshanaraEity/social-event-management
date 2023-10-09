import React from 'react';
import NavBar from '../home/NavBar';
import AboutUs from '../home/AboutUs';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='bg-gray-200 p-7'>
                <h2 className='text-xl text-slate-500 font-bold'>About Us</h2>
            </div>
           <AboutUs></AboutUs>
           <Footer></Footer>

        </div>
    );
};

export default About;