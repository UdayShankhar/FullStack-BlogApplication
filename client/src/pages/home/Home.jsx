import React, { useEffect, useState } from 'react'
import Header from '../../header/Header'
import './Home.css'
import Sidebar from './sidebar/Sidebar'
import Posts from './posts/Posts'
import axios from 'axios'
import { useLocation } from "react-router";

function Home() {
  const [posts,setPosts] = useState([])
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);


  return (
    <>
      <Header />
      <div className='home'>
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  )
}

export default Home