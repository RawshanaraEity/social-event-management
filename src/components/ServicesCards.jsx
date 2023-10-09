import ServiceCard from "./serviceCard";
import Aos from 'aos';


const ServicesCards = ({services}) => {
   

    return (
        <div className="py-14 px-5">
             <p className="w-full md:w-2/3 mx-auto text-3xl md:text-4xl font-semibold text-center mb-20">Make Dreams into Memorable Moments<br /><span className="text-orange-400"> Your Events,  Our Expertise!</span></p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
             {
                services.map(service => <ServiceCard key={service.id} service={service} ></ServiceCard>)
             }
            </div>
        </div>
    );
};

export default ServicesCards;