import React, { useRef } from 'react';

const products = [
  {
    id: 1,
    name: 'Organic Carrots',
    price: '$25.50',
    image: 'https://img.freepik.com/premium-photo/bunch-fresh-carrots-cloth_23-2148642943.jpg', // Replace with your image URL
  },
  {
    id: 2,
    name: 'Fresh Tomatoes',
    price: '$60.00',
    image: 'https://i.ibb.co/gVMXFHq/Gemini-Generated-Image-46uctf46uctf46uc.jpg',
  },
  {
    id: 3,
    name: 'Organic Spinach',
    price: '$2.80',
    image: 'https://i.ibb.co/BjXwH0z/Organic-Spinach.png',
  },
  {
    id: 4,
    name: 'Crispy Lettuce',
    price: '$1.50',
    image: 'https://i.ibb.co/wphNkL2/Crispy-Lettuce.png',
  },
  {
    id: 5,
    name: 'Sweet Bell Peppers',
    price: '$3.20',
    image: 'https://i.ibb.co/pf8G45p/Sweet-Bell-Peppers.png',
  },
  {
    id: 6,
    name: 'Fresh Broccoli',
    price: '$2.70',
    image: 'https://i.ibb.co/0n8SL2n/Fresh-Broccoli.png',
  },
  {
    id: 7,
    name: 'Organic Potatoes',
    price: '$1.80',
    image: 'https://i.ibb.co/gDzFHQg/Organic-Potatoes.png"',
  },
  {
    id: 8,
    name: 'Zucchini',
    price: '$2.50',
    image: 'https://i.ibb.co/DK73Hvc/Zucchini.png',
  },
  {
    id: 9,
    name: 'Organic Cucumbers',
    price: '$1.60',
    image: 'https://i.ibb.co/Yj8qBXj/Organic-Cucumbers.png',
  },
  {
    id: 10,
    name: 'Ripe Avocados',
    price: '$1.90',
    image: 'https://i.ibb.co/fqz1LsB/Ripe-Avocados.png',
  },
  {
    id: 11,
    name: 'Fresh Cauliflower',
    price: '$2.40',
    image: 'https://i.ibb.co/J3FCQyq/Fresh-Cauliflower.png',
  },
  {
    id: 12,
    name: 'Organic Beets',
    price: '$2.20',
    image: 'https://i.ibb.co/dGygNbJ/Organic-Beets.png',
  },
  {
    id: 13,
    name: 'Green Beans',
    price: '$2.00',
    image: 'https://i.ibb.co/J2bg1BS/Green-Beans.png',
  },
  {
    id: 14,
    name: 'Radishes',
    price: '$1.30',
    image: 'https://i.ibb.co/nMdkghR/Radishes.png',
  },
  {
    id: 15,
    name: 'Butternut Squash',
    price: '$2.50',
    image: 'https://i.ibb.co/f00Hyq5/Butternut-Squash.png',
  },
  {
    id: 16,
    name: 'Organic Garlic',
    price: '$1.20',
    image: 'https://i.ibb.co/ZJhZkn7/Organic-Garlic.png',
  },
];

const Shop = () => {
  const rowRef1 = useRef(null);
  const rowRef2 = useRef(null);

  const scroll = (ref, direction) => {
    const scrollAmount = ref.current.clientWidth; // Scroll by the width of the container
    ref.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="py-8">
    <h3 className='text-3xl font-bold pb-3 text-green-800'>Shop Now</h3>
      {/* Row 1 */}
      <div className="flex items-center mb-4">
        <button
          className="bg-green-600 text-white p-2 rounded-l hover:bg-green-500"
          onClick={() => scroll(rowRef1, 'left')}
        >
          &lt;
        </button>
        <div className="flex overflow-x-auto space-x-4 scroll-container" ref={rowRef1}>
          {products.slice(0, 8).map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg p-4 flex-none w-full max-w-[300px] mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-35 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-bold mb-1">{product.name}</h3>
              <p className="text-green-600 text-xl mb-2">{product.price}</p>
              <button className="bg-green-600 text-white py-3 px-4 rounded hover:bg-green-500">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <button
          className="bg-green-600 text-white p-2 rounded-r hover:bg-green-500"
          onClick={() => scroll(rowRef1, 'right')}
        >
          &gt;
        </button>
      </div>

      {/* Row 2 */}
      <div className="flex items-center mb-4">
        <button
          className="bg-green-600 text-white p-2 rounded-l hover:bg-green-500"
          onClick={() => scroll(rowRef2, 'left')}
        >
          &lt;
        </button>
        <div className="flex overflow-x-auto space-x-4 scroll-container" ref={rowRef2}>
          {products.slice(8, 16).map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg p-4 flex-none w-full max-w-[300px] mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-35 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-bold mb-1">{product.name}</h3>
              <p className="text-green-600 text-xl mb-2">{product.price}</p>
              <button className="bg-green-600 text-white py-3 px-4 rounded hover:bg-green-500">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <button
          className="bg-green-600 text-white p-2 rounded-r hover:bg-green-500"
          onClick={() => scroll(rowRef2, 'right')}
        >
          &gt;
        </button>
      </div>
     
           {/* Row 1 */}
           <div className="flex items-center mb-4">
        <button
          className="bg-green-600 text-white p-2 rounded-l hover:bg-green-500"
          onClick={() => scroll(rowRef1, 'left')}
        >
          &lt;
        </button>
        <div className="flex overflow-x-auto space-x-4 scroll-container" ref={rowRef1}>
          {products.slice(0, 8).map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg p-4 flex-none w-full max-w-[300px] mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-35 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-bold mb-1">{product.name}</h3>
              <p className="text-green-600 text-xl mb-2">{product.price}</p>
              <button className="bg-green-600 text-white py-3 px-4 rounded hover:bg-green-500">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <button
          className="bg-green-600 text-white p-2 rounded-r hover:bg-green-500"
          onClick={() => scroll(rowRef1, 'right')}
        >
          &gt;
        </button>
      </div>

    </div>
  );
};

export default Shop;
