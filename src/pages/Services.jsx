import Title from '../components/Title';
 
import { GrPlan } from 'react-icons/gr';
import { BsFillCalendarHeartFill } from 'react-icons/bs';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { PiClockCounterClockwiseBold } from 'react-icons/pi';
import ourServises from '../img/our-servises.jpg'

import { motion } from 'framer-motion';

const Services = () => {
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const text = {
    hidden: {y: 30, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
    }
  }

  return (
    <section>
      <Title title='Nase sluzby' bg={ourServises} />
      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 py-8 px-4 gap-5'>
        <div className='flex flex-col gap-y-5'>
          <h2 className='text-3xl text-orange-600'>Naše Služby</h2>
          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='text-2xl'
          >
            Využijte služeb naší stavební společnosti
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='text-xl sm:text-2xl'
          >
            Naše služby zahrnují veškeré, stavební, pokrývačské, zednické,
            malířské, obkladačské a další práce. Po ukončení naší činnosti, bude
            Váš dům připraven k jeho bezproblémovému užívání.
          </motion.p>
        </div>

        <motion.ul
          variants={container}
          initial='hidden'
          animate='visible'
          className='container grid grid-cols-1 lg:grid-cols-2 gap-y-5 border-l-[3px] border-l-slate-300 pl-8'
        >
          <motion.li
            className='text flex items-center gap-x-3 text-xl sm:text-2xl'
            variants={text}
          >
            <GrPlan className='w-8 h-8 md:w-12 md:h-12 text-green-400' />
            Pečlivé Plánování
          </motion.li>
          <motion.li
            className='text flex items-center gap-x-3 text-xl sm:text-2xl'
            variants={text}
          >
            <BsFillCalendarHeartFill className='w-8 h-8 md:w-12 md:h-12 text-green-400' />
            Dokonalé Provedení
          </motion.li>
          <motion.li
            className='text flex wrap  items-center gap-x-3 text-xl sm:text-2xl'
            variants={text}
          >
            <PiClockCounterClockwiseBold className='w-8 h-8 md:w-12 md:h-12 text-green-400' />{' '}
            Dokončení Včas
          </motion.li>
          <motion.li
            className='text flex items-center gap-x-3 text-xl sm:text-2xl'
            variants={text}
          >
            <FaMoneyBillTrendUp className='w-8 h-8 md:w-12 md:h-12 text-green-400' />{' '}
            Přijatelné Ceny
          </motion.li>
        </motion.ul>
      </div>

      <div className='container mx-auto px-4'>
        <h2 className='text-3xl text-orange-600 mb-5'>Naše Specializace​</h2>
        <p className='text-2xl'>
          Naše společnost zaměstnává výhradně odborníky vyučené v oboru.
        </p>
        <motion.ul
          className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 my-16'
          variants={container}
          initial='hidden'
          animate='visible'
        >
          <motion.li
            className='item flex gap-y-5 flex-col items-center justify-start border p-5'
            variants={item}
          >
            <img
              className='w-full h-[180px] object-cover shadow-lg rounded-lg'
              src='https://suez.b-cdn.net/media/f5/da/9d/1693397067/ravatherm%20styrodur%20xps.jpg'
              alt='fasad'
            />
            <h2 className='text-3xl text-orange-400 text-center'>Fasády</h2>
            <p className='text-2xl text-center'>
              Poskytujeme zákazníkům kompletní servis oprav, restaurování a
              dokončování fasád.
            </p>
          </motion.li>
          <motion.li
            className='item flex gap-y-5 flex-col items-center justify-start border p-5'
            variants={item}
          >
            <img
              className='w-full h-[180px] object-cover shadow-lg rounded-lg'
              src='https://images.ctfassets.net/fqtbha7ac6p4/5UNYobkaBW5EVdEWwA3ybt/0dbd06b85efad8080890deb370c6abab/workflow.jpg'
              alt=''
            />
            <h2 className='text-3xl text-orange-400 text-center'>
              Stavební práce
            </h2>
            <p className='text-2xl text-center'>
              Využijte služeb naší stavební společnosti a nechte si postavit dům
              svých snů. Zabýváme se výstavbou rodinných domů, staveb a
              přístaveb.
            </p>
          </motion.li>
          <motion.li
            className='item flex gap-y-5 flex-col items-center justify-start border p-5'
            variants={item}
          >
            <img
              className='w-full h-[180px] object-cover shadow-lg rounded-lg'
              src='https://stavebnafirma.info/wp-content/uploads/zateplen.jpg'
              alt=''
            />
            <h2 className='text-3xl text-orange-400 text-center'>Zateplení</h2>
            <p className='text-2xl text-center'>
              Vaše investice se Vám zakrátko vrátí v ušetřených nákladech za
              vytápění.
            </p>
          </motion.li>
          <motion.li
            className='item flex gap-y-5 flex-col items-center justify-start border p-5'
            variants={item}
          >
            <img
              className='w-full h-[180px] object-cover shadow-lg rounded-lg'
              src='https://www.idealdomy.cz/wp-content/uploads/2018/07/N%C3%ADzkoenergetick%C3%BD-rodinn%C3%BD-d%C5%AFm-na-kl%C3%AD%C4%8D-3-1920x1005.jpg'
              alt=''
            />
            <h2 className='text-3xl text-orange-400 text-center'>
              Výstavba rodinných domů
            </h2>
            <p className='text-2xl text-center'>
              S výstavbou rodinných domů máme dlouholeté zkušenosti. Rodinné
              domy stavíme s vědomím, že našim zákazníkům pomáháme budovat
              jejich domovy, do kterých vkládají své sny a naděje o spokojeném a
              šťastném životě.
            </p>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
};
export default Services;
