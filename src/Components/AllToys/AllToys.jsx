import React, { useEffect, useState } from 'react';
import AllToy from '../AllToy/AllToy';

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/toy')
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
                                allToys.map(allToy =>  <tr>
                                    <td>{allToy.sellerName}</td>
                                    <td>allToy.{name}</td>
                                     
                                     <td>{allToy.category}</td>
                                     <td>{allToy.quantity}</td>
                                     <td>{allToy.price}</td>
                                     <td>
                                         <button className="btn btn-primary">View Details</button>
                                     </td>
                                 </tr>)
                            }
                            {/* {
                                allToys.map(allToy => <AllToy key={allToy._id} allToy={allToy}></AllToy>)
                            } */}
                           
                        </tbody>
                        

                    </table>
                </div>

            </div>
        </div>
    );
};

export default AllToys;