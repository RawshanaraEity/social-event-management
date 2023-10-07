import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import ServicesCards from "../../components/ServicesCards";
import AboutUs from "../../home/AboutUs";
import NavBar from "../../home/NavBar";
import GalleryCard from "../../components/GalleryCard";
import Contact from "../../components/Contact";




const Home = () => {
    const allData = useLoaderData()
   
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <ServicesCards services={allData}></ServicesCards>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;