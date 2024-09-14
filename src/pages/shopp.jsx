import React from 'react';
import Navbar from '../layouts/navbar';
import Section11 from './shop/section11';
import Sidebar from './shop/sidebar';
import Card from './shop/card';
import Footer from '../layouts/footer';

const Shopp = () => {
    return (
        <>
            <Navbar />
            <Section11 />
            <div className='flex pt-20'>
                <div>
                    <Sidebar />
                </div>
                <div className='pb-10'>
                <Card />
                </div>
            </div>
            <Footer />   
        </>
    );
}

export default Shopp;
