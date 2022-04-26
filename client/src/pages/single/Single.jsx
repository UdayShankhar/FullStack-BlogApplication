import React from 'react'
import './single.css'
import Sidebar from '../../pages/home/sidebar/Sidebar'
import Singlepost from '../../singlePost/Singlepost'


function Single() {
return(
    <div className='single'>
    <Singlepost/>
    <Sidebar/>
    </div>
  )
}


export default Single