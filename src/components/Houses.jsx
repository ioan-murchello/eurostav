import { FaPhone } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Houses = () => {
  return (
    <div className='flex flex-col'>
      <article className='flex p-4 min-h-[400px] flex-col lg:flex-row border mb-24'>
        <div className='shrink-0 grow-0 basis-2/4 relative min-h-[300px] overflow-hidden border'>
          <img
            className='abosolute w-full h-[300px] sm:h-[400px] top-0 left-0 object-cover'
            src='https://i.guim.co.uk/img/media/8e5d337dbbdad5d67661fb3907512527132dc283/0_159_4856_2914/master/4856.jpg?width=1200&quality=85&auto=format&fit=max&s=cd2560a48f900b93bac5f9a8d0aad367'
            alt='House'
          />
        </div>
        <div className='gird lg:w-[50%] place-self-center gap-x-4 gap-y-4 p-8'>
          <h2 className='text-4xl mb-5 text-orange-600'>
            Vystavba rodinnych domu
          </h2>
          <p className='text-xl md:text-2xl'>
            S výstavbou rodinných domů máme dlouholeté zkušenosti. Rodinné domy
            stavíme s vědomím, že našim
          </p>
          <Link className='btn my-5 text-lg sm:text-xl' to='/kontacts'>
            Nezavazne poptat
          </Link>
        </div>
      </article>
      <article className='flex p-4 min-h-[400px] flex-col-reverse lg:flex-row-reverse border mb-24'>
        <div className='shrink-0 grow-0 basis-2/4 relative min-h-[300px] overflow-hidden border'>
          <img
            className='abosolute w-full h-[300px] sm:h-[400px] top-0 left-0 object-cover'
            src='https://sigmadoors.co.za/wp-content/uploads/2022/11/Modern-house-designs-Ideas-Sigmadoors.png'
            alt='House'
          />
        </div>
        <div className='gird lg:w-[50%] place-self-center gap-x-4 gap-y-4 p-8'>
          <h2 className='text-4xl mb-5 text-orange-600'>
            Fasádnické a stavební práce
          </h2>
          <p className='text-xl md:text-2xl'>
            Jsme zavedená stavební firma se zaměřením na rekonstrukce, přístavby
            a zateplení domů. Máme dlouholeté zkušenosti a ve svém oboru se
            neustále zdokonalujeme a sledujeme nové trendy a pracovní postupy.
            Jsme spolehliví a odvádíme vždy 100% kvalitní práci.
          </p>
          <Link
            className='btn my-5 text-lg sm:text-xl'
            to='tel:+333 333 444 55'
          >
            <FaPhone className='vibrate' /> +420 608 109 780
          </Link>
        </div>
      </article>
    </div>
  );
};
export default Houses;
