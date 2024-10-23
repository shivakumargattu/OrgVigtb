import './App.css';
 // Make sure the path is correct
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './Componets/Herosection';
import Shop from './Componets/Shop';
import Footer from './Componets/Footer';
import About from './Componets/Abouts';
import Contact from './Componets/Contact';
import Register from './Componets/auth/Register';
import Login from './Componets/auth/Login';
import Protected from './Componets/auth/Protected';
import ProtectedRoute from './Componets/auth/ProtectedRoute';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/login' element={<Login/>}/>
                   <Route path='/protected' element={<ProtectedRoute element={<Protected />} />} />

                  {/* Protected Routes */}

                   <Route path='/' element={<ProtectedRoute element={<HeroSection />} />} />
                    <Route path='/shop' element={<ProtectedRoute element={<Shop />} />} />
                    <Route path='/about' element={<ProtectedRoute element={<About />} />} />
                    <Route path='/contact' element={<ProtectedRoute element={<Contact />} />} />
                

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
