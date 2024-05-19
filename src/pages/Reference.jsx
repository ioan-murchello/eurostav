import Title from '../components/Title';
import plans from '../img/plans.jpg';
import Slider from '../components/Slider';

import { Link } from 'react-router-dom';
import { toTop } from '../helpers';

const Reference = () => {

  
  return (
    <section>
      <Title title='Projekty' bg={plans} />
      <div className='contanier mx-auto mt-32 mb-32 px-4'>
        <h1 className='text-3xl text-orange-600'>Naše Nedávné Projekty</h1>
        <p className='text-xl sm:text-2xl'>
          Zde jsou umístěny některé vybrané realizované projekty
        </p>
        <div className='grid my-24 place-items-center justify-items-center grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
          <div className='flex items-center justify-center w-full h-80 relative'>
            <img
              className='grow w-full h-full object-cover'
              src='https://www.eurokvalit.eu/wp-content/uploads/2020/03/20190606_123940-768x1024.jpg'
              alt=''
            />
          </div>
          <div className='flex w-full h-80 relative'>
            <img
              className='grow w-full h-full object-cover'
              src='https://www.eurokvalit.eu/wp-content/uploads/2019/12/img1.jpg'
              alt=''
            />
          </div>
          <div className='flex w-full h-80 relative'>
            <img
              className='grow w-full h-full object-cover'
              src='https://www.eurokvalit.eu/wp-content/uploads/2020/03/20190614_125059-768x1024.jpg'
              alt=''
            />
          </div>
          <div className='flex w-full h-80 relative'>
            <img
              className='w-full h-full object-cover'
              src='https://www.eurokvalit.eu/wp-content/uploads/2020/03/20190620_145730-768x1024.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
      <Title
        title='Ručíme Za Kvalitně Odvedenou Práci'
        bg='https://images.pexels.com/photos/1101125/pexels-photo-1101125.jpeg?cs=srgb&dl=pexels-mdsnmdsnmdsn-1101125.jpg&fm=jpg'
      >
        <p className='text-2xl text-white hidden sm:block'>
          Zavolejte Nám, Nebo Vyplňte Formulář A My Vám V Nejbližší Době
          Odpovíme.
        </p>
        <Link className='btn my-2 uppercase' to='/kontacts' onClick={toTop}>
          kontaktujte nas
        </Link>
      </Title>
      <div className='grid w-full gap-5 my-20 items-center max-w-[80%] mx-auto grid-cols-1 md:grid-cols-3'>
        <div className='text-orange-500 text-xl sm:text-3xl text-center'>
          Zateplení a obkladačské práci.
        </div>

        <div className='h-[200px] col-span-2'>
          <Slider
            height='200px'
            perWiew={2}
            swipe={false}
            touchMode={true}
            spaceBetween='10'
            forNavigation={true}
            delayTime={2500}
          />
        </div>
      </div>
      <div className='grid w-full gap-5 my-20 items-center max-w-[80%] mx-auto grid-cols-1 md:grid-cols-3'>
        <div className='text-orange-500 text-xl sm:text-3xl text-center'>
          Rodinné domy
        </div>

        <div className='h-[200px] col-span-2'>
          <Slider
            height='200px'
            perWiew='3'
            swipe={false}
            touchMode={true}
            spaceBetween='10'
            forNavigation={true}
            delayTime={3200}
          />
        </div>
      </div>
    </section>
  );
};
export default Reference;
