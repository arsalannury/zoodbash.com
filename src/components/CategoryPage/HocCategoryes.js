import axios from "axios";
import { useState, useEffect } from "react";
import { Grid , Typography } from "@mui/material";
import FilterProducts from "./RootComponents/FilterProducts";
import CategoryLoading from "../Loading/Categoryes/CategoryLoading";
import CardProducts from "./RootComponents/CardProducts";
import styled from "styled-components";
import { EnglishNumberToPersian } from "../ToPersian/EnglishNumberToPersian";


function HocCategoryes(props) {
  const [category, getCategory] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [scoreFilter, setScoreFilter] = useState([]);
  const [oneToTwoFilter, setOneToTwoFilter] = useState(false);
  const [twoToFourFilter, setTwoToFourFilter] = useState(false);
  const [maxScoreFilter, setmaxScoreFilter] = useState(false);
  const [rangeFilter,setRangeFilter] = useState(0);


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
    // setRangeFilter(category.filter(elements => elements.price <= e.target.value));
    if(!oneToTwoFilter && !twoToFourFilter && !maxScoreFilter) {
      setScoreFilter(category.filter(elements => elements.price <= e.target.value))
    }else {
      if(scoreFilter.find(elements => elements.price <= e.target.value)){
        setScoreFilter(scoreFilter.filter(elements => elements.price <= e.target.value))
      }else{
        setScoreFilter([...scoreFilter])
      }
    }
   
  }

  useEffect(() => {
   EnglishNumberToPersian()
  },[])

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
    if (oneToTwoFilter) {
      setScoreFilter(
        category.filter((elements) => elements.rating.rate <= 2.5)
      );
    } else if (twoToFourFilter) {
      setScoreFilter(
        category.filter(
          (elements) => elements.rating.rate <= 4 && elements.rating.rate > 2.5
        )
      );
    } else if (maxScoreFilter) {
      setScoreFilter(category.filter((elements) => elements.rating.rate > 4));
    } else {
      setScoreFilter(category);
    }

    if (oneToTwoFilter && twoToFourFilter) {
      setScoreFilter(category.filter((elements) => elements.rating.rate <= 4));
    } else if (oneToTwoFilter && maxScoreFilter) {
      setScoreFilter(
        category.filter(
          (elements) => elements.rating.rate > 4 || elements.rating.rate < 2.5
        )
      );
    } else if (twoToFourFilter && maxScoreFilter) {
      setScoreFilter(category.filter((elements) => elements.rating.rate > 2.5));
    }
    if (oneToTwoFilter && twoToFourFilter && maxScoreFilter) {
      setScoreFilter(category);
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
              />
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

              {scoreFilter.length === 0 ? (
                <Typography color={'#14213d'} fontFamily={"unset"} fontSize={'.9em'}>
               محصولی برای نمایش وجود ندارد                        
                </Typography>
              ) : (
                scoreFilter.map((product) => (
                  <CardProducts
                  key={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  rating={product.rating}
                />
                )
              ))}
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
}

export default HocCategoryes;

const FilterSec = styled(Grid)`
  position: relative;
`;
