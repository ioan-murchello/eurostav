import { TiArrowSync } from 'react-icons/ti';
import { GiArrowScope } from 'react-icons/gi';
import { TbArrowsSplit2 } from 'react-icons/tb';
import { FaArrowsToDot } from 'react-icons/fa6';
import Title from '../components/Title';

const About = () => {
  return (
    <section className='mb-32'>
      <Title
        title='O nas'
        bg='https://wallsneedlove.com/cdn/shop/products/w0267_1s_Realistic-Bricks-Removable-Peel-and-Stick-Wallpaper_For-Home-Offices-1.jpg?v=1604088879'
      />
      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 py-8 px-4 gap-5'>
        <div className='flex flex-col gap-y-5'>
          <h2 className='text-3xl text-orange-600'>O NAS</h2>
          <h3 className='text-2xl'>Ručíme za kvalitně odvedenou práci</h3>
          <p className='text-xl sm:text-2xl'>
            Jsme zavedená stavební firma se zaměřením na stavební práce,
            rekonstrukce, přístavby, malířství a zateplení domů. Máme dlouholeté
            zkušenosti a ve svém oboru se neustále zdokonalujeme a sledujeme
            nové trendy a pracovní postupy. Jsme spolehliví a odvádíme vždy 100%
            kvalitní práci.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5'>
            <div className='flex items-center gap-x-3 text-xl sm:text-2xl'>
              <TiArrowSync className='w-8 h-8 md:w-12 md:h-12 text-green-400' />
              Odborný Specialista
            </div>
            <div className='flex items-center gap-x-3 text-xl sm:text-2xl'>
              <GiArrowScope className='w-8 h-8 md:w-12 md:h-12 text-red-500' />
              Skvělé Nápady
            </div>
            <div className='flex  items-center gap-x-3 text-xl sm:text-2xl'>
              {' '}
              <TbArrowsSplit2 className='w-8 h-8 md:w-12 md:h-12 text-orange-700' />{' '}
              Přesní Stavitelé
            </div>
            <div className='flex items-center gap-x-3 text-xl sm:text-2xl'>
              <FaArrowsToDot className='w-8 h-8 md:w-12 md:h-12 text-slate-400' />{' '}
              Asistence
            </div>
          </div>
        </div>
        <div>
          <img
            className='w-full h-full object-cover'
            src='https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2021/04/1440x900-01-1-1024x640.jpg'
            alt=''
          />
        </div>
      </div>

      <div className='container flex flex-col gap-y-5 mx-auto px-4 mt-20 sm:mt-32'>
        <h2 className='text-2xl sm:text-3xl text-orange-600'>Co Nabízíme​</h2>
        <p className='text-xl sm:text-2xl'>
          Naše služby zahrnují veškeré, stavební, pokrývačské, zednické,
          malířské, obkladačské a další práce. Po ukončení naší činnosti, bude
          Váš dům připraven k jeho bezproblémovému užívání.
        </p>
        <div className='grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-x-7 gap-y-7'>
          <div className='card w-full bg-base-100 shadow-xl'>
            <figure className='px-10 pt-10'>
              <img
                src='https://www.fliesen-m2.de/media/config/theme/layout/include/slider/slide03_th.jpg'
                alt='fliesen'
                className='rounded-md h-[300px] object-cover w-full'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title text-2xl'>Rozumíme požadavkům</h2>
              <p className='text-xl'>
                Plánujete-li tedy jakoukoliv rekonstrukci, stačí se obrátit na
                naší společnost a my se už o vše postaráme.
              </p>
            </div>
          </div>
          <div className='card w-full bg-base-100 shadow-xl'>
            <figure className='px-10 pt-10'>
              <img
                src='https://www.ultratechcement.com/content/ultratechcement/in/en/home/for-homebuilders/home-building-explained-single/descriptive-articles/types-of-bricks-and-its-properties/_jcr_content/root/container/container_1646056284/teaser.coreimg.jpeg/1712292183906/types-of-bricks-and-its-properties.jpeg'
                alt='fliesen'
                className='rounded-md h-[300px] object-cover w-full'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title text-2xl'>Pracujeme přesně</h2>
              <p className='text-xl'>
                Našim klientům můžeme zaručit individuální a profesionální
                přístup a kvalitně odvedenou práci.
              </p>
            </div>
          </div>
          <div className='card w-full bg-base-100 shadow-xl'>
            <figure className='px-10 pt-10'>
              <img
                src='https://www.glassonweb.com/sites/default/files/articles/2018/Omrania-CMA-Tower.jpg'
                alt='fliesen'
                className='rounded-md h-[300px] object-cover w-full'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title text-2xl'>
                Poskytujeme nejlepší cestu ven
              </h2>
              <p className='text-xl'>
                S výběrem vhodného řešení právě pro Váš dům, Vám rádi pomůžeme.
                společnost a my se už o vše postaráme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
