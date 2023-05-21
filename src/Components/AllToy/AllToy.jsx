import React from 'react';

const AllToy = ({allToy}) => {
    // console.log(allToy);
    const {picture,sellerName,name,category,quantity,price}=allToy;
    
    return (
        // Seller: (if available) show the name of the person who posted the toy
// Toy Name
// Sub-category
// Price
// Available Quantity
// View Details button
        <tr>
           <td>{sellerName}</td>
           <td>{name}</td>
            
            <td>{category}</td>
            <td>{quantity}</td>
            <th>{price}</th>
            <th>
                <button className="btn btn-primary">View Details</button>
            </th>
        </tr>
    );
};

export default AllToy;