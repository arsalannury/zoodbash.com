import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Grid } from "@mui/material";
import React from "react";

function SelersListLoading() {
  return (
    <>
      <Grid>
        {Array(4)
          .fill({})
          .map((item,index) => (
            <React.Fragment key={index}>
              <Skeleton height={30} style={{margin:" 30px 0"}} />
            </React.Fragment>
          ))}
      </Grid>
    </>
  );
}

export default SelersListLoading;
