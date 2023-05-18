import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const AddToy = () => {
    const {user}=useContext(AuthContext)
    const handleAddToy=(event)=>{
        event.preventDefault();

        const form=event.target;
        const name=form.name.value;
        const picture=form.picture.value;
        const sellerEmail=user?.email;
        const category=form.category.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const sellerName=user?.displayName;
        const description=form.description.value;
        const newToy={name,picture,sellerEmail,category,price,rating,sellerName,description}
        console.log(newToy);
        fetch('http://localhost:5000/toy',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newToy)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">

                <div className="card flex-shrink-0 ">
                    <form onSubmit={handleAddToy} className="card-body">
                        <div className="flex gap-16">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" placeholder="name" name="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Picture</span>
                                </label>
                                <input type="" placeholder="Picture" name="picture" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="flex gap-16">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <input type="email" placeholder="seller Email" name='sellerEmail' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input type="text" name="sellerName" value={user?.user?.email} placeholder="Seller name" className="input input-bordered" />

                            </div>
                            
                        </div>
                        <div className="flex gap-16">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="Price" name='price' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered" />

                            </div>
                        </div>
                        <div className="flex gap-16">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Sub-category</span>
                                </label>
                                <input type="text" placeholder="Sub-category" name='category' className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Details Description</span>
                                </label>
                                <input type="text" placeholder="Details Description" name='description' className="input input-bordered" />
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

export default AddToy;