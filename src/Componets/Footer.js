import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 px-4 md:px-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between">
                <div className="flex-1 mb-6 md:mb-0 text-left">
                    <h1 className='text-3xl font-bold mb-4'>OrgVgits</h1>
                    <p className='text-sm'>
                        Explore our wide selection of fresh, organic vegetables at OrgVgits! From seasonal picks to unique varieties, we bring the farm to your table. Visit our website to learn more about our local farmers, discover delicious recipes, and enjoy convenient online ordering. Join us in supporting sustainable agriculture and nourishing your family with the best nature has to offer. Shop now at OrgVgits!
                    </p>
                </div>

                <div className="flex-1 mb-6 md:mb-0 text-center md:text-left">
                    <h3 className='text-2xl font-bold mb-6'>Contact Us</h3>
                    <p>Email: <a href="mailto:info@orgvgits.com" className="hover:text-green-500">info@orgvgits.com</a></p>
                    <p>Phone: <a href="tel:+1234567890" className="hover:text-green-500">+1 (234) 567-890</a></p>
                    <p className=''>Location: 123 Organic St, Green City, India</p>
                </div>

                <div className="flex-1 text-center md:text-left">
                    <h3 className='text-2xl font-bold mb-6'>Follow Us</h3>
                    <div className="flex justify-center md:justify-start items-center space-x-4">
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-500"
                        >
                            <FaInstagram size={30} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-500"
                        >
                            <FaTwitter size={30} />
                        </a>
                        <a
                            href="https://www.youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-500"
                        >
                            <FaYoutube size={30} />
                        </a>
                    </div>
                </div>
            </div>

            <p className="text-center mt-4">© 2024 OrgVgits. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
