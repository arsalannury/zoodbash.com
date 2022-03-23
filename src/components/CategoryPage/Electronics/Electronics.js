import axios from "axios";
import { useState, useEffect } from "react";
import CardElectronics from "./CardElectronics";
import { Grid } from "@mui/material";
import Filter from "./Filter";

function Electronics() {
  const [category, getCategory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://fakestoreapi.com/products/category/electronics"
      );
      try {
        getCategory(response.data);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <>
      <Grid container>
        <Grid item xs={0} sm={0} md={3} lg={3}>
          <Filter />
        </Grid>


        <Grid item container alignItems={'center'} justifyContent={'space-evenly'} xs={12} sm={12} md={9} lg={9} sx={{ marginBottom: '15px'}}>
          {category.map((product) => (
            <CardElectronics
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </Grid>


      </Grid>
    </>
  );
}

export default Electronics;
