import React from "react";
import ubi from './picture/ubi.png';

const Header = () => {
    return (
        <>
        <div>
           <img src={ubi} alt="ubi" className='mx-auto pt-2 h-14 w-12'/>
        </div>
        </>
    );
  }
export default Header;

