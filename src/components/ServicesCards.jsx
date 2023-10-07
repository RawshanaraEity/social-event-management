import ServiceCard from "./serviceCard";


const ServicesCards = ({services}) => {

    console.log(services)

    return (
        <div className="py-14 px-5">
             <h2 className="w-2/3 mx-auto text-5xl font-semibold text-center mb-20">You have an event to plan and we<span className="text-orange-400"> have the solutions</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
             {
                services.map(service => <ServiceCard key={service.id} service={service} ></ServiceCard>)
             }
            </div>
        </div>
    );
};

export default ServicesCards;