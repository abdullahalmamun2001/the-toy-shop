import React, { useEffect, useState } from 'react';
import AllToy from '../AllToy/AllToy';

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    useEffect(() => {
        fetch('https://assignment-11-server-data.vercel.app/toy')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])
    return (
        <div>
            <h1>This is all toys{allToys.length}</h1>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                            
                                <th>Seller</th>
                                <th>Toy Name</th>
                                <th>Category</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allToys.map(allToy => <AllToy key={allToy._id} allToy={allToy}></AllToy>)
                            }
                           
                        </tbody>
                        

                    </table>
                </div>

            </div>
        </div>
    );
};

export default AllToys;