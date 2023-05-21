import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const { googleRegister, createUser } = useContext(AuthContext)
    // const handleRegister=(event)=>{
    //     event.preventDefault();
    //     const form =event.target;
    //     const name=form.name.value;
    //     const email=form.email.value;
    //     const password=form.password.value;
    //     console.log(name,email,password);
    //     googleRegister()
    //     .then(result=>{
    //         console.log(result.user)
    //     })
    //     .then(error=>{
    //         console.log(error.message);
    //     })
    // }
    const handleCreateUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL=form.photoURL.value;
        const password = form.password.value;
        console.log(name, email, photoURL,password);
        createUser()
        .then(result=>{console.log(result.user);})
        .then(error=>{console.log(r=error);})
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleCreateUser} className="card-body">
                           
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        {/* <button onClick={handleRegister}></button> */}
                        <p>Already Register?Please login <Link to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;