import RouteTest from '../components/RouteTest';
import "../index.css";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Home from './Home';

const TestPage = () => {
  const [posts, setPosts] = useState([]);

useEffect(() => {
  /**API 호출 코드*/
  const getData = async () => {
    const posts = await axios({
      url: "http://localhost:8083/multi-file",
      method: "GET",
    });
    setPosts(posts.data);
  };

  getData();
}, []);
const nextId = useRef(4);

  return (
    <div className="max-w-4xl mx-auto">
     {/* <Home posts={posts} setPosts={setPosts} nextId={nextId}/>*/}
      <RouteTest posts={posts} setPosts={setPosts} nextId={nextId}/>
    </div>
  );
};

export default TestPage;