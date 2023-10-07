import { useLoaderData } from "react-router-dom";
import ServicesCards from "../components/ServicesCards";
import NavBar from "../home/NavBar";


const Services = () => {
    const allData = useLoaderData()
  
    return (
        <div>
            <NavBar></NavBar>
            <div className='bg-gray-200 p-7'>
                <h2 className='text-xl text-slate-500 font-bold'>Services</h2>
            </div>
            <div>
                <h2 className="text-center text-6xl font-bold mt-14">Our Best Services</h2>
            </div>
            <ServicesCards services={allData}></ServicesCards>
        </div>
    );
};

export default Services;