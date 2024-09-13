// import React, { useState } from "react";
// import images from "../../constant/images";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper/modules";
// import data from "../../json/data.json";

// const Carousel2 = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
   
//     setCart((prevCart) => [...prevCart, product]);
//     console.log("Added to cart:", product);
//   };

//   return (
//     <div className="pb-20">
//       <p className="text-[35px] font-semibold text-center pt-[6rem] pb-10">
//         FEATURED PRODUCTS
//       </p>
//       <div>
//         <Swiper
//           slidesPerView={4}
//           slidesPerGroup={4}
//           spaceBetween={30}
//           loop={true}
//           navigation={true}
//           modules={[Navigation]}
//           className="mySwiper"
//         >
//           {data.map((e, i) => (
//             <SwiperSlide key={i} className="px-4">
//               <div className="p-2">
//                 <img
//                   src={images[e.image]}
//                   alt={e.title}
//                   className="w-full h-auto"
//                 />
//               </div>
//               <h1 className="pl-3 text-xl text-gray-400 pt-3 hover:text-[#f5bdb5] cursor-pointer">
//                 {e.title}
//               </h1>
//               <div className="flex justify-between">
//                 <h1 className="pl-3 text-xl text-gray-400">{e.price}</h1>
//                 <button
//                   onClick={() => addToCart(e)}
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 >
//                   Add To Cart
//                 </button>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Carousel2;
