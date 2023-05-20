import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [error,setError]=useState('')
    const {createUser,googleRegister}=useContext(AuthContext)

    
    const handleLogin=(event)=>{
        event.preventDefault();
        const form =event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        createUser(email,password)
        .then(result=>{
            const logged=result.user;
            console.log(logged);
        })
        .then(error=>setError(error.massage))
        toast('firebase error')
    }
    const handleGoogleRegister=()=>{
        googleRegister()
        .then(result=>{console.log(result.user);})
        .then(error=>{console.log(error.massage);})
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <ToastContainer></ToastContainer>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                           
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    
                    <p>new User?Please <Link to='/register'>Register</Link> </p>
                    <button className="btn btn-primary" onClick={handleGoogleRegister}>Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;