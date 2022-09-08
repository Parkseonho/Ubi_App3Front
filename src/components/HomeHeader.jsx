import React from "react";
import ubi from './picture/ubi.png';

const HomeHeader = () => {
    return (
        <>
        <div>
           <img src={ubi} alt="ubi" className='absolute mx-auto inset-x-0 top-0 h-14 w-12'/>
        </div>
        </>
    );
  }
export default HomeHeader;

