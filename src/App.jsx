import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Hero1 from './components/Hero1';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
