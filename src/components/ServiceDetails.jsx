import { useLoaderData, useParams } from "react-router-dom";
import NavBar from "../home/NavBar";
import { useEffect, useState } from "react";
import ServiceDetailsCard from "./ServiceDetailsCard";


const ServiceDetails = () => {
    const allData = useLoaderData()
    const {id} = useParams()
    
    const [newData, setNewData] = useState({})

    useEffect(() =>{
        const findData = allData?.find(data => data.id === id)
        setNewData(findData)
    },[allData,id])

    return (
        <div>
            <NavBar></NavBar>
            <div>
                <ServiceDetailsCard newData={newData}></ServiceDetailsCard>
            </div>
        </div>
    );
};

export default ServiceDetails;


