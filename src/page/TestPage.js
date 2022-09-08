import RouteTest from '../components/RouteTest';
import "../index.css";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Home from './Home';

const TestPage = () => {


  return (
    <div className='HeaderSetting'>
     {/* <Home posts={posts} setPosts={setPosts} nextId={nextId}/>*/}
      <RouteTest />
    </div>
  );
};

export default TestPage;