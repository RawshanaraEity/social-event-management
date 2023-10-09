import React from 'react';



const ServiceDetailsCard = ({newData}) => {
    const {title,image,description,price} = newData;
    return (
        <div className='w-2/4 mx-auto my-14'>
             <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="h-72 w-full" src={image} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-semibold text-2xl">{title}</h2>
          <p>{description}</p>
            
          <div className="card-actions justify-end mt-5">
          <p className="font-bold text-lg">Price: ${price}</p>
          <button className='btn bg-amber-500 text-lg font-semibold capitalize text-white'>Booked Now</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ServiceDetailsCard;