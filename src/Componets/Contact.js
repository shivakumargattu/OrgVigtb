import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

const Contact = () => {
    return (
        <section className="bg-green-100 text-gray-800 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-6">Get in Touch</h2>
                
                <div className="flex flex-col md:flex-row md:justify-between">
                    {/* Contact Form */}
                    <motion.div
                        className="md:w-1/2 md:pr-8"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <form className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-2" htmlFor="name">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    className="w-full border border-gray-300 p-2 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="w-full border border-gray-300 p-2 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
                                <textarea 
                                    id="message" 
                                    className="w-full border border-gray-300 p-2 rounded" 
                                    rows="5"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500">
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Details */}
                    <motion.div
                        className="md:w-1/2 md:pl-8 mt-8 md:mt-0"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
                        <p className="mb-2"><strong>Email:</strong> support@orgvgits.com</p>
                        <p className="mb-2"><strong>Phone:</strong> +1 (234) 567-890</p>
                        <p className="mb-2"><strong>Address:</strong> 123 Organic Lane, Farm City, FC 12345</p>
                    </motion.div>
                </div>

                {/* Google Maps Embed */}
                <div className="mt-8">
                    <h3 className="text-2xl font-semibold text-center mb-4">Our Location</h3>
                    <div className="w-full h-64 md:h-96">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.456842562472!2d78.5215816072473!3d17.317625865639585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba260c20abd69%3A0x4b71f855a1a5e594!2sHyderabad%2C%20Telangana%20500097!5e0!3m2!1sen!2sin!4v1727474904731!5m2!1sen!2sin"                             width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
