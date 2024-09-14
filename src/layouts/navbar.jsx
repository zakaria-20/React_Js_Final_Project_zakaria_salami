import React from 'react';
import { FaRegUserCircle} from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa"
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <header class="text-slate-700 container relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
  <a href="#" class="flex items-center whitespace-nowrap text-5xl font-black">
    <span class="mr-2 w-8">
      <img src="/images/JOJj79gp_Djhwdp_ZOKLL.png" alt="" />
    </span>
    Fashe
  </a>
  <input type="checkbox" class="peer hidden" id="navbar-open" />
  <label class="absolute top-5 right-5 cursor-pointer lg:hidden" for="navbar-open">
    <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </label>
  <nav aria-label="Header Navigation" class="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
    <ul class="flex w-full justify-center items-center lg:flex-row lg:justify-center flex-col">
      <li class="lg:mr-12"><a class="text-xl hover:underline  hover:text-black text-red-400 "  href="#">Home</a></li>
      <li class="lg:mr-12"><Link to="/shop" class="hover:underline  hover:text-black text-xl" href="#">Shop</Link></li>
      <li class="lg:mr-12"><a class="hover:underline  hover:text-black text-xl" href="#">Sale</a></li>
      <li class="lg:mr-12"><a class="hover:underline  hover:text-black text-xl" href="#">Features</a></li>
      <li class="lg:mr-12"><a class="hover:underline  hover:text-black text-xl" href="#">Blog</a></li>
      <li class="lg:mr-12"><Link to="/about" class="hover:underline  hover:text-black  text-xl" href="#">About</Link></li>
      <li class="lg:mr-12"><a class="hover:underline  hover:text-black text-xl " href="#">Contact</a></li>

    </ul>
   
    <div class="flex gap-5">
      <FaRegUserCircle className='text-3xl text-gray-400'/>
     
      <FaShoppingCart className='text-3xl text-gray-400'/>
   
    </div>
  </nav>
</header>
   
        </>
    );
}

export default Navbar;
