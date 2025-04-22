import React, { useRef, useState } from 'react';
import { TiShoppingCart } from "react-icons/ti";

const products = [
  {
    id: 1,
    name: 'Organic Carrots',
    price: '$25.50',
    image: 'https://img.freepik.com/premium-photo/bunch-fresh-carrots-cloth_23-2148642943.jpg',
  },
  {
    id: 2,
    name: 'Fresh Tomatoes',
    price: '$60.00',
    image: 'https://images.unsplash.com/photo-1592841200221-a6899c25273b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 3,
    name: 'Organic Spinach',
    price: '$2.80',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 4,
    name: 'Crispy Lettuce',
    price: '$1.50',
    image: 'https://images.unsplash.com/photo-1603048719539-6b0a5cbbf773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 5,
    name: 'Sweet Bell Peppers',
    price: '$3.20',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 6,
    name: 'Fresh Broccoli',
    price: '$2.70',
    image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 7,
    name: 'Organic Potatoes',
    price: '$1.80',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 8,
    name: 'Zucchini',
    price: '$2.50',
    image: 'https://images.unsplash.com/photo-1594282486555-1a6c8c6e6a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 9,
    name: 'Organic Cucumbers',
    price: '$1.60',
    image: 'https://images.unsplash.com/photo-1604977048610-7b708740a1ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 10,
    name: 'Ripe Avocados',
    price: '$1.90',
    image: 'https://images.unsplash.com/photo-1598153346810-860daa814c4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 11,
    name: 'Fresh Cauliflower',
    price: '$2.40',
    image: 'https://images.unsplash.com/photo-1613743985194-4c0c7a9dba56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 12,
    name: 'Organic Beets',
    price: '$2.20',
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 13,
    name: 'Green Beans',
    price: '$2.00',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 14,
    name: 'Radishes',
    price: '$1.30',
    image: 'https://images.unsplash.com/photo-1594282486555-1a6c8c6e6a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 15,
    name: 'Butternut Squash',
    price: '$2.50',
    image: 'https://images.unsplash.com/photo-1570586437269-9c5e6b0e719b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 16,
    name: 'Organic Garlic',
    price: '$1.20',
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
];

const ProductCards = () => {
  const rowRef1 = useRef(null);
  const rowRef2 = useRef(null);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const scroll = (ref, direction) => {
    const scrollAmount = ref.current.clientWidth;
    ref.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const addToCart = (product) => {
    setCartCount(prevCount => prevCount + 1);
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className='text-3xl font-bold text-green-800'>Our Fresh Vegetables</h3>
        <div className="relative">
          <TiShoppingCart className="text-3xl text-green-700" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
      </div>

      {/* Row 1 */}
      <div className="flex items-center mb-8">
        <button
          className="bg-green-600 text-white p-2 rounded-l hover:bg-green-500 transition-colors"
          onClick={() => scroll(rowRef1, 'left')}
        >
          &lt;
        </button>
        <div 
          className="flex overflow-x-auto space-x-6 px-4 py-4 scrollbar-hide" 
          ref={rowRef1}
          style={{ scrollbarWidth: 'none' }}
        >
          {products.slice(0, 8).map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-md p-4 flex-none w-64 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-3"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold mb-1 text-gray-800">{product.name}</h3>
              <p className="text-green-600 text-xl font-bold mb-4">{product.price}</p>
              <button 
                onClick={() => addToCart(product)}
                className="mt-auto bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <button
          className="bg-green-600 text-white p-2 rounded-r hover:bg-green-500 transition-colors"
          onClick={() => scroll(rowRef1, 'right')}
        >
          &gt;
        </button>
      </div>

      {/* Row 2 */}
      <div className="flex items-center mb-8">
        <button
          className="bg-green-600 text-white p-2 rounded-l hover:bg-green-500 transition-colors"
          onClick={() => scroll(rowRef2, 'left')}
        >
          &lt;
        </button>
        <div 
          className="flex overflow-x-auto space-x-6 px-4 py-4 scrollbar-hide" 
          ref={rowRef2}
          style={{ scrollbarWidth: 'none' }}
        >
          {products.slice(8, 16).map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-md p-4 flex-none w-64 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-3"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold mb-1 text-gray-800">{product.name}</h3>
              <p className="text-green-600 text-xl font-bold mb-4">{product.price}</p>
              <button 
                onClick={() => addToCart(product)}
                className="mt-auto bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <button
          className="bg-green-600 text-white p-2 rounded-r hover:bg-green-500 transition-colors"
          onClick={() => scroll(rowRef2, 'right')}
        >
          &gt;
        </button>
      </div>

      <div className="text-center">
        <button className="bg-gradient-to-r from-green-700 to-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105">
          <a href='/shop'>View All Products</a> 
        </button>
      </div>
    </div>
  );
};

export default ProductCards;