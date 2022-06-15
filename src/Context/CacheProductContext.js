import { useContext, createContext, useState } from "react";

const CacheContext = createContext({
  cacheProduct: [{}],
});

export const useCacheContext = () => {
  return useContext(CacheContext);
};

const CacheProductContextProvider = ({ children }) => {
  const [cacheProduct, setCacheProduct] = useState([]);

  const setChacheState = (title, rating, id) => {
    const shallowCopy = [...cacheProduct];

    for (let exist of shallowCopy) {
      if (exist.id === id) return;
    }

    shallowCopy.push({ title, rating, id });

    if (shallowCopy.length >= 6) {
      shallowCopy.shift();
    }

    setCacheProduct(shallowCopy);
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
