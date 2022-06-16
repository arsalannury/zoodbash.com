import { useContext, createContext, useState } from "react";

const CacheContext = createContext({
  cacheProduct: [{}],
});

export const useCacheContext = () => {
  return useContext(CacheContext);
};

const CacheProductContextProvider = ({ children }) => {
  const [cacheProduct, setCacheProduct] = useState([]);

  const setChacheState = (title, rating) => {
    const shallowCopy = [...cacheProduct];

    for (let exist of shallowCopy) {
      if (exist.title === title) return;
    }

    shallowCopy.push({ title,rating });

    if (shallowCopy.length >= 6) {
      shallowCopy.shift();
    }

    setCacheProduct(shallowCopy);
    localStorage.setItem('cache',JSON.stringify(shallowCopy))
  };

  return (
    <>
      <CacheContext.Provider value={{ setChacheState, cacheProduct }}>
        {children}
      </CacheContext.Provider>
    </>
  );
};

export default CacheProductContextProvider;
