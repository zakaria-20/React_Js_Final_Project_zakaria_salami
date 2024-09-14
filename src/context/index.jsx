import { createContext, useContext, useState } from "react";

// Rename to `MyContext` to avoid confusion with `MyAppContext`
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [dataProfile, setDataProfile] = useState([]);
  const [userData, setUserData] = useState(null);
  const [cart, setCart] = useState([]);
  const[subtotal, setSubtotal] =useState()

  const value = {
    dataProfile,
    setDataProfile,
    userData,
    setUserData,
    cart,
    setCart,
    subtotal,
    setSubtotal
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

// Hook to access the context
export const useMyAppContext = () => useContext(MyContext);
