import { Link, useLocation } from "react-router-dom";


const BigMenu = () => {
    
    const location = useLocation();
    const active = location.pathname;
    
  return (
    <nav className='hidden lg:flex z-100'>
      <ul className='flex gap-x-5'>
        <li>
          <Link
            className={`text-2xl ${active === '/' ? 'text-orange-400' : ''}`}
            to='/'
          >
            Domu
          </Link>
        </li>
        <li>
          <Link
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
}
export default BigMenu