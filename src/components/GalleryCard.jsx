import React from 'react';

const GalleryCard = () => {
    return (
        <div className='my-14'>
            <h2 className='text-6xl text-center font-semibold my-14'>See Our Best <span className='text-orange-400'>Events</span> Gallary</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div>
                    <img className='h-96 rounded-lg w-full' src="https://i.ibb.co/mtzTS6s/anni.jpg" alt="" />
                </div>
                <div>
                    <img className='h-96 rounded-lg' src="https://i.ibb.co/5TBDWvX/marc-babin-ec-GZWPOvya0-unsplash.jpg" alt="" />
                </div>

                <div>
                    <img className='h-96 rounded-lg' src="https://i.ibb.co/N2mc5qv/wedding.jpg" alt="" />
                </div>
                <div>
                    <img className='h-96 rounded-lg' src="https://i.ibb.co/8b7PRqs/hbd.jpg" alt="" />
                </div>
                <div>
                    <img className='h-96 w-full rounded-lg' src="https://i.ibb.co/Y8hMYJx/paul-binas-Hi-YWw-O2-U-0-unsplash.jpg" alt="" />
                </div>
                <div>
                    <img className='h-96 w-full rounded-lg' src="https://i.ibb.co/0fxDFLy/graduation.jpg" alt="" />
                </div>
                <div>
                    <img className='h-96 rounded-lg' src="https://i.ibb.co/CPT091L/bridal-shower.jpg" alt="" />
                </div>
                <div>
                    <img className='h-96 rounded-lg' src="https://i.ibb.co/djdbmX8/anniversary3.jpg" alt="" />
                </div>
                <div>
                    <img className='h-96 rounded-lg' src="https://i.ibb.co/hRJzY9B/engagement.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default GalleryCard;