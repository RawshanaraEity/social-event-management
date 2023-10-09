

const AboutUs = () => {
    return (
        <div className="bg-gray-50 p-8 md:p-14">
             <div className='text-center'>
                <h1 className="text-5xl md:text-6xl font-bold mb-10">About Us</h1>
               <div className="bg-white shadow-xl rounded-lg py-8 md:py-14">
               <h2 className='w-full md:w-2/3 mx-auto text-4xl font-semibold'><span className='text-orange-400'>Hello!!</span> <br /> We Are an Event Planning Agency</h2>
                <p className='my-10 w-2/3 mx-auto text-xl font-medium'>As the premier event planning company in This City, we know that Each event and client is unique and we believe our services should be as well. We promise that we will give you better experiance and memory as well.</p>
               </div>
            </div>
        </div>
    );
};

export default AboutUs;