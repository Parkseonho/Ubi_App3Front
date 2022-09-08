import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "../page/Home";
import PictureList from "../page/Picture/PictureList";
import PictureUpload from "../page/Picture/PictureUpload";
import PictureMain from "../page/Picture/PictureMain";
import AccountMain from "../page/Account/AccountMain";
import "../index.css"
import home from './picture/home.png';
import person from './picture/person.png';
import threeLine from './picture/threeLine.png';


const RouteTest = ({ posts, setPosts, nextId }) => {
  return (
    <BrowserRouter>
      <nav className='RouteXY flex justify-around items-center'>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/PictureList'>
          <img src={threeLine} alt="threeLine" className='inline h-8 w-10 ' />
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/'>
          <img src={home} alt="home" className='inline h-10 w-10' />
        </NavLink>
       {/*  <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/PictureUpload'>
        
        </NavLink>
      <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/PictureMain'>
          PMain
        </NavLink>*/} 
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/AccountMain'>
        <img src={person} alt="person" className='inline h-10 w-10' />
        </NavLink>
      </nav>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/PictureList' element={<PictureList />} posts={posts} setPosts={setPosts} />
        <Route path='/PictureUpload' element={<PictureUpload />} posts={posts} setPosts={setPosts} nextId={nextId} />
        <Route path='/PictureMain' element={<PictureMain />} />
        <Route path='/AccountMain' element={<AccountMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteTest;