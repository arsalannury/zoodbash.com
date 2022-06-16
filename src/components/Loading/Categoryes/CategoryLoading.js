import Skeleton from "react-loading-skeleton";
import { Grid } from "@mui/material";
import React from 'react';

function CategoryLoading() {
  return Array(6)
    .fill({})
    .map((n,index) => {
      return (
        <React.Fragment key={index}>
          <Grid
            sx={{ margin: "0 0 15px 0" }}
            container
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"space-around"}
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
          >
            <Skeleton
              count={1}
              // circle={true}
              width={250}
              height={250}
              style={{ margin: "55px 0" }}
            />
            <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
            <Skeleton count={1} width={250} height={20} style={{margin: '10px 0'}} />
            <Skeleton count={1} width={250} height={20} style={{margin: '10px 0'}} />
            <Skeleton count={1} width={130} height={20} style={{margin: '15px 0'}} />
            </div>
          </Grid>
        </React.Fragment>
      );
    });
}

export default CategoryLoading;
