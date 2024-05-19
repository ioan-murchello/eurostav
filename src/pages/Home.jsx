import { Link } from 'react-router-dom';
import Slider from '../components/Slider';
import { BsHouseHeartFill } from 'react-icons/bs';
import Houses from '../components/Houses';
import Specialization from '../components/Specialization';
import FasadTypes from '../components/FasadTypes';
import Projects from '../components/Projects';

import { toTop } from '../helpers';

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='relative w-full h-screen sm:h-[400px] flex flex-col justify-center items-center mb-32'>
        <Slider
          viewheight='screen'
          height={400}
          perWiew='1'
          swipe={true}
          touchMode={false}
          spaceBetween={0}
          delayTime={3000} 
        />
        <div className='flex absolute justify-center  items-center flex-col gap-y-5 left-0 right-0 z-10'>
          <BsHouseHeartFill className='w-[50px] h-[50px] text-white' />
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-2xl sm:text-3xl text-center text-white'>
              Siroke Vize. Poctive Slusba. Velka Hodnota
            </h1>
            <p className='text-center text-white'>
              Nasim cilem je zajistit kvalitni projetkry v terminu
            </p>
          </div>
          <div>
            <Link className='btn' to='/kontacts' onClick={toTop}>
              Nezavazne Poptat
            </Link>
          </div>
        </div>
      </div>

      <div className='container mx-auto'>
        {/* rodinny doma */}
        <Houses />

        {/* nase specializace */}
        <Specialization />

        {/* typi fasadu */}
        <FasadTypes />

        {/* projekty */}
        <Projects />
      </div>
    </div>
  );
};
export default Home;
