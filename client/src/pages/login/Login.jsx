import React, { useContext, useRef } from 'react'
import './login.css'
import logIn from './loginimg.svg'
import { Link } from 'react-router-dom'
import axios from "axios"
import { Context } from "../../context/Context.js"


function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };

 
    return (
        <div className='login'>
            <img src={logIn} className='loginimg' alt='login' />
            <div className='mainDiv'>
                <span className='loginTitle' style={{color:'black'}}>Login</span>
                <form className='loginForm' onSubmit={handleSubmit}>
                    <label>UserName</label>
                    <input
                        type='text'
                        className='loginInput'
                        placeholder='Enter your email...'
                        ref={userRef}
                    />
                    <span className='passwordclass'>
                        <label>PASSWORD</label>
                        <input
                            type='password'
                            className='loginInput'
                            placeholder='Enter your password'
                            ref={passwordRef}
                        /></span>
                    <div className='buttons'>
                        <button className='loginButton' type="submit" disabled={isFetching} style={{marginTop:'20px',backgroundColor:'black',color:'white',borderRadius:'8px',width:'90px',height:'40px'}} >Login</button>
                        <Link to='/register'>
                            <button className='btn btn-primary' id='r-btn' style={{ marginTop: '22px', backgroundColor: 'black', color: 'white', borderRadius: '8px', width: '90px', height: '40px' }}>Register</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login