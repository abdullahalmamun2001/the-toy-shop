import React, { useEffect, useState } from 'react';

const Extra = () => {
    const [extra, setExtra] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/toy')
            .then(res => res.json())
            .then(data => setExtra(data))
    }, [])
    return (
        <div>
            <h1 className='text-center my-10 text-4xl'>Its Your new Collection,If You need Please Order</h1>
            <div className='grid grid-cols-3'>
                {
                    extra.map(ex =>
                        <div className="card w-96 h-96 bg-base-100 shadow-xl">
                            <figure><img src={ex.picture} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Price : {ex.price}</h2>
                                
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Order</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Extra;