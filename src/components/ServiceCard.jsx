

const ServiceCard = ({ service }) => {


  const { id, title, image, description, price } = service;

  return (
    <div>
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
            <button className="btn bg-amber-500 text-lg font-semibold capitalize text-white">Show Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
