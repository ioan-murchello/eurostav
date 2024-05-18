import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const fadeInScale = (element, delay = 0, duration = 500) => {
  let startTime = null;

  const animate = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime - delay;

    if (elapsed >= 0) {
      const progress = Math.min(elapsed / duration, 1);

      const scale = 0.5 + progress * 0.5;
      const opacity = progress;
      const blur = 5 - progress * 5;

      element.style.transform = `scale(${scale})`;
      element.style.opacity = opacity;
      element.style.filter = `blur(${blur}px)`;
      element.style.visibility = 'visible';

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    } else {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

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
    const ul = document.querySelector('.ul-list');
    const li = ul.querySelectorAll('li');
    if (isOpen) {

      li.forEach((item, index) => {
        fadeInScale(item, index * 100); 
      });
    } else {
      li.forEach((item) => { 
        item.style.transform = 'scale(0.5)';
        item.style.opacity = '0';
        item.style.filter = 'blur(5px)';
        item.style.visibility = 'hidden';
      });
    }
  }, [isOpen]);

  return (
    <nav
      className={`flex w-full h-full flex-col fixed top-0 left-0 ${
        isOpen ? 'translate-x-0' : 'translate-x-[-100%]'
      } will-change-transform ease-in-out duration-500 z-40 gap-y-12 p-5 bg-white/95 justify-center lg:hidden `}
    >
      <ul className='flex flex-col h-full gap-x-5 gap-y-5 pt-8 ul-list'>
        <li className='opacity-[0] scale-50 invisible'>
          <Link
            onClick={() => handleOpen()}
            className={`text-2xl ${active === '/' ? 'text-orange-400' : ''}`}
            to='/'
          >
            Domu
          </Link>
        </li>
        <li className='opacity-[0] scale-50 invisible'>
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
        <li className='opacity-[0] scale-50 invisible'>
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
        <li className='opacity-[0] scale-50 invisible'>
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
        <li className='opacity-[0] scale-50 invisible'>
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
