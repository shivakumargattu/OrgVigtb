import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

const AboutUs = () => {
    return (
        <section className="bg-white white-100 text-gray-800 py-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <motion.div
                    className="md:w-1/2 mb-6 md:mb-0"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img 
                        src="https://media.istockphoto.com/id/1284378353/photo/young-indian-farmer-using-smartphone-in-cotton-field.jpg?s=1024x1024&w=is&k=20&c=Z35ItHTaLhHcvefWesXj72EQ9-vwvTaCS9pcBLP-r38=" // Replace with your image URL
                        alt="Organic Vegetables"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </motion.div>
                
                <motion.div
                    className="md:w-1/2 md:pl-8 text-left"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                 >
                    <h2 className="text-4xl font-bold text-center md:text-left mb-6">About Us</h2>
                    <p className="text-lg mb-4">
                        At OrgVgits, we are passionate about bringing you the freshest, highest quality organic vegetables. Our journey began with a simple idea: to connect consumers with local farmers who prioritize sustainable and eco-friendly farming practices.
                    </p>
                    <p className="text-lg mb-4">
                        Our mission is to promote healthy eating and support local agriculture. We believe that fresh, organic produce not only tastes better but also contributes to a healthier lifestyle and a healthier planet. Every vegetable we offer is carefully sourced, ensuring that you receive only the best nature has to offer.
                    </p>
                    <p className="text-lg mb-4">
                        Our commitment to sustainability goes beyond just what we sell. We actively support our local farming community, engaging in practices that help reduce environmental impact and promote biodiversity. When you shop with us, you’re not just buying vegetables
                    </p>
                   
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;
