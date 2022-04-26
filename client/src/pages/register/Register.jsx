import React, { useState } from 'react'
import './register.css'
import register from './register.svg'
import { Link } from "react-router-dom"
import axios from "axios"


function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true);
        }
    };


    return (
        <div className='register'>
            <img src={register} className='loginimg' alt='login' id='register-img' />
            <div className='mainDiv'>
                <span className='loginTitle' style={{color:'black'}}>Register</span>
                <form className='loginForm' onSubmit={handleSubmit}>
                    <label>USERNAME</label>
                    <input
                        type='text'
                        className='loginInput'
                        placeholder='Enter your username...'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <span className='email'>
                        <label>EMAIL</label>
                        <input
                            type='text'
                            className='loginInput'
                            placeholder='Enter your email...'
                            onChange={(e) => setEmail(e.target.value)}
                        /></span>
                    <span className='passwordclass'/>
                        <label>PASSWORD</label>
                        <input
                            type='password'
                            className='loginInput'
                            placeholder='Enter your password'
                            onChange={(e) => setPassword(e.target.value)}
                            
                    /><button className="registerButton" type="submit" style={{ marginTop: '22px', backgroundColor: 'black', color: 'white', borderRadius: '8px', width: '90px', height: '40px' }}>
                            Register
                        </button>
                </form>
                
                    
                
                {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>}
            </div>
            </div>
            );
}

export default Register