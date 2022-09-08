import "../index.css";
import accountList from '../components/picture/accountList.svg';
import calendar from '../components/picture/calendar.svg';
import photo from '../components/picture/photo.svg';
import React from "react";
import HomeHeader from "../components/HomeHeader";

function Home({ posts, setPosts, nextId }) {
  return (
    <div className="max-w-4xl mx-auto my-4 MarginBottom">
      <HomeHeader />
      <div className="max-w-4xl mx-auto my-4">

        <div className="PageHeight">
          <img src={accountList} alt="accountList" className='mx-auto mt-4' />
          <img src={photo} alt="photo" className='mx-auto mt-4' />

          <img src={calendar} alt="calendar" className='mx-auto mt-4' />
        </div>

      </div>
    </div>
  );
}
export default Home;
