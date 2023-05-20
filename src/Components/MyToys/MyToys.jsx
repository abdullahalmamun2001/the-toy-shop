import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToyCard from '../MyToyCard/MyToyCard';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    // console.log(user);
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch(`https://assignment-11-server-data.vercel.app/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])
    return (
        

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                   
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Image</th>
                            <th>Toy Name</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        {
                            toys.map(toy => <table className="table table-compact w-full">

                                <MyToyCard key={toy._id} toy={toy}></MyToyCard>
                            </table>)
                        }
                        </tr>


                    </tbody>


                </table>

            </div>
        




    );
};

export default MyToys;