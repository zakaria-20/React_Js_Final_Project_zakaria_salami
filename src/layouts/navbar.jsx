import React, { useState, useEffect } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useMyAppContext } from '../context';
import images from '../constant/images';

const Navbar = () => {
  const { cart, setCart, subtotal, setSubtotal } = useMyAppContext();
  const [modal, setModal] = useState(false);

  const toggleCart = () => {
    setModal(!modal);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  setSubtotal(cart.reduce((total, item) => total + item.price, 0))
  const cartItemCount = cart.length;

  return (
    <>
      <header className="text-slate-700 container relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
        <a href="#" className="flex items-center whitespace-nowrap text-5xl font-black">
          <span className="mr-2 w-8">
            <img src="/images/JOJj79gp_Djhwdp_ZOKLL.png" alt="" />
          </span>
          Fashe
        </a>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label className="absolute top-5 right-5 cursor-pointer lg:hidden" htmlFor="navbar-open">
          <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
        <nav aria-label="Header Navigation" className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
          <ul className="flex w-full justify-center items-center lg:flex-row lg:justify-center flex-col">
            <li className="lg:mr-12"><Link to="/" className="text-xl hover:underline hover:text-black text-red-400">Home</Link></li>
            <li className="lg:mr-12"><Link to="/shop" className="hover:underline hover:text-black text-xl">Shop</Link></li>
            <li className="lg:mr-12"><a className="hover:underline hover:text-black text-xl">Sale</a></li>
            <li className="lg:mr-12"><a className="hover:underline hover:text-black text-xl">Features</a></li>
            <li className="lg:mr-12"><a className="hover:underline hover:text-black text-xl">Blog</a></li>
            <li className="lg:mr-12"><Link to="/about" className="hover:underline hover:text-black text-xl">About</Link></li>
            <li className="lg:mr-12"><Link to="/contact" className="hover:underline hover:text-black text-xl">Contact</Link></li>
          </ul>

          <div className="flex gap-5 relative">
            <Link to="/login"><FaRegUserCircle className="text-3xl text-gray-400" /></Link>
            <div className="relative">
              <FaShoppingCart onClick={toggleCart} className="text-3xl text-gray-400 cursor-pointer" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">{cartItemCount}</span>
              )}
            </div>
            {modal && (
              <div className="fixed top-16 right-10 w-80 max-h-[60vh] bg-white shadow-lg p-6 z-20 overflow-y-auto">
                {cart.length > 0 ? (
                  cart.map((e, i) => (
                    <div key={i} className="flex justify-between items-center mb-2">
                      <div className='flex gap-x-2'>
                        <div>
                          <img src={images[e.image]} alt={e.title} className="w-20 h-24" />
                        </div>
                        <div>
                          <h1>{e.title}</h1>
                          <p>{e.price}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(i)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  ))
                ) : (
                  <p>Your cart is empty.</p>
                )}
                <div className="flex gap-3 items-center mt-4">
                  <p className="font-bold">Subtotal:</p>
                  {/* <p className="font-bold">{subtotal}</p> */}
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
