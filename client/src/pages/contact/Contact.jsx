import React from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import msg from './msg.png'

function Contact() {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_hpozx7t",
         "template_mknsikb", 
         e.target, 
         "EiwWzQBVAkMPWXFJt")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
            alert("Message Sent Successfully")
            e.target.reset()
    }

  return (
    <div className='container'>
          <img src={msg} className='loginimg' alt='login' id='register-img' />
          <div className='mainDiv'>
              <span className='loginTitle'>Contact Me</span>
              <hr className='hr-line'/>
              <form className='loginForm' onSubmit={sendEmail}>
                  <label><strong>NAME</strong></label>
                  <input type='text' className='loginInput' name='name' placeholder='Enter your name...' required />
                  <span className='email'>
                      <label><strong>EMAIL</strong></label>
                      <input type='text' className='loginInput' name='user_email' placeholder='Enter your email...' required /></span>
                  <span className='passwordclass'>
                      <label><strong>SUBJECT</strong></label>
                      <input type='text' className='loginInput' name='subject' placeholder='Enter your Subject' required /></span>
                  <span className='message'>
                      <label><strong>MESSAGE</strong></label>
                      <textarea className='loginInput' name='message' placeholder='Your Message' required/>
                      </span>
                  <span className='buttons'>
                      <input type='submit' className='btn btn-danger' value='Send' id='register-btn'></input>
                      {/* <button className='btn btn-primary' id='login-btn'>Login</button> */}
                  </span>
              </form>

          </div>
    </div>
  )
}

export default Contact