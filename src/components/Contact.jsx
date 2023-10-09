import NavBar from "../home/NavBar";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Footer from "./Footer";


const Contact = () => {
    return (
        <div>
             <NavBar></NavBar>
             <Banner></Banner>
            <div className='bg-gray-200 p-7'>
                <h2 className='text-xl text-slate-500 font-bold'>Contact Us</h2>
            </div>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Contact;