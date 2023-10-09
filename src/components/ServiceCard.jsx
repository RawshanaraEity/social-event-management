import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

const ServiceCard = ({ service }) => {

  useEffect(() =>{
    Aos.init(
      {
        duration: 1000, 
      offset: 200,
      } 
    );
  },[])


  const { id, title, image, description, price } = service;

  return (
    <div data-aos="flip-right">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="h-64 w-full" src={image} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-semibold text-2xl">{title}</h2>
          <p>{
                description.length > 120 ? <p>{description.slice(0,120)}.....</p> : <p>{description}</p>
             }</p>
            
          <div className="card-actions justify-end mt-5">
          <p className="font-bold text-lg">Price: ${price}</p>
           <Link to={`/service/${id}`}> <button className="btn bg-amber-500 text-lg font-semibold capitalize text-white">Show Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
