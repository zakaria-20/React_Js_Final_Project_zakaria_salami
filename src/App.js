import React from 'react';
import { Route, Routes } from "react-router-dom";
import Homee from './pages/homee';
import Aboutt from './pages/aboutt';
import Contacts from './pages/contacts';
import Shopp from './pages/shopp';
import Detailproducts from './pages/detailproducts';
import Authh from './pages/authh';
import Registerr from './pages/registerr';
import { MyProvider } from './context';  // Ensure correct import

const App = () => {
  return (
    <>
      <MyProvider> {/* Make sure context wraps the entire component tree */}
        <Routes>
          <Route path='/login' element={<Authh />} />
          <Route path='/register' element={<Registerr />} />
          <Route path='/' element={<Homee />} />
          <Route path='/about' element={<Aboutt />} />
          <Route path='/contact' element={<Contacts />} />
          <Route path='/shop' element={<Shopp />} />
          <Route path='/shop/:id' element={<Detailproducts />} />
        </Routes>
      </MyProvider>
    </>
  );
};

export default App;
