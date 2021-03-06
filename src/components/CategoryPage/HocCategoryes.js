import axios from "axios";
import React, { useState, useEffect } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import FilterProducts from "./RootComponents/FilterProducts";
import CategoryLoading from "../Loading/Categoryes/CategoryLoading";
import CardProducts from "./RootComponents/CardProducts";
import { useCacheContext } from "../../Context/CacheProductContext";
import { EnglishNumberToPersian } from "../ToPersian/EnglishNumberToPersian";

function HocCategoryes(props) {
  const [category, getCategory] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [scoreFilter, setScoreFilter] = useState([]);
  const [oneToTwoFilter, setOneToTwoFilter] = useState(false);
  const [twoToFourFilter, setTwoToFourFilter] = useState(false);
  const [maxScoreFilter, setmaxScoreFilter] = useState(false);
  const [rangeFilter, setRangeFilter] = useState([]);
  const [isPriceFilter, setIsPriceFilter] = useState(false);
  const [helperFilter, setHelperFilter] = useState([]);
  const {
    filterShow,
    positionFilter,
    widthFilter,
    filterHeight,
  } = useCacheContext();

  const handleShowCache = () => {
    if (localStorage.getItem("cache")) {
      // * the "cache" local storage created in CacheProductContext.js
      const getCacheLocalStorage = JSON.parse(localStorage.getItem("cache"));

      return getCacheLocalStorage.map((cacheProduct, index) => (
        <React.Fragment key={index}>
          <Box p={2}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              <img
                src={cacheProduct.image}
                style={{
                  width: "80px",
                  alignSelf: "center",
                  marginBottom: "5px",
                }}
              />
              <Typography sx={{ fontSize: ".7em", textAlign: "left" }}>
                {cacheProduct.title}
              </Typography>
            </Grid>
            <Divider />
          </Box>
        </React.Fragment>
      ));
    } else {
      return (
        <Typography component={"h2"}>???????????? ???????? ?????????? ???????? ??????????</Typography>
      );
    }
  };

  const checkboxOneToTwo = (e) => {
    setOneToTwoFilter(e.target.checked);
  };
  const checkboxTwoToFour = (e) => {
    setTwoToFourFilter(e.target.checked);
  };
  const checkboxMaxScore = (e) => {
    setmaxScoreFilter(e.target.checked);
  };

  const rangeOnInputHandler = (e) => {
    // handle filter products with price range
    // handle in two state . first is when score filter is off
    // and second is when user enable score filter
    setIsPriceFilter(true);
    setHelperFilter(
      category.filter((elements) => elements.price <= e.target.value)
    );
    if (!oneToTwoFilter && !twoToFourFilter && !maxScoreFilter) {
      setScoreFilter(
        category.filter((elements) => elements.price <= e.target.value)
      );
    } else {
      if (scoreFilter.find((elements) => elements.price <= e.target.value)) {
        setScoreFilter(
          rangeFilter.filter((elements) => elements.price <= e.target.value)
        );
      } else {
        setScoreFilter(rangeFilter);
      }
    }
  };

  const clearAllFilter = () => {
    setScoreFilter(category);
    setHelperFilter(category);
    setmaxScoreFilter(false);
    setTwoToFourFilter(false);
    setOneToTwoFilter(false);
  };

  useEffect(() => {
    EnglishNumberToPersian();
    //  handleShowCache()
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(props.apiLink);
      try {
        setScoreFilter(response.data);
        getCategory(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // range filter save for us the last state after we use score filter and we use that when price filter start change
    // this useEffect handle score filter in all situation
    if (oneToTwoFilter) {
      if (!isPriceFilter)
        setScoreFilter(
          category.filter((elements) => elements.rating.rate <= 2.5)
        );
      else
        setScoreFilter(
          scoreFilter.filter((elements) => elements.rating.rate <= 2.5)
        );
      setRangeFilter(
        category.filter((elements) => elements.rating.rate <= 2.5)
      );
    } else if (twoToFourFilter) {
      if (!isPriceFilter)
        setScoreFilter(
          category.filter(
            (elements) =>
              elements.rating.rate <= 4 && elements.rating.rate > 2.5
          )
        );
      else
        setScoreFilter(
          scoreFilter.filter(
            (elements) =>
              elements.rating.rate <= 4 && elements.rating.rate > 2.5
          )
        );
      setRangeFilter(
        category.filter(
          (elements) => elements.rating.rate <= 4 && elements.rating.rate > 2.5
        )
      );
    } else if (maxScoreFilter) {
      if (!isPriceFilter)
        setScoreFilter(category.filter((elements) => elements.rating.rate > 4));
      else
        setScoreFilter(
          scoreFilter.filter((elements) => elements.rating.rate > 4)
        );
      setRangeFilter(category.filter((elements) => elements.rating.rate > 4));
    } else {
      if (!isPriceFilter) setScoreFilter(category);
      else setScoreFilter(helperFilter);
      setRangeFilter(category);
    }

    if (oneToTwoFilter && twoToFourFilter) {
      if (!isPriceFilter)
        setScoreFilter(
          category.filter((elements) => elements.rating.rate <= 4)
        );
      else
        setScoreFilter(
          scoreFilter.filter((elements) => elements.rating.rate <= 4)
        );
      setRangeFilter(category.filter((elements) => elements.rating.rate <= 4));
    } else if (oneToTwoFilter && maxScoreFilter) {
      if (!isPriceFilter)
        setScoreFilter(
          category.filter(
            (elements) => elements.rating.rate > 4 || elements.rating.rate < 2.5
          )
        );
      else
        setScoreFilter(
          scoreFilter.filter(
            (elements) => elements.rating.rate > 4 || elements.rating.rate < 2.5
          )
        );
      setRangeFilter(
        category.filter(
          (elements) => elements.rating.rate > 4 || elements.rating.rate < 2.5
        )
      );
    } else if (twoToFourFilter && maxScoreFilter) {
      if (!isPriceFilter)
        setScoreFilter(
          category.filter((elements) => elements.rating.rate > 2.5)
        );
      else
        setScoreFilter(
          scoreFilter.filter((elements) => elements.rating.rate > 2.5)
        );
      setRangeFilter(category.filter((elements) => elements.rating.rate > 2.5));
    }
    if (oneToTwoFilter && twoToFourFilter && maxScoreFilter) {
      if (!isPriceFilter) setScoreFilter(category);
      else setScoreFilter(helperFilter);
      setRangeFilter(category);
    }
  }, [oneToTwoFilter, twoToFourFilter, maxScoreFilter]);

  return (
    <>
      <Grid container>
        {isLoading ? (
          <CategoryLoading />
        ) : (
          <>
            <Grid
              item
              xs={0}
              sm={0}
              md={3}
              lg={3}
              sx={{ position: "relative" }}
            >
              <FilterProducts
                checkboxOneToTwo={checkboxOneToTwo}
                checkboxTwoToFour={checkboxTwoToFour}
                checkboxMaxScore={checkboxMaxScore}
                oneToTwoFilter={oneToTwoFilter}
                twoToFourFilter={twoToFourFilter}
                maxScoreFilter={maxScoreFilter}
                rangeOnInputHandler={rangeOnInputHandler}
                rangeFilter={rangeFilter}
                clearAllFilter={clearAllFilter}
              />

              <Grid
                sx={{
                  margin: "50px auto",
                  border: "1px solid #eee",
                  padding: "10px",
                  transition: "all .5s ease",
                  transform: "none",
                  position: "none",
                  width: "90%",
                  height: "unset",
                  zIndex:'100',
                  background: "#fff",
                  "@media screen and (max-width:899px)": {
                    transform: filterShow,
                    position: positionFilter,
                    width: widthFilter,
                    height: filterHeight,
                    margin: "0 auto"
                  },
                }}
              >
                <Typography
                  sx={{ fontFamily: "unset", textAlign: "center" }}
                  component={"h3"}
                >
                  ?????????????? ???????? ??????
                </Typography>
                {handleShowCache()}
              </Grid>
            </Grid>

            <Grid
              item
              container
              alignItems={"center"}
              justifyContent={"space-evenly"}
              xs={12}
              sm={12}
              md={9}
              lg={9}
              sx={{ marginBottom: "15px" }}
            >
              {/* when we don't have any products to show in page update with this message */}
              {scoreFilter.length === 0 ? (
                <Typography
                  color={"#14213d"}
                  fontFamily={"unset"}
                  fontSize={".9em"}
                  component={"span"}
                >
                  ???????????? ???????? ?????????? ???????? ??????????
                </Typography>
              ) : (
                scoreFilter.map((product) => (
                  <CardProducts
                    key={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    rating={product.rating}
                    id={product.id}
                    category={product.category}
                  />
                ))
              )}
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
}

export default HocCategoryes;
