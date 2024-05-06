import { Link } from 'react-router-dom';
import Title from '../components/Title';
import { FaMapSigns } from 'react-icons/fa';
import { RiMailAddLine } from 'react-icons/ri';
import { PiClockCountdownFill } from 'react-icons/pi';
import { MdOutlineContactPhone } from 'react-icons/md';
import Form from '../components/Form';

const Kontacts = () => {
  return (
    <section className=' '>
      <Title
        title='Kontakt'
        bg='https://www.ccifrance-allemagne.fr/wp-content/uploads/2021/02/kontaktieren_Sie_uns-scaled.jpg'
      />

      <div className='container mx-auto '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-7 py-4 mt-24 mb-24'>
          <div className='flex flex-col justify-start items-center ease-in duration-200 gap-y-5 p-5 rounded-lg  bg-gradient-to-b from-white to-orange-100 shadow-lg hover:shadow-2xl'>
            <MdOutlineContactPhone className='w-14 h-14 text-red-400' />
            <h3 className='text-3xl  text-center'>Zavolejte nám</h3>
            <Link to='tel:+333 444 555 22' className='text-2xl  text-center'>
              +333 444 555 22
            </Link>
          </div>
          <div className='flex flex-col justify-start items-center ease-in duration-200  gap-y-5 p-5 rounded-lg  bg-gradient-to-b from-white to-orange-100 shadow-lg hover:shadow-2xl'>
            <FaMapSigns className='w-14 h-14 text-blue-400' />
            <h3 className='text-3xl  text-center'>Adresa</h3>
            <p className='text-2xl  text-center'>
              Litevská 1174/8 <br /> Praha 10, 100 00
            </p>
          </div>
          <div className='flex flex-col justify-start items-center ease-in duration-200  gap-y-5 p-5 rounded-lg  bg-gradient-to-b from-white to-orange-100 shadow-lg hover:shadow-2xl'>
            <RiMailAddLine className='w-14 h-14 text-green-400' />
            <h3 className='text-3xl  text-center'>Napište nám</h3>
            <Link
              to='email:evrostav@gmail.com'
              className='text-2xl  text-center'
            >
              evrostav@gmail.com
            </Link>
          </div>
          <div className='flex flex-col justify-start items-center ease-in duration-200  gap-y-5 p-5 rounded-lg  bg-gradient-to-b from-white to-orange-100 shadow-lg hover:shadow-2xl'>
            <PiClockCountdownFill className='w-14 h-14 text-orange-300' />
            <h3 className='text-3xl text-center'>Provozní doba</h3>
            <Link to='tel:+333 444 555 22' className='text-2xl text-center'>
              Po-Pá: 8:00-15:00
            </Link>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 grid-rows-2 gap-y-5'>
        <ul className='flex flex-col gap-y-2 bg-gradient-to-r from-slate-300 to-white p-4'>
          <h3 className='text-3xl'>Architekt:</h3>
          <li>
            <h2 className='text-2xl'>Khara Kiri</h2>
          </li>
          <li>
            <Link className='text-2xl' to='tel:+333 434 777 32'>
              +333 434 777 32
            </Link>
          </li>
          <li>
            <Link to='email:kharakiri@gmail.com' className='text-2xl'>
              kharakiri@gmail.com
            </Link>
          </li>
        </ul>
        <ul className='flex flex-col gap-y-2 bg-gradient-to-r from-slate-200 to-white p-4'>
          <h3 className='text-3xl'>Technické oddelení:</h3>
          <li>
            <h2 className='text-2xl'>Milan Milosovic</h2>
          </li>
          <li>
            <Link className='text-2xl' to='tel:+333 434 545 32'>
              +333 434 545 32
            </Link>
          </li>
          <li>
            <Link to='email:milanmilosovic@gmail.com' className='text-2xl'>
              milanmilosovic@gmail.com
            </Link>
          </li>
        </ul>
      </div>
      <Form />
    </section>
  );
};
export default Kontacts;
