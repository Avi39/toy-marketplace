/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import pic from '../../assets/signup.jpg'
import { AuthContext } from '../../Providers/AuthProviders';
import useTitle from '../../hooks/useTitle';


const SignUp = () => {
    useTitle('SignUp');
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);

        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            navigate('/login');
        })
        .catch(error => console.log(error))

    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2 ml-20">
                    <img className='w-3/4' src={pic} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">SignUp Please</h1>
                        <form onSubmit={handleSignUp}>
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="SignUp" />
                            </div>
                        </form>
                        <br />
                        <p>Already have an account? <Link className='font-bold underline text-red-500 ml-1'to="/login">Login Please</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;