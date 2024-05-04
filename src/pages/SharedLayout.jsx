import { Link, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
const SharedLayout = () => {
  return (
    <div className='flex flex-col min-h-[100%]'>
      <Header />
      <div className='grow'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default SharedLayout;
