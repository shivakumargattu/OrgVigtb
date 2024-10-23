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
      window.location.href = '/login'; // Redirect to login after logout
  };

  if (!token) {
      return <p>You need to log in to access this page.</p>;
  }


  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="bg-white flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">OrgVgits</span>
              <p className="text-2xl font-bold text-green-900 " >OrgVgits</p>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
           <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              <div className="flex items-center justify-between">
              <TiShoppingCart size={29} className="mr-6" />  <button onClick={handleLogout}><FiLogOut size={23} /></button>   
              </div>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">OrgVgits</span>
                <p className="text-2xl font-bold">OrgVgits</p>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <div className="flex items-center justify-between">
                      <TiShoppingCart size={29} className="mr-6" /> <FaRegUser size={23} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Section */}
      <section className="bg-green-100 py-12 md:py-20 lg:py-24 mt-24 md:mt-0">
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
          {/* Left side: Content */}
          <div className="md:w-1/2 text-center md:text-left">
            {/* Heading */}
            <h1 className=" py-4 text-2xl md:text-2xl block lg:text-3xl font-bold text-green-900 mb-6">
              Fresh, Organic Vegetables Delivered to Your Doorstep
            </h1>
            {/* Content */}
            <p className="text-base md:text-lg lg:text-xl text-gray-800 max-w-2xl mx-auto md:mx-0 mb-8">
              At OrgVgits, we believe in providing fresh, chemical-free produce that’s as close to nature as possible. 
              Our organic vegetables are harvested daily from local farms, ensuring maximum freshness and nutrition. 
              By choosing organic,Order now and enjoy a variety of seasonal, handpicked vegetables delivered straight to your home.
            </p>

            {/* Button */}
            <a href="#shop" className="inline-block bg-green-600 hover:bg-green -700 text-white text-lg px-8 py-3 rounded-md shadow-lg transition-all duration-300">
              Shop Now
            </a>
            <a href="#subscrib" className="m-4 inline-block  bg-gray-100 text-green-600 hover:bg-green-900  text-lg px-8 py-3 rounded-md shadow-lg transition-all duration-300">
              Subscribe
            </a>
          </div>

          {/* Image for small devices only */}
          <div className="md:hidden mb-6 mt-2">
          <h1 className="text-2xl md:text-2xl block lg:text-3xl font-bold text-green-900 mb-6">
              Fresh, Organic Vegetables Delivered to Your Doorstep
            </h1>
       
            <img 
              src="https://elements-resized.envatousercontent.com/envato-shoebox/9a07/1f7c-510f-4bd9-8e8e-349cfa37b624/food_marafon_092-2.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=72959dc524ab84740161e6f7fc5464600806012aa8d86be0b6da5e782be662af" 
              alt="Small Device Organic Vegetables" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Image for medium and large devices only */}
          <div className="hidden md:block md:w-1/2 mb-6 md:mb-0 pt-5 ">
            <img 
              src="https://elements-resized.envatousercontent.com/envato-shoebox/twenty20/production/uploads/items/b1fbf9ca-2b0d-4144-97d8-1d78982a8bc5/source?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=408e0eeabb2cccb903edca64f4d6caa5a4967e461365ec48d29e2dc8787da6a7" 
              alt="Large Device Organic Vegetables" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
      <Brands/>     
      <ProductCards/>
      <Subscribe/>
      <AboutUs/>
     <Footer/>  
    </div>
  );
}
