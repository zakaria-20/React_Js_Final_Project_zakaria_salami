import React, { useState } from 'react';
import Navbar from '../layouts/navbar';
import Section11 from './shop/section11';
import Sidebar from './shop/sidebar';
import Card from './shop/card';
import Footer from '../layouts/footer';
import data from "../json/data.json"
const Shopp = () => {
    const [filteredData, setFilteredData] = useState(data);
    const handleFilterChange = (newFilteredData) => {
        setFilteredData(newFilteredData);
  };
    return (
        <>
            <Navbar />
            <Section11 />
            <div className='flex pt-20'>
                <div>
                    <Sidebar onFilterChange={handleFilterChange}/>
                </div>
                <div className='pb-10'>
                <Card products={filteredData}  />
                </div>
            </div>
            <Footer />   
        </>
    );
}

export default Shopp;
