import { Link, useLocation } from 'react-router-dom';
import { useAnimate, stagger } from 'framer-motion';
import { useEffect } from 'react';

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            'nav',
            { transform: 'translateX(0%)' },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.7 },
          ],
          [
            'li',
            { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
            { delay: stagger(0.07), at: '-0.3' },
          ],
        ]
      : [
          [
            'li',
            { transform: 'scale(0.8)', opacity: 0, filter: 'blur(5px)' },
            { delay: stagger(0.07, { from: 'last' }), at: '>' },
          ],
          ['nav', { transform: 'translateX(-100%)' }, { at: '-0.1' }],
        ];

    animate([
      [
        'path.top',
        { d: isOpen ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5' },
        { at: '<' },
      ],
      ['path.middle', { opacity: isOpen ? 0 : 1 }, { at: '<' }],
      [
        'path.bottom',
        { d: isOpen ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346' },
        { at: '<' },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen]);

  return scope;
}

const SmallMenu = ({ setOpen, isOpen }) => {
  const scope = useMenuAnimation(isOpen);

  const location = useLocation();
  const active = location.pathname;

  const handleOpen = () => {
    setOpen();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div ref={scope}>
      <nav
        className={`flex w-full h-full flex-col fixed top-0 left-0 translate-x-[-100%]  ease-in-out duration-500 z-40 gap-y-12 p-5 bg-white/95 justify-center lg:hidden `}
      >
        <ul className='flex flex-col h-full gap-x-5 gap-y-5 pt-8'>
          <li>
            <Link
              onClick={() => handleOpen()}
              className={`text-2xl ${active === '/' ? 'text-orange-400' : ''}`}
              to='/'
            >
              Domu
            </Link>
          </li>
          <li>
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
          <li>
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
          <li>
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
          <li>
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
    </div>
  );
};
export default SmallMenu;
