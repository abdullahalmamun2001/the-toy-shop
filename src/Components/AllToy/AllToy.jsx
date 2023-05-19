import React from 'react';

const AllToy = ({allToy}) => {
    console.log(allToy);
    const {picture,sellerName,name,category,quantity,price}=allToy;
    return (
        <tr>
           <td>{sellerName}</td>
           <td>{name}</td>
            {/* <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={picture} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td> */}
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