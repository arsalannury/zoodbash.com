import { useContext,createContext,useState } from "react";

const CacheContext = createContext({});

export const useCache = () => {
    return useContext(CacheContext);
}


const CacheProductContextProvider = ({children}) => {
    
    return (
        <>
        <CacheContext.Provider>
            {children}
        </CacheContext.Provider>
        </>
    )
}

export default CacheProductContextProvider;