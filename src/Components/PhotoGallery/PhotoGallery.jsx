import React from 'react';
import pic1 from './../../assets/OIP (1).jfif'
import pic2 from './../../assets/OIP (2).jfif'
import pic3 from './../../assets/OIP (3).jfif'
import pic4 from './../../assets/download (1).jfif'
import pic5 from './../../assets/th.jfif'
import pic6 from './../../assets/download.jfif'

const PhotoGallery = () => {
    return (
        <div className='bg-gray-600'>
            <h1 className='align-center text-3xl text-center my-10 text-cyan-300' >This is Our Photo Gallery</h1>
            <div className='grid grid-cols-3 gap-5'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-4/12' src={pic1} alt="Shoes" /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={pic2} alt="Shoes" /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={pic3} alt="Shoes" /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={pic4} alt="Shoes" /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={pic5} alt="Shoes" /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={pic6} alt="Shoes" /></figure>

                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;