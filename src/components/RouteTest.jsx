import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "../page/Home";
import PictureList from "../page/Picture/PictureList";
import PictureUpload from "../page/Picture/PictureUpload";
import home from './picture/home.png';
import person from './picture/person.png';
import threeLine from './picture/threeLine.png';


const RouteTest = () => {
  return (
    <BrowserRouter>
      <nav className='flex justify-around items-center'>  
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/PictureList'>
        <img src={threeLine} alt="threeLine" className='inline h-8 w-10 ' />
      
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/'>
        <img src={home} alt="home" className='inline h-10 w-10' />
   
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/PictureUpload'>
        <img src={person} alt="person" className='inline h-10 w-10' />
        </NavLink>
      </nav>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/PictureList' element={<PictureList />} />
        <Route path='/PictureUpload' element={<PictureUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteTest;