import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import 'flowbite/dist/flowbite.css';
import 'flowbite-react';
import { BrowserRouter } from 'react-router-dom';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);


