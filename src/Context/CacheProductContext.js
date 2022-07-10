import { useContext, createContext, useState } from "react";

const CacheContext = createContext({
  cacheProduct: [{}],
});

export const useCacheContext = () => {
  return useContext(CacheContext);
};

const CacheProductContextProvider = ({ children }) => {
  const [cacheProduct, setCacheProduct] = useState(() => {
    if (localStorage.getItem("cache")) {
      return JSON.parse(localStorage.getItem("cache"));
    } else {
      return [];
    }
  });
  const [filterShow, setFilterShow] = useState("translateX(300%)");
  const [overflowShow, setOverflowShow] = useState(false);
  const [filterHeight, setFilterHeight] = useState("unset");
  const [positionFilter, setPositionFilter] = useState("absolute");
  const [widthFilter, setWidthFilter] = useState("90%");

  const [isCacheOpen,setIsCacheOpen] = useState(false);
  const [isFilterOpen,setIsFilter] = useState(false);


  // const handleCacheOpen = () => {
  //   setIsCacheOpen(!isCacheOpen);
  // }

  const handleFilterOpen = () => {
    setIsFilter(!isFilterOpen);
  }

  const handleStateShowCache = () => {
    if(isFilterOpen) return;
    setWidthFilter(widthFilter === "90%" ? "100vw" : "90%");
    setFilterShow(
      filterShow === "translateX(300%)" ? "none" : "translateX(300%)"
    );
    setFilterHeight(filterHeight === "unset" ? "100vh" : "unset");
    setOverflowShow(overflowShow === false ? true : false);
    if (!overflowShow) document.body.classList.add("body_when_filter_show");
    else document.body.classList.remove("body_when_filter_show");

    setIsCacheOpen(!isCacheOpen);

  };

  const setChacheState = (title, rating, image) => {
    const shallowCopy = [...cacheProduct];

    for (let exist of shallowCopy) {
      if (exist.title === title) return;
    }

    shallowCopy.push({ title, rating, image });

    if (shallowCopy.length >= 6) {
      shallowCopy.shift();
    }

    setCacheProduct(shallowCopy);
    localStorage.setItem("cache", JSON.stringify(shallowCopy));
  };

  return (
    <>
      <CacheContext.Provider
        value={{
          setChacheState,
          cacheProduct,
          handleStateShowCache,
          filterShow,
          overflowShow,
          positionFilter,
          widthFilter,
          filterHeight,
          isCacheOpen,
          handleFilterOpen
        }}
      >
        {children}
      </CacheContext.Provider>
    </>
  );
};

export default CacheProductContextProvider;
