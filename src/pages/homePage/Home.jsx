import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import ServicesCards from "../../components/ServicesCards";
import AboutUs from "../../home/AboutUs";
import NavBar from "../../home/NavBar";
import ContactUs from "../../components/ContactUs";




const Home = () => {
    const allData = useLoaderData()
   
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <ServicesCards services={allData}></ServicesCards>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;