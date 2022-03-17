import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Grid } from "@mui/material";
import CardWomenClothing from "./CardWomenClothing";

const WomenClothing = () => {
  const [products, getProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://fakestoreapi.com/products/category/women's clothing"
      );
      try {
        getProducts(response.data);
      } catch (error) {
        getProducts([]);
        throw new Error("your request is faild");
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Wrapper
        container
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <TopColumn
          container
          alignItems={"center"}
          justifyContent={"space-around"}
          rowGap={5}
        >
          {products.map((prod, index) => (
            <CardWomenClothing
              key={prod.id}
              image={prod.image}
              rate={prod.rating.rate}
              price={prod.price}
            />
          ))}
        </TopColumn>
      </Wrapper>
    </>
  );
};
export default WomenClothing;

const Wrapper = styled(Grid)`
  background-image: url("back.png");
  height: 700px;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  @media screen and (max-width : 599px) {
    height : 2000px
  }
  @media screen and (min-width : 600px) and (max-width : 899px) {
    height : 1000px
  }
`;

const TopColumn = styled(Grid)`
  width: 100%;
`;
const BottomColumn = styled(Grid)`
  width: 100%;
`;
