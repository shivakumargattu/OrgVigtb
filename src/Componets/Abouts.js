import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

const About = () => {
    return (
        <section className="bg-white text-gray-800 py-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                
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
                        Our commitment to sustainability goes beyond just what we sell. We actively support our local farming community, engaging in practices that help reduce environmental impact and promote biodiversity. When you shop with us, you’re not just buying vegetables; you’re supporting a movement.
                    </p>
                </motion.div>
                
                <motion.div
                    className="md:w-1/2 mb-6 md:mb-0"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img 
                        src="https://media.istockphoto.com/id/1284378353/photo/young-indian-farmer-using-smartphone-in-cotton-field.jpg?s=1024x1024&w=is&k=20&c=Z35ItHTaLhHcvefWesXj72EQ9-vwvTaCS9pcBLP-r38="
                        alt="Organic Farming"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </motion.div>
            </div>

            {/* Additional Content Section */}
            <div className="container mx-auto px-4 py-8">
                <h3 className="text-3xl font-bold text-center mb-6">Our Practices</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        className="bg-gray-100 p-4 rounded-lg shadow-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h4 className="text-xl font-semibold mb-2">Sustainable Farming</h4>
                        <p className="text-lg">
                            We employ sustainable farming practices that protect our planet while delivering the best produce. From crop rotation to organic pest control, we ensure our methods are eco-friendly.
                        </p>
                    </motion.div>
                    <motion.div
                        className="bg-gray-100 p-4 rounded-lg shadow-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="text-xl font-semibold mb-2">Community Engagement</h4>
                        <p className="text-lg">
                            Our farmers are not just providers; they are part of our community. We work together to create a positive impact, supporting local initiatives and events that promote healthy living.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Image Section */}
            <div className="container mx-auto px-4 py-8">
                <h3 className="text-3xl font-bold text-center mb-6">Fresh from the Farm</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <img 
                        src="https://i.ibb.co/3vFXycW/fresshh.png"
                        alt="Fresh Vegetables"
                        className="rounded-lg shadow-lg"
                    />
                    <img 
                        src="https://i.ibb.co/0c2yTLH/asdmnwdw.png"
                        alt="Organic Farming"
                        className="rounded-lg shadow-lg"
                    />
                    <img 
                        src="https://i.ibb.co/kDXZzjx/sdhgghds.png"
                        alt="Harvested Produce"
                        className="rounded-lg shadow-lg"
                    />
                    
                </div>
            </div>
        </section>
    );
};

export default About;
