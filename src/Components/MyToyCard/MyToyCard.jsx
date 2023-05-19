import React from 'react';
import { Link } from "react-router-dom";


const MyToyCard = ({ toy }) => {
    const { _id, name, picture, sellerEmail, category, price, rating, quantity, sellerName, description } = toy;
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
    return (
        // <div>
        //     <h1>This is my toys</h1>
        //     <div className="card w-96 bg-base-100 shadow-xl">
        //         <figure className="px-10 pt-10">
        //             <img src={picture} alt="Shoes" className="rounded-xl" />
        //         </figure>
        //         <div className="card-body items-center text-center">
        //             <h2 className="card-title">{name}</h2>
        //             <h2>{_id}</h2>
        //             <p>{description}</p>
        //             <div className="card-actions flex">

        //                 <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
        //                <Link to={`/updateToy/${_id}`}><button  className="btn btn-primary">Update</button></Link>
        //             </div>
        //         </div>
        //     </div>
        //     <div>
        
            
                <tr className='flex items-center gap-20'>

                    <td>{name}</td>
                    <td>{description}</td>
                    <td>{sellerName}</td>
                    <td>{price}</td>
                    <td>{quantity}</td>
                    <td><Link to={`/updateToy/${_id}`}><button className="btn btn-primary">Update</button></Link></td>
                    <td> <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button></td>
                </tr>
           

        

    );
};

export default MyToyCard;