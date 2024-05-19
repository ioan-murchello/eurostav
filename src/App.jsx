import {
  SharedLayout,
  Home,
  About,
  Services,
  Reference,
  Kontacts,
} from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='reference' element={<Reference />} />
          <Route path='kontacts' element={<Kontacts/>} />
        </Route>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
