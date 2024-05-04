import { Link } from 'react-router-dom';
import { MdConstruction } from 'react-icons/md';
import { CgCloseR } from 'react-icons/cg'; 

import { useAnimate, stagger, useAnimation } from 'framer-motion';

import BigMenu from './BigMenu';
import SmallMenu from './SmallMenu';
import { useEffect, useState } from 'react';

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            'nav',
            { transform: 'translateX(0%)' },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            'li',
            { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
            { delay: stagger(0.05), at: '-0.1' },
          ],
        ]
      : [
          [
            'li',
            { transform: 'scale(0.5)', opacity: 0, filter: 'blur(10px)' },
            { delay: stagger(0.05, { from: 'last' }), at: '<' },
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
    ]);
  }, [isOpen]);

  return scope;
}
 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const scope = useMenuAnimation(isOpen);

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  window.addEventListener('resize', () => setIsOpen(false))
  

  useEffect(() => { 
    setIsOpen(false);
  }, []);
  return (
    <header ref={scope} className='flex w-full justify-between items-center py-5 px-4'>
      <div className='flex items-center gap-x-4'>
        <MdConstruction className='w-12 h-12 sm:w-20 sm:h-20' />
        <Link className='text-2xl sm:text-4xl' to='/'>
          EuroStav
        </Link>
      </div>
      <SmallMenu setOpen={setIsOpen} isOpen={isOpen} />
      <BigMenu />
      
        <div className={`flex lg:hidden ease-in-out duration-500 opacity-100  fixed right-5 justify-center z-[100] items-center rounded-lg bg-white w-12 h-12`}>
          <CgCloseR
            className='w-10 h-10  text-orange-400'
            onClick={() => setIsOpen(alt => !alt)}
          />
        </div>
      
    </header>
  );
};
export default Header;
