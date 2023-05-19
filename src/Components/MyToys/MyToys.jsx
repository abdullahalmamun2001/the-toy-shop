import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToyCard from '../MyToyCard/MyToyCard';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    // console.log(user);
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])
    return (
        <div className="overflow-x-auto">
            <h1>This is all toys{toys.length}</h1>
            <table className="table table-compact w-full">
                <thead>
                    <tr className='flex justify-between gap-20'>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy => <table className="table table-compact w-full">

                            <MyToyCard key={toy._id} toy={toy}></MyToyCard>
                        </table>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default MyToys;