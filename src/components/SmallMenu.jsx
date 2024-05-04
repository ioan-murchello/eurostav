import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

 
const SmallMenu = ({ setOpen, isOpen }) => {
 
  const location = useLocation();
  const active = location.pathname;

  const handleOpen = () => {
    setOpen();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
     const li = document.querySelectorAll('ul li');

     li.forEach((item, index) => {
       item.style.animationDelay = `${(index + 1) * 0.1}s`;
     });
  },[])

  return (
    <nav
      className={`flex w-full h-full flex-col fixed top-0 left-0 ${
        isOpen ? 'translate-x-0' : 'translate-x-[-100%]'
      } will-change-transform ease-in-out duration-500 z-40 gap-y-12 p-5 bg-white/95 justify-center lg:hidden `}
    >
      <ul className='flex flex-col h-full gap-x-5 gap-y-5 pt-8'>
        <li className={`${isOpen ? 'animateLi' : ''}`}>
          <Link
            onClick={() => handleOpen()}
            className={`text-2xl ${active === '/' ? 'text-orange-400' : ''}`}
            to='/'
          >
            Domu
          </Link>
        </li>
        <li className={`${isOpen ? 'animateLi' : ''}`}>
          <Link
            onClick={() => handleOpen()}
            className={`text-2xl ${
              active === '/about' ? 'text-orange-400' : ''
            }`}
            to='/about'
          >
            O Nás
          </Link>
        </li>
        <li className={`${isOpen ? 'animateLi' : ''}`}>
          <Link
            onClick={() => handleOpen()}
            className={`text-2xl ${
              active === '/services' ? 'text-orange-400' : ''
            }`}
            to='/services'
          >
            Naše Služby
          </Link>
        </li>
        <li className={`${isOpen ? 'animateLi' : ''}`}>
          <Link
            onClick={() => handleOpen()}
            className={`text-2xl ${
              active === '/reference' ? 'text-orange-400' : ''
            }`}
            to='/reference'
          >
            Reference
          </Link>
        </li>
        <li className={`${isOpen ? 'animateLi' : ''}`}>
          <Link
            onClick={() => handleOpen()}
            className={`text-2xl ${
              active === '/kontacts' ? 'text-orange-400' : ''
            }`}
            to='/kontacts'
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default SmallMenu;
