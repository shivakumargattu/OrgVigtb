import './App.css';
 // Make sure the path is correct
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './Componets/Herosection';
import Shop from './Componets/Shop';
import Footer from './Componets/Footer';
import About from './Componets/Abouts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<HeroSection/>} />
         <Route path='/shop' element={<Shop/>}/>
         <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
