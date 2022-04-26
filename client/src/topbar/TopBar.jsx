import React, { useContext } from 'react'
import './topbar.css'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
// import { FcSearch } from "react-icons/fc";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { Context } from '../context/Context';

function TopBar() {
  const {user,dispatch} = useContext(Context)

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className='top'>
      <div className='topLeft'>
        <a href='https://www.linkedin.com/in/uday-shankhar-853955233/' target='_blank'>
          <BsLinkedin style={{ marginRight: '2px', cursor: 'pointer' }} />
        </a>
        <a href='https://www.instagram.com/uday.shankhar/?hl=en' target='_blank'>
          <SiInstagram style={{ color: ' #8a3ab9', marginRight: '2px', cursor: 'pointer' }} />
        </a>
        <a href='https://github.com/UdayShankhar' target='_blank'>
          <BsGithub style={{ cursor: 'pointer', color: 'black' }} />
        </a>
        
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'><Link className='link' to='/'>HOME</Link></li>
          <li className='topListItem'><Link className='link' to='/'>ABOUT</Link></li>
          <li className='topListItem'><Link className='link' to='/contact'>CONTACT</Link></li>
          <li className='topListItem'><Link className='link' to='/write'>WRITE</Link></li>
          <li className='topListItem' onClick={handleLogout}>
          {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className='topRight'>
      {user?(
        <Link to="/settings">
          <img className='topImg' src={user.profilePic} alt='' />
          </Link>
      ):(
        <ul className='topRightList'>
        <li className='topRightItem'>
                <Link className='link' to='/login'>LOGIN</Link></li>
              <li className='topRightItem'>
                <Link className='link' to='/register'>REGISTER</Link>
        </li>
        
            </ul>
            )}
            {/* <span className='search-icon'>
          <FcSearch />
            </span> */}
        
      </div>
    </div>
  )
}

export default TopBar