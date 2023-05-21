import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToyCard from '../MyToyCard/MyToyCard';
import { Link, useLoaderData } from 'react-router-dom';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    // console.log(user);
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])


    const handleDelete = (id) => {
        console.log(id);
        const process = confirm("are you sure for delete")
        if (process) {
            fetch(`http://localhost:5000/myToys/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successFully')
                    }
                })
        }
    }

    const updateData = useLoaderData();

    // console.log(updateData);

    
    return (


        <div className="overflow-x-auto w-full">
            

            <table className="table w-full">


                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Toy Name</th>
                        <th>Rating</th>
                        <th>Quantity</th>
                        <th>Action</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        toys.map(toy => <tr>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={toy.picture} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>{toy.name}</td>
                            <td>{toy.rating}</td>
                            <td>{toy.quantity}</td>
                            <td><Link to={`/updateToy/${toy._id}`}><button className='btn btn-primary'>Update</button></Link></td>
                            <td><button onClick={() => handleDelete(toy._id)} className='btn btn-secondary'>Delete</button></td>

                        </tr>
                        )
                    }



                </tbody>


            </table>

        </div>





    );
};

export default MyToys;