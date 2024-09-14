import React, { useState, useEffect } from "react";
import images from "../../constant/images";

const Section4 = () => {
  
    const imageArray = [images.shopp, images.banner2, images.banner3, images.banner5];
    const [randomImage, setRandomImage] = useState(imageArray[0]);
    const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    setRandomImage(imageArray[randomIndex]);
  };
    useEffect(() => {
    getRandomImage();
  }, []);

  return (
    <div className="flex justify-center gap-5 bg-[#f2f2f2] min-h-screen">
      {/* First Banner Section */}
      <div>
        <article className="relative isolate flex flex-col justify-center items-center overflow-hidden px-8 pb-8 pt-40 w-[40vw] h-[65vh] mx-auto mt-24 shadow-lg rounded-lg">
          <img
            src={images.banner4}
            alt="University of Southern California"
            className="absolute inset-0 h-full w-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 " />
          <div className="relative bottom-12 z-10 flex flex-col justify-center items-center text-center gap-5">
            <h3 className="text-3xl font-bold text-white">The Beauty</h3>
            <div className="mt-1 text-7xl font-bold leading-6 text-white">
              Lookbook
            </div>
            <div className="mt-1 text-xl hover:underline cursor-pointer leading-6 text-white pt-4">
              View Collection
            </div>
          </div>
        </article>
      </div>

      {/* Product Display Section */}
      <div className="flex flex-col justify-center items-center mt-[93px] bg-white w-[40vw] h-[65vh] shadow-lg rounded-lg">
        <div className="flex justify-center items-center">
          {/* Randomly selected image */}
          <img src={images.shopp} alt="Product Image" className="w-[50%]" />
        </div>
        <div className="text-center mt-4">
          <h1 className="text-black hover:text-[#eab6bc] cursor-pointer text-xl">
            Boxy2 T-Shirt with Roll Sleeve
          </h1>
          <h1 className="text-black text-base text-xl">$20.00</h1>
        </div>
        <div className="flex py-11 xl:py-7">
          <div className="flex flex-col items-center border border-gray-300 p-4 rounded-md">
            <span className="text-lg">-2082</span>
            <span className="text-lg text-gray-500">days</span>
          </div>
          <div className="flex flex-col items-center mx-2 border border-gray-300 p-4 rounded-md">
            <span className="text-lg">-22</span>
            <span className="text-lg text-gray-500">hrs</span>
          </div>
          <div className="flex flex-col items-center mx-2 border border-gray-300 p-4 rounded-md">
            <span className="text-lg">-4</span>
            <span className="text-lg text-gray-500">mins</span>
          </div>
          <div className="flex flex-col items-center mx-2 border border-gray-300 p-4 rounded-md">
            <span className="text-lg">-16</span>
            <span className="text-lg text-gray-500">secs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
