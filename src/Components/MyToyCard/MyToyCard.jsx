import React from 'react';
import { Link } from "react-router-dom";


const MyToyCard = ({ toy }) => {
    const { _id, name, picture, sellerEmail, category, price, rating, quantity, sellerName, description } = toy;
    const handleDelete = (id) => {
        console.log(id);
        const process = confirm("are you sure for delete")
        if (process) {
            fetch(`https://assignment-11-server-data.vercel.app/myToys/${id}`, {
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
    return (
         
       <tr>
         
         <td>
           <div className="flex items-center space-x-3">
             <div className="avatar">
               <div className="mask mask-squircle w-12 h-12">
                 <img src={picture} alt="Avatar Tailwind CSS Component" />
               </div>
             </div>
             
           </div>
         </td>
         <td>{name}</td>
         <td>{rating}</td>
         <td>{quantity}</td>
         <td><button>Update</button></td>
       
       </tr>




    );
};

export default MyToyCard;