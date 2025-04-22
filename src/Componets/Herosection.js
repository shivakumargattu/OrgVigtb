import { FaRegUser } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { FiLogOut } from "react-icons/fi";
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Brands from "./Brands";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import ProductCards from "./Products";
import { Link } from "react-router-dom";

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Shop', href: '/shop' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: "/contact" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-lg text-gray-700">You need to log in to access this page.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
        <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">OrgVgits</span>
              <p className="text-2xl font-bold text-emerald-600">OrgVgits</p>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-emerald-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
            <Link to="/cart" className="text-gray-900 hover:text-emerald-600 transition-colors">
              <TiShoppingCart size={24} />
            </Link>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-1 text-sm font-semibold leading-6 text-gray-900 hover:text-emerald-600 transition-colors"
            >
              <FiLogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </nav>
        
        {/* Mobile menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <p className="text-2xl font-bold text-emerald-600">OrgVgits</p>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-emerald-600 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 flex items-center justify-between">
                  <Link 
                    to="/cart" 
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-emerald-600 transition-colors"
                  >
                    Shopping Cart
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-emerald-600 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-50 to-green-50 pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Content */}
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Fresh, Organic <span className="text-emerald-600">Vegetables</span> Delivered to Your Doorstep
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                At OrgVgits, we provide fresh, chemical-free produce straight from local farms. 
                Enjoy seasonal, handpicked vegetables with maximum freshness and nutrition.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  to="/shop" 
                  className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg shadow-md transition-all duration-300"
                >
                  Shop Now
                </Link>
                <Link 
                  to="#subscribe" 
                  className="px-8 py-3 bg-white hover:bg-gray-100 text-emerald-600 font-medium rounded-lg shadow-md border border-gray-200 transition-all duration-300"
                >
                  Subscribe
                </Link>
              </div>
            </div>
            
            {/* Image */}
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="Fresh organic vegetables" 
                className="w-full h-auto rounded-xl shadow-xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the components */}
      <Brands />
      <ProductCards />
      <Subscribe />
      <AboutUs />
      <Footer />
    </div>
  );
}