import React from 'react';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import Register from './auth/Register';

const Registerr = () => {
    return (
        <>
            <Navbar />
            <Register />
            <Footer/>
        </>
    );
}

export default Registerr;
