import { GiBrickWall } from 'react-icons/gi';
import { MdOutlineHomeWork } from 'react-icons/md';
import { BsHousesFill } from 'react-icons/bs';
import { GiFamilyHouse } from 'react-icons/gi';
import { FaTape } from 'react-icons/fa6'; 
import { FaPhone } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const Specialization = () => {
 
  return (
    <section className='mb-32'>
      <header className='flex justify-center items-center flex-col gap-y-5 mb-32'>
        <h2 className='text-3xl sm:text-5xl text-orange-600'>
          Naše Specializace​
        </h2>
        <p className='text-2xl text-center'>
          Naše společnost zaměstnává výhradně odborníky vyučené v oboru.
        </p>
      </header>
      <div className='articles grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12 mx-4'>
        <article className='flex flex-col justify-start items-center'>
          <GiBrickWall className='w-20 md:w-28 h-20 md:h-28 text-red-600' />
          <div className='flex flex-col gap-y-5 mt-5'>
            <h3 className='text-3xl text-center text-orange-400'>Fasády</h3>
            <p className='text-2xl text-center'>
              Poskytujeme zákazníkům kompletní servis oprav, restaurování a
              dokončování fasád.
            </p>
          </div>
        </article>
        <article className='flex flex-col justify-start items-center '>
          <MdOutlineHomeWork className='w-20 md:w-28 h-20 md:h-28 text-gray-400' />
          <div className='flex flex-col gap-y-5 mt-5'>
            <h3 className='text-3xl text-center text-orange-400'>
              Stavební práce
            </h3>
            <p className='text-2xl text-center'>
              Využijte služeb naší stavební společnosti a nechte si postavit dům
              svých snů. Zabýváme se výstavbou rodinných domů, staveb a
              přístaveb.
            </p>
          </div>
        </article>
        <article className='flex flex-col justify-start items-center '>
          <BsHousesFill className='w-20 md:w-28 h-20 md:h-28 text-green-400' />
          <div className='flex flex-col justify-center items-center gap-y-5 mt-5'>
            <h3 className='text-3xl text-center text-orange-400'>Zateplení</h3>
            <p className='text-2xl text-center'>
              Vaše investice se Vám zakrátko vrátí v ušetřených nákladech za
              vytápění.
            </p>
          </div>
        </article>
        <article className='flex flex-col justify-start items-center '>
          <GiFamilyHouse className='w-20 md:w-28 h-20 md:h-28 text-orange-400' />
          <div className='flex flex-col justify-center items-center gap-y-5 mt-5 '>
            <h3 className='text-3xl text-center text-orange-400'>
              Výstavba rodinných domů
            </h3>
            <p className='text-lg md:text-2xl text-center'>
              S výstavbou rodinných domů máme dlouholeté zkušenosti. Rodinné
              domy stavíme s vědomím, že našim zákazníkům pomáháme budovat
              jejich domovy, do kterých vkládají své sny a naděje o spokojeném a
              šťastném životě.
            </p>
          </div>
        </article>
      </div>
      <div className='flex w-full flex-col gap-y-5 justify-center items-center p-5 my-12 bg-gradient-to-b from-[#d6d6d6] to-[#fafafa]'>
        <FaTape className='w-20 h-20 md:w-32 md:h-32' />
        <h2 className='text-2xl  sm:text-4xl text-center'>
          Získejte <mark>BEZPLATNOU</mark> konzultaci
        </h2>
        <Link
          className='flex items-center text-orange-400 text-xl sm:text-2xl'
          to='tel:+44454532234'
        >
          <FaPhone className='vibrate'/> +44 545 322 34
        </Link>
      </div>
    </section>
  );
};
export default Specialization;
