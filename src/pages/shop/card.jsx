// import React, { useState } from "react";
// import data from "../../json/data.json";
// import images from "../../constant/images";
// import { useNavigate } from "react-router-dom";

// const Card = () => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const productsPerPage = 6; 
//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);
//     const totalPages = Math.ceil(data.length / productsPerPage);
//     const paginate = (pageNumber) => setCurrentPage(pageNumber);
//     const navigate=useNavigate()
//   return (
//     <>
//       <div className="flex justify-center gap-3 mb-4">
//         <select
//           className="block p-2.5 w-[14vw] bg-white border border-gray-300 text-gray-900 text-sm rounded-lg"
//           name="input-sort"
//           id="input-sort"
//         >
//           <option value="manual">Featured</option>
//           <option value="best-selling">Best Selling</option>
//           <option value="title-ascending">Alphabetically, A-Z</option>
//           <option value="title-descending">Alphabetically, Z-A</option>
//           <option value="price-ascending">Price, low to high</option>
//           <option value="price-descending">Price, high to low</option>
//           <option value="created-descending">Date, new to old</option>
//           <option value="created-ascending">Date, old to new</option>
//         </select>
//         <select
//           id="input-limit"
//           className="block p-2.5 w-[14vw] bg-white border border-gray-300 text-gray-900 text-sm rounded-lg"
//         >
//           <option value="10">10</option>
//           <option value="20">20</option>
//           <option value="30">30</option>
//           <option value="all">All</option>
//         </select>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//         {currentProducts.map((e, i) => (
//           <div key={e.id} className="px-4">
//             <div className="p-2">
//               <img
//                 src={images[e.image]}
//                 alt={e.title}
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//             <h1 onClick={()=>{navigate(`/shop/${e.id}`)}} className="pl-3 text-xl text-gray-400 pt-3 hover:text-[#f5bdb5] cursor-pointer">
//               {e.title}
//             </h1>
//             <h1 className="pl-3 text-xl text-gray-400">{e.price}</h1>
//           </div>
//         ))}
//       </div>

     
//       <div className="flex justify-center mt-6">
//         <button
//           onClick={() => paginate(1)}
//           className={`px-3 py-1 border rounded-md mx-1 ${
//             currentPage === 1 ? "bg-gray-400" : "bg-white"
//           }`}
//           disabled={currentPage === 1}
//         >
//           1
//         </button>
//         <button
//           onClick={() => paginate(2)}
//           className={`px-3 py-1 border rounded-md mx-1 ${
//             currentPage === 2 ? "bg-gray-400" : "bg-white"
//           }`}
//           disabled={currentPage === 2}
//         >
//           2
//         </button>
//       </div>
//     </>
//   );
// };

// export default Card;
