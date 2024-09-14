import React, { useState } from "react";
import data from "../../json/data.json";

const Sidebar = ({ onFilterChange }) => {
 
  const [products, setProducts] = useState(data);


  const filterPrice = (min, max) => {
    const filteredProducts = products.filter(
      product =>
        parseFloat(product.price.replace('$', '')) >= min &&
        parseFloat(product.price.replace('$', '')) <= max
    );

    onFilterChange(filteredProducts);
 
  };
  



  return (
    <div className='flex flex-col gap-[6vh] w-60 pl-10'>
 
      <div className='flex flex-col gap-[2vh]'>
        <p className='text-[20px] font-bold'>Categories</p>
        <div>
          <p className='text-black-500 text-lg hover:text-[#efccc8] cursor-pointer'>Best Seller (8 items)</p>
          <p className='text-gray-500 text-lg hover:text-[#efccc8] cursor-pointer'>Featured (8 items)</p>
          <p className='text-gray-500 text-lg hover:text-[#efccc8] cursor-pointer'>Men (8 items)</p>
          <p className='text-gray-500 text-lg hover:text-[#efccc8] cursor-pointer'>Women (8 items)</p>
        </div>
      </div>

     
      <div className='flex flex-col gap-[2vh]'>
        <p className='text-[20px] font-bold'>Color</p>
        <div>
          <div className='flex gap-2 items-center'>
            <input type="checkbox" id="black" onChange={() => console.log('Filter by Black')} />
            <label htmlFor="black" className='text-gray-500'>Black</label>
          </div>
          <div className='flex gap-2 items-center'>
            <input type="checkbox" id="gray" onChange={() => console.log('Filter by Gray')} />
            <label htmlFor="gray" className='text-gray-500'>Gray</label>
          </div>
          <div className='flex gap-2 items-center'>
            <input type="checkbox" id="red" onChange={() => console.log('Filter by Red')} />
            <label htmlFor="red" className='text-gray-500'>Red</label>
          </div>
        </div>
      </div>

 
      <div className='flex flex-col gap-[2vh]'>
        <p className='text-[30px] font-bold'>Price</p>
        <div className='ms-3'>
          <div className='flex gap-2 items-center'>
            <input
              type="checkbox"
              id="price-0-20"
              onChange={() => filterPrice(0, 20)}
            />
            <label htmlFor="price-0-20" className='text-gray-500'>0-20</label>
          </div>
          <div className='flex gap-2 items-center'>
            <input
              type="checkbox"
              id="price-20-50"
              onChange={() => filterPrice(20, 50)}
            />
            <label htmlFor="price-20-50" className='text-gray-500'>20-50</label>
          </div>
        </div>
      </div>

    
      <div className='flex flex-col gap-[2vh]'>
        <p className='text-[20px] font-bold'>Size</p>
        <div>
          <div className='flex gap-2 items-center'>
            <input type="checkbox" id="size-l" onChange={() => console.log('Filter by Size L')} />
            <label htmlFor="size-l" className='text-gray-500'>L</label>
          </div>
          <div className='flex gap-2 items-center'>
            <input type="checkbox" id="size-m" onChange={() => console.log('Filter by Size M')} />
            <label htmlFor="size-m" className='text-gray-500'>M</label>
          </div>
          <div className='flex gap-2 items-center'>
            <input type="checkbox" id="size-s" onChange={() => console.log('Filter by Size S')} />
            <label htmlFor="size-s" className='text-gray-500'>S</label>
          </div>
          <div className='flex gap-2 items-center'>
            <input type="checkbox" id="size-xl" onChange={() => console.log('Filter by Size XL')} />
            <label htmlFor="size-xl" className='text-gray-500'>XL</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
