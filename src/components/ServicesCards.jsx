import ServiceCard from "./serviceCard";


const ServicesCards = ({services}) => {

    console.log(services)

    return (
        <div className="py-14 px-5">
             <h2 className="text-5xl font-bold text-center mb-10">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
             {
                services.map(service => <ServiceCard key={service.id} service={service} ></ServiceCard>)
             }
            </div>
        </div>
    );
};

export default ServicesCards;