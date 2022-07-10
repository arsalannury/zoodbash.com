import React, { createContext, useContext, useEffect,useState } from "react";
import axios from 'axios';

const SearchContext = createContext({});

export const useSearchContext = () => {
    return useContext(SearchContext);
}


const SearchContextProvider = ({children}) => {
    const [isLoading,setLoading] = useState(false);
    const [searchHandle,setSearchHandle] = useState([]);


    const handleRequestForSeach = async (event) => {

        if(!event.target.value) {
          setLoading(false);
          setSearchHandle([]);
          return;
        }
  
        setLoading(true);
          try{
            const searchResponse = await axios.get("https://fakestoreapi.com/products")
            const isFetch = searchResponse.data;
            setSearchHandle(() => {
              return isFetch.filter(item => {
              return item.title.toLowerCase().includes(event.target.value)
             })
            })
            setLoading(false);
            console.log(searchHandle);
          } catch(error) {
               setLoading(true);
          }      
      }


      function returnSearchResults(){

       return searchHandle.map((product,index) => (
            <React.Fragment key={product.id}>
                 <div>
                    {product.title}
                 </div>
            </React.Fragment>
        ))
        
      }


    
    return (
        <SearchContext.Provider
        value={{
            handleRequestForSeach,
            returnSearchResults
        }}
        >
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider;