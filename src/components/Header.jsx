import React from "react";
import ubi from './picture/ubi.png';

const Header = () => {
    return (
        <>
        <div
        style={{
      backgroundColor: "#CCF2F4",
      height: 60

    }} >
           <img src={ubi} alt="ubi" className='mx-auto pt-2 h-14 w-12'/>
        </div>
        </>
    );
  }
export default Header;

