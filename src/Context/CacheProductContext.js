import { useContext,createContext,useState } from "react";

const CacheContext = createContext({
    cacheProduct:[{}]
});

export const useCacheContext = () => {
    return useContext(CacheContext);
}


const CacheProductContextProvider = ({children}) => {
    
    const [cacheProduct,setCacheProduct] = useState([]);

    const setChacheState = (title,rating) => {
        const shallowCopy = [...cacheProduct];
        shallowCopy.push({title,rating});
        setCacheProduct(shallowCopy);
    }

    return (
        <>
        <CacheContext.Provider
        value={{setChacheState,cacheProduct}}
        >
            {children}
        </CacheContext.Provider>
        </>
    )
}

export default CacheProductContextProvider;