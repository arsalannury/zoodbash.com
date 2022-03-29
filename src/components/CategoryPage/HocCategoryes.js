import axios from "axios";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import FilterProducts from "./RootComponents/FilterProducts";
import CategoryLoading from "../Loading/Categoryes/CategoryLoading";
import CardProducts from "./RootComponents/CardProducts";
import FilterProductsMobile from "./RootComponents/FilterProductsMobile";
import styled from 'styled-components';

function HocCategoryes(props) {
  const [changeComponent, setChangeComponent] = useState(false);
  const [category, getCategory] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(props.apiLink);
      try {
        getCategory(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    window.innerWidth <= 899 ? setChangeComponent(true) : setChangeComponent(false);
    window.addEventListener("resize", (e) => {
      e.target.innerWidth <= 899
        ? setChangeComponent(true)
        : setChangeComponent(false);
    });
  }, [changeComponent]);

  return (
    <>
      {/* <Backdrop> */}
      <Grid container>
        {isLoading ? (
          <CategoryLoading />
        ) : (
          <>
            {!changeComponent ? (
              <Grid item xs={0} sm={0} md={3} lg={3}>
                <FilterProducts />
              </Grid>
            ) : (

              <FilterSec item xs={12} sm={12}>
                <FilterProductsMobile />
              </FilterSec>

            )}

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
              {category.map((product) => (
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
      {/* </Backdrop> */}
    </>
  );
}

export default HocCategoryes;




const FilterSec = styled(Grid)`
position : relative;
`
const Backdrop = styled.div`
z-index: 1057;
width : 100%;
height : 100%;
// overflow-x : hidden;
// overflow-y : auto;
outline : 0;
background : rgba(0,0,0,0.70);
`