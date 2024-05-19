import { Link } from 'react-router-dom';
import Title from '../components/Title';
import { FaMapSigns } from 'react-icons/fa';
import { RiMailAddLine } from 'react-icons/ri';
import { PiClockCountdownFill } from 'react-icons/pi';
import { MdOutlineContactPhone } from 'react-icons/md';

import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

import CustomForm from '../components/Form';
import contakt from '../img/contact.jpg'

const ExternalLink = ({to, children, ...rest}) => {
  return <a href={to} target='_blank' rel='noopener noreferrer' {...rest}>
    {children}
  </a>
}

const Kontacts = () => {
  return (
    <section className=' '>
      <Title title='Kontakt' bg={contakt} />

      <div className='container mx-auto '>
        <div className='grid mx-auto max-w-[80%]  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-7 py-4 mt-24 mb-24'>
          <div className='flex flex-col justify-start items-center ease-in duration-200 gap-y-5 p-5 rounded-lg shadow-lg hover:shadow-2xl'>
            <MdOutlineContactPhone className='w-14 h-14 text-red-400' />
            <h3 className='text-2xl  text-center'>Zavolejte nám</h3>
            <Link to='tel:+333 444 555 22' className='text-xl  text-center'>
              +333 444 555 22
            </Link>
          </div>

          <div className='flex flex-col justify-start items-center ease-in duration-200  gap-y-5 p-5 rounded-lg shadow-lg hover:shadow-2xl'>
            <FaMapSigns className='w-14 h-14 text-blue-400' />
            <h3 className='text-2xl  text-center'>Adresa</h3>
            <p className='text-xl  text-center'>
              Litevská 1174/8 <br /> Praha 10, 100 00
            </p>
          </div>
          <div className='flex flex-col justify-start items-center ease-in duration-200  gap-y-5 p-5 rounded-lg shadow-lg hover:shadow-2xl'>
            <RiMailAddLine className='w-14 h-14 text-green-400' />
            <h3 className='text-2xl  text-center'>Napište nám</h3>
            <Link
              to='email:evrostav@gmail.com'
              className='text-xl  text-center'
            >
              evrostav@gmail.com
            </Link>
          </div>
          <div className='flex flex-col justify-start items-center ease-in duration-200  gap-y-5 p-5 rounded-l shadow-lg hover:shadow-2xl'>
            <PiClockCountdownFill className='w-14 h-14 text-orange-300' />
            <h3 className='text-2xl text-center'>Provozní doba</h3>
            <p className='text-xl text-center'>Po-Pá: 8:00-15:00</p>
          </div>
        </div>
      </div>
      <div className='container mx-auto my-8'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14072.568142859975!2d14.402421356734834!3d50.0751027511568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9502f27d40dd%3A0x8ec566fb0f7765c0!2z0KHQsNC0INCa0LjQvdGB0LrQuNGF!5e0!3m2!1sru!2scz!4v1716116543150!5m2!1sru!2scz'
          style={{
            width: '100%',
            height: '400px',
            loading: 'lazy',
            referrerpolicy: 'no-referrer-when-downgrade',
          }}
        ></iframe>
      </div>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-5'>
        <ul className='flex flex-col items-center gap-y-2  p-4'>
          <h3 className='text-2xl'>Architekt:</h3>
          <li>
            <h2 className='text-2xl'>Khara Kiri</h2>
          </li>
          <li>
            <Link className='text-xl text-gray-400' to='tel:+333 434 777 32'>
              +333 434 777 32
            </Link>
          </li>
          <li>
            <Link
              to='email:kharakiri@gmail.com'
              className='text-xl text-orange-600'
            >
              kharakiri@gmail.com
            </Link>
          </li>
        </ul>
        <ul className='flex flex-col items-center gap-y-2  p-4'>
          <h3 className='text-2xl'>Technické oddelení:</h3>
          <li>
            <h2 className='text-xl'>Milan Milosovic</h2>
          </li>
          <li>
            <Link className='text-xl text-gray-400' to='tel:+333 434 545 32'>
              +333 434 545 32
            </Link>
          </li>
          <li>
            <Link
              to='email:milanmilosovic@gmail.com'
              className='text-xl text-orange-600'
            >
              milanmilosovic@gmail.com
            </Link>
          </li>
        </ul>
      </div>
      <CustomForm />
      <footer className='flex justify-center items-center p-8 gap-x-5 gap-y-5'>
        <ExternalLink to='https://www.facebook.com'>
          <FaFacebook className='w-14 h-14 sm:w-16 sm:h-16 text-blue-500 hover:text-blue-600' />
        </ExternalLink>
        <ExternalLink to='https://www.instagram.com'>
          <FaInstagram className='w-14 h-14 sm:w-16 sm:h-16 text-orange-400 hover:text-orange-500' />
        </ExternalLink>
        <ExternalLink to='https://www.linkedin.com'>
          <FaLinkedin className='w-14 h-14 sm:w-16 sm:h-16 text-blue-300 hover:text-blue-400' />
        </ExternalLink>
      </footer>
    </section>
  );
};
export default Kontacts;
