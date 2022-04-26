import React, { useEffect, useState } from 'react'
import './sidebar.css'
import about from './images/about.png'
import { FiTwitter } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import {Link} from "react-router-dom"
import axios from "axios"

function Sidebar() {
     const [cats, setCats] = useState([]);

     useEffect(() => {
          const getCats = async () => {
               const res = await axios.get("/categories");
               setCats(res.data);
          };
          getCats();
     }, []);

     return (
          <div className='sidebar'>
               <div className='sidebarItem'>
                    <span className='sidebarTitle'>ABOUT ME</span>
                    <img className='about-img' src={about} alt='' />
                    <p>I'm a 24 year old Full Stack Developer from Chennai,India who loves to designs,develops,speak and writes about building high quality accessible websites </p>
               </div>
               {/* <div className='sidebarItem'>
                    <span className='sidebarTitle'>CATEGORIES</span>
                    <ul className='sidebarList'>
                         {cats.map((c) => (
                              <Link to={`/?cat=${c.name}`} className="link">
                                   <li className="sidebarListItem">{c.name}</li>
                              </Link>
                         ))}
                    </ul>
               </div> */}
               <div className='sidebarItem'>
                    <span className='sidebarTitle'>FOLLOW ME</span>
                    <div className='sidebarSocial'>
                            
                         <a href='https://www.linkedin.com/in/uday-shankhar-853955233/' target='_blank'>
                              <BsLinkedin style={{ marginRight: '12px', cursor: 'pointer' }} />
                            </a>
                         <a href='https://www.instagram.com/uday.shankhar/?hl=en' target='_blank'>
                              <SiInstagram style={{ color:' #8a3ab9', marginRight: '12px', cursor: 'pointer' }} />
                         </a>
                         <a href='https://github.com/UdayShankhar' target='_blank'>
                              <BsGithub style={{ cursor: 'pointer',color:'black' }} />
                         </a>
                         
                         
                    </div>
               </div>
          </div>
     )
}

export default Sidebar