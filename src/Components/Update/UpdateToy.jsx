import React from 'react';
import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
    const data = useLoaderData();
    const { price,quantity,description } = data;
    // console.log(data);
    // Price, available quantity, Detail description
    // console.log(data);
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">

                <div className="card flex-shrink-0 ">
                    <form className="card-body">
                        
                        <div className="flex gap-16">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" defaultValue={price} placeholder="Price" name='price' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text" name="quantity" defaultValue={quantity} placeholder="Quantity" className="input input-bordered" />

                            </div>
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details Description</span>
                            </label>
                            <input type="text" defaultValue={description} placeholder="Details Description" name='description' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full">Add Toy</button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default UpdateToy;