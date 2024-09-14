import React, { useState } from 'react';
import data from "../../json/data.json";
import images from "../../constant/images";
import { useParams } from 'react-router-dom';
const Detailproduct = () => {
    const [count, setCount] = useState(1)
    let { id } = useParams();
    const findproduct=data.find((e)=>e.id==id)
   
    
    return (
        <>
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row -mx-4">
      <div className="md:flex-1 px-4">
        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
          <img className="w-full h-full object-cover" src={images[findproduct.image]} alt="Product Image" />
        </div>
        <div className="flex -mx-2 mb-4">
          <div className="w-1/2 px-2">
            <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
          </div>
          <div className="w-1/2 px-2">
            <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
          </div>
        </div>
      </div>
      <div className="md:flex-1 px-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{findproduct.title}</h2>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{findproduct.price}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          ante justo. Integer euismod libero id mauris malesuada tincidunt.
        </p>
        <div className="flex mb-4">
          <div className="mr-4">
            <span className="font-bold text-gray-700 dark:text-gray-300">categories:</span>
            <span className="text-gray-600 dark:text-gray-300">{findproduct.categories.join(" , ")}</span>
          </div>
          <div>
            <span className="font-bold text-gray-700 dark:text-gray-300">Brand:</span>
            <span className="text-gray-600 dark:text-gray-300">{findproduct.brand}</span>
          </div>
        </div>
     
        <div className="mb-4">
          <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
          <div className="flex items-center mt-2">
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
          </div>
        </div>
        <div className='flex gap-x-5'>
                <div className="flex space-x-4">
                    <button
                        onClick={() =>count>1? setCount(count - 1):setCount(count)}
                        className="px-4 py-2  bg-[#e6e6e6] border rounded  "
                    >
                        -
                    </button>
                    <h1 className="text-3xl font-bold px-4 py-2 bg-white "> {count}</h1>

                    <button
                        onClick={() => setCount(count + 1)}
                        className="px-4 py-2 b bg-[#e6e6e6] border  rounded  "
                    >
                        +
                    </button>
                </div>

                  
        </div>
        <div>
          <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
           {findproduct.description}
          </p>
        </div>
      </div>
    </div>
  </div>
        </div>

        </>
    );
}

export default Detailproduct;
