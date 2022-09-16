import React from "react";
import ubi from './picture/ubi.png';

const HomeHeader = () => {
    return (
        <>
        <div>
           <img src={ubi} alt="ubi" className='absolute inset-x-0 mx-auto  top-0 h-14 w-12'/>
        </div>
        </>
    );
  }
export default HomeHeader;

