import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "../page/Home";
import PictureList from "../page/Picture/PictureList";
import PictureUpload from "../page/Picture/PictureUpload";
import PictureMain from "../page/Picture/PictureMain";


const RouteTest = ({posts, setPosts, nextId}) => {
  return (
    <BrowserRouter>
      <nav className=' m-auto flex justify-around'>  
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/PictureList'>
        PList    
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/'>
        Main
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/PictureUpload'>
        PUpload
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/PictureMain'>
        PMain
        </NavLink>
      </nav>

      <Routes>
        <Route exact path='/' element={<Home />}  />
        <Route path='/PictureList' element={<PictureList />} posts={posts} setPosts={setPosts}  />
        <Route path='/PictureUpload' element={<PictureUpload/> }posts={posts} setPosts={setPosts} nextId = {nextId} />
        <Route path='/PictureMain' element={<PictureMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteTest;