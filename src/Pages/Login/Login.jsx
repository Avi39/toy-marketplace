/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import pic from '../../assets/login.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebse/firebase.config';
import { FaBeer,FaGoogle } from 'react-icons/fa';

const Login = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log('login page location',location);
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from,{replace: true});
        })
        .catch(error =>{ console.log(error);
        })
    }
        const handleGoogleSignIn = () =>{
            signInWithPopup(auth,provider)
            .then(result =>{
                const user = result.user;
                console.log(user);
                 navigate(from,{replace: true});
            })
            .catch(error =>{
                console.log(error);
            })
        }
    
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2 ml-20">
                    <img className='w-3/4' src={pic} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login Please</h1>
                        <form onSubmit={handleLogin}>
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
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <br />
                        <button className='border' onClick={handleGoogleSignIn}><FaGoogle className=''></FaGoogle> Login with google</button>
                        <p>New to AnimalToys StoCK? <Link className='font-bold underline text-red-500 ml-1'to="/signup">SignUp Please</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;