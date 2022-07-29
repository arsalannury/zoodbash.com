import React, { createContext, useContext, useState } from "react";
import { Divider, Grid } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchContext = createContext({});

export const useSearchContext = () => {
  return useContext(SearchContext);
};

const SearchContextProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);
  const [searchHandle, setSearchHandle] = useState([]);
  const [isInSmallScreen, setSmallScrren] = useState(false);
  const [isInLargeScreen, setLageScrren] = useState(false);
  const [componentName, setcomponentName] = useState(null);

  const changeSearch = () => {
    return setSearchHandle([]);
  };

  const handleScreenSizeSearch = (componentName) => {
    if (componentName === "search") {
      setLageScrren(true);
      setSmallScrren(false);
    } else if (componentName === "searchMobile") {
      setSmallScrren(true);
      setLageScrren(false);
    }
  };
  const handleRequestForSeach = async (event) => {
    if (event.target.value.trim().length === 0 || !event.target.value) {
      setSearchHandle([]);
      return;
    }

    setLoading(true);
    try {
      const searchResponse = await axios.get(
        "https://fakestoreapi.com/products"
      );
      const isFetch = searchResponse.data;
      if (event.target.value.trim().length === 0 || !event.target.value) return;
      setSearchHandle(() => {
        return isFetch.filter((item) => {
          return item.title.toLowerCase().includes(event.target.value);
        });
      });
      setLoading(false);
    } catch (error) {
      setLoading(true);
    }
  };

  function returnSearchResults() {
    return searchHandle.map((product, index) => (
      <React.Fragment key={product.id}>
        <Grid
          container
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          flexDirection={"column"}
          my={3}
        >
          <Grid>
            <Link to={`/${product.category}/${product.id}`}>
              <img src={product.image} alt="" style={{ width: "80px" }} />
            </Link>
          </Grid>
          <Grid>
            <p style={{ fontSize: ".8em", color: "#666" }}>{product.title}</p>
          </Grid>
        </Grid>
        <Divider sx={{ width: "100%", margin: "15px 0" }} />
      </React.Fragment>
    ));
  }

  return (
    <SearchContext.Provider
      value={{
        handleRequestForSeach,
        returnSearchResults,
        handleScreenSizeSearch,
        searchHandle,
        isInSmallScreen,
        isInLargeScreen,
        isLoading,
        changeSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
