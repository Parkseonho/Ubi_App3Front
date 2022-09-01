import home from './picture/home.png';
import person from './picture/person.png';
import threeLine from './picture/threeLine.png';

const Footer = () => {
  return (
    <div className='flex justify-around items-center' >

      <img src={threeLine} alt="threeLine" className='inline h-8 w-10 ' />
      <img src={home} alt="home" className='inline h-10 w-10' />
      <img src={person} alt="person" className='inline h-10 w-10' />

    </div>
  );
};

export default Footer;
