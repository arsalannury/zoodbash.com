import axios from "axios";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import FilterProducts from "./RootComponents/FilterProducts";
import CategoryLoading from "../Loading/Categoryes/CategoryLoading";
import CardProducts from "./RootComponents/CardProducts";
import FilterProductsMobile from "./RootComponents/FilterProductsMobile";
import styled from "styled-components";

function HocCategoryes(props) {
  const [changeComponent, setChangeComponent] = useState(false);
  const [category, getCategory] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [scoreFilter, setScoreFilter] = useState([]);

  const [oneToTwoFilter, setOneToTwoFilter] = useState(false);
  const [twoToFourFilter, setTwoToFourFilter] = useState(false);
  const [maxScoreFilter, setmaxScoreFilter] = useState(false);

  const checkboxOneToTwo = (e) => {
    setOneToTwoFilter(e.target.checked);
  };
  const checkboxTwoToFour = (e) => {
    setTwoToFourFilter(e.target.checked);
  };
  const checkboxMaxScore = (e) => {
    setmaxScoreFilter(e.target.checked);
  };

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
    window.innerWidth <= 899
      ? setChangeComponent(true)
      : setChangeComponent(false);
    window.addEventListener("resize", (e) => {
      e.target.innerWidth <= 899
        ? setChangeComponent(true)
        : setChangeComponent(false);
    });
  }, [changeComponent]);

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
            {/* {!changeComponent ? ( */}
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
              />
            </Grid>
            {/* ) : (

              <FilterSec item xs={12} sm={12}>
                <FilterProductsMobile />
              </FilterSec>

            )} */}

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
              {scoreFilter.map((product) => (
                <CardProducts
                  key={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  rating={product.rating}
                />
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
