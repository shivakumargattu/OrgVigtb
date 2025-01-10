import './App.css';
 // Make sure the path is correct
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './Componets/Herosection';
import { createContext, useContext } from 'react';
import Shop from './Componets/Shop';
import Footer from './Componets/Footer';
import About from './Componets/Abouts';
import Contact from './Componets/Contact';
import Register from './Componets/auth/Register';
import Login from './Componets/auth/Login';
import Protected from './Componets/auth/Protected';
import ProtectedRoute from './Componets/auth/ProtectedRoute';



export const store= createContext()

function App() {
  const [token, setToken]=useContext(null)
  return (
    <div className="App">
    
    <store.Provider value={[token,setToken]}>
      <BrowserRouter>
        <Routes>
                    <Route path='/' element={<Register/>}/>
                    <Route path='/login' element={<Login/>}/>
                   <Route path='/protected' element={<ProtectedRoute element={<Protected />} />} />

                  {/* Protected Routes */}

                   <Route path='/home' element={<ProtectedRoute element={<HeroSection />} />} />
                    <Route path='/shop' element={<ProtectedRoute element={<Shop />} />} />
                    <Route path='/about' element={<ProtectedRoute element={<About />} />} />
                    <Route path='/contact' element={<ProtectedRoute element={<Contact />} />} />
                
                    
        </Routes>
        
      </BrowserRouter>
      </store.Provider>
    </div>
  );
}

export default App;
