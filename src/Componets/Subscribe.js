import React from "react";

const Subscribe = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-green-100 rounded-lg shadow-lg">
      <div className="flex justify-center items-center">
        <img
          src="https://elements-resized.envatousercontent.com/envato-shoebox/7f5a/55fc-5640-4958-ba59-5856c15477b6/1N3A7259.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=6d59fd5d3ef12643c09b7049762f7a9b2b956e4f8fede03918d6376a11513685"
          alt="Subscription Image"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-center p-4 bg-olive-200 rounded-lg">
        <h1 className="font-bold text-green-900 text-5xl">23%</h1>
        <h2 className="font-bold text-green-900 text-xl">
          <span className="text-2xl"> Discount</span> for All Products!
        </h2>
        <p className="mt-2 text-xl text-gray-700">
          Subscribe to enjoy exclusive benefits, including special offers, early access to new products, and more.
        </p>
        
        <p className="p-8 text-2xl text-gray-700 text-gradient pulse">
          Join our community and never miss an update!
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="mt-4 p-3 border border-green-300 rounded-md"
        />
        <button className="mt-4 bg-green-600 text-white p-3 rounded-md hover:bg-green-500">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
