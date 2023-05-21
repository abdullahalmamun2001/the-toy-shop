import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import logo from '../../assets/logo.png'


const Navber = () => {
    const {user,logOut}=useContext(AuthContext);
    // console.log(user);
    const handleLogOut=()=>{
        logOut()
        .then(result=>{})
        .then(error=>{})
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                   {
                    user?<NavLink><button onClick={handleLogOut}>LogOut</button></NavLink>: <NavLink to="/login" activeClassName="active">Login</NavLink>
                   }
                    {
                        user?<NavLink to="/myToys" activeClassName="active">My Toys</NavLink>:''
                    }
                    {
                        user? <NavLink to="/allToys" activeClassName="active" className="p-2">AllToys</NavLink>:''
                    }
                   
                    <NavLink to="/allToys" activeClassName="active">AllToys</NavLink>
                    <NavLink className="p-2">{
                        user?<p>{user.email}</p>:''
                    }</NavLink>
                    </ul>
                </div>
                <img className="h-12 w-12 rounded-full " src={logo} alt="" />
                <a className=" normal-case text-xl">The Toys Shop</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <NavLink to="/" activeClassName="active" className="p-2">Home</NavLink>
                {
                    user?<NavLink><button className="m-2" onClick={handleLogOut}>LogOut</button></NavLink>: <NavLink to="/login" activeClassName="active " className='m-2'>Login</NavLink>
                   }
                    <NavLink to="/myToys" activeClassName="active" className="p-2">My Toys</NavLink>
                    <NavLink to="/allToys" activeClassName="active" className="p-2">AllToys</NavLink>
                    <NavLink to="/addToy" activeClassName="active" className="p-2">AddToy</NavLink>
                    <NavLink className="p-2">{
                        user?<p>{user.email}</p>:''
                    }</NavLink>
                </ul>
                {
                    user?<div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </div>:""
                }
            </div>
            
            
        </div>
    );
};

export default Navber;