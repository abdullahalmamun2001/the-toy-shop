import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import AOS from 'aos';
import pic1 from './../../assets/R (1).jfif'
import pic2 from './../../assets/haha.jfif'
import pic3 from './../../assets/R.jfif'
import pic4 from './../../assets/R (2).jfif'
import pic5 from './../../assets/photo.jfif'
import pic6 from './../../assets/download.jfif'
// import 'sweetalert2/src/sweetalert2.scss'

const Extra = () => {
    const handleOrder = () => {
        Swal.fire(
            'Good job!',
            'Your Order is success',
            'success'
        )
    }
    // const [extra, setExtra] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/toy')
    //         .then(res => res.json())
    //         .then(data => setExtra(data))
    // }, [])
    return (
        // <div>
        //     <h1 className='text-center my-10 text-4xl'>Its Your new Collection,If You need Please Order</h1>
        //     <div className='grid grid-cols-3'>
        //         {
        //             extra.map(ex =>
        //                 <div className="card w-96 h-96 bg-base-100 shadow-xl" data-aos="fade-down"
        //                     data-aos-easing="linear"
        //                     data-aos-duration="1500">
        //                     <figure><img src={ex.picture} alt="Shoes" /></figure>
        //                     <div className="card-body">
        //                         <h2 className="card-title">Price : {ex.price}</h2>

        //                         <div className="card-actions justify-end">
        //                             <button onClick={handleOrder} className="btn btn-primary">Order</button>
        //                         </div>
        //                     </div>
        //                 </div>)
        //         }
        //     </div>
        // </div>
        // <div>
        //     <div>
        // //     <h1 className='text-center my-10 text-4xl'>Its Your new Collection,If You need Please Order</h1>
        // //     <div className='grid grid-cols-3'></div>

        //     <img src={pic1} alt="" />
        //     <img src={pic2} alt="" />
        //     <img src={pic3} alt="" />
        //     <img src={pic4} alt="" />
        //     <img src={pic5} alt="" />
        //     <img src={pic6} alt="" />
        // </div>
        <div className='mt-40 mb-20'>
            <h1 className='text-center my-10 text-4xl'>Its Your new Collection,If You need Please Order</h1>
            <div className="grid grid-cols-3">
                <div className="card w-96 h-96 bg-base-100 shadow-xl">
                    <figure><img src={pic1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <p>Tractor</p>
                        <div className="card-actions justify-end">
                            <button onClick={pic1} className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 h-96 bg-base-100 shadow-xl" >
                    <figure><img src={pic2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 h-96 bg-base-100 shadow-xl">
                    <figure><img src={pic3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 h-96 bg-base-100 shadow-xl">
                    <figure><img src={pic4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 h-96 bg-base-100 shadow-xl">
                    <figure><img src={pic5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 h-96 bg-base-100 shadow-xl">
                    <figure><img src={pic6} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extra;