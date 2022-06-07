import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Grid } from "@mui/material";

function EeachProductLoading() {
  return (
    <>
      <Grid container alignItems={"center"}>

        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} container alignItems={"center"} flexDirection={"column"}>

          <Skeleton width={320} height={450} borderRadius={5} />

          <Grid container justifyContent={"space-evenly"} sx={{marginTop:"20px"}}>
            <Skeleton width={100} height={100} borderRadius={5} />
            <Skeleton width={100} height={100} borderRadius={5} />
            <Skeleton width={100} height={100} borderRadius={5} />
          </Grid>

        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} sx={{padding:"40px"}}>
        <Skeleton height={25} style={{margin:"20px 0"}} />
        <Skeleton height={25} style={{margin:"20px 0"}} />
        <Skeleton height={25} style={{margin:"20px 0"}} />
        </Grid>

      </Grid>
    </>
  );
}

export default EeachProductLoading;
