import { Link } from 'react-router-dom';
import { MdConstruction } from 'react-icons/md'; 
import { BiMenuAltRight } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';

 

import BigMenu from './BigMenu';
import SmallMenu from './SmallMenu';
import { useEffect, useState } from 'react';
 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
 

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  window.addEventListener('resize', () => setIsOpen(false));

  useEffect(() => {
    setIsOpen(false);
  }, []);
  return (
    <header 
      className=' container mx-auto flex justify-between items-center py-5 px-4'
    >
      <div className='flex items-center gap-x-4'>
        <MdConstruction className='w-12 h-12 sm:w-20 sm:h-20' />
        <Link className='text-2xl sm:text-4xl' to='/'>
          EuroStav
        </Link>
      </div>
      <SmallMenu setOpen={setIsOpen} isOpen={isOpen} />
      <BigMenu />

      <div
        className={`flex lg:hidden ease-in-out duration-500 opacity-100  fixed right-5 justify-center z-[100] items-center rounded-lg bg-white w-12 h-12`}
      >
        {isOpen ? (
          <IoMdClose
            className={'w-10 h-10  text-orange-400'}
            onClick={() => setIsOpen((alt) => !alt)}
          />
        ) : (
          <BiMenuAltRight
            className={'w-10 h-10  text-orange-400'}
            onClick={() => setIsOpen((alt) => !alt)}
          />
        )}
      </div>
    </header>
  );
};
export default Header;
