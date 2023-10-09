import Footer from "../components/Footer";
import GalleryCard from "../components/GalleryCard";
import NavBar from "../home/NavBar";


const Gallery = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='bg-gray-200 p-7'>
                <h2 className='text-xl text-slate-500 font-bold'>Gallery</h2>
            </div>
           <GalleryCard></GalleryCard>
           <Footer></Footer>
        </div>
    );
};

export default Gallery;