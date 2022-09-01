import accountList from './picture/accountList.svg';
import calendar from './picture/calendar.svg';
import photo from './picture/photo.svg';
import { Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const HomePage = () => {
  return (
    <div >
      <img src={accountList} alt="accountList" className='mx-auto mt-4' />
      <img src={photo} alt="photo" className='mx-auto mt-4' />
      <img src={calendar} alt="calendar" className='mx-auto mt-4' />
    </div>
  );
};

export default HomePage;
