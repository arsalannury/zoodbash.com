import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Grid } from "@mui/material";

function EeachProductLoading() {
  return (
    <>
      <Grid container alignItems={"start"} flexDirection={"row"}>
      <Skeleton style={{marginRight:'20px'}} width={300} height={500} />

      <Grid sx={{width:'50%'}}>
      <Skeleton  height={20} />
      <Skeleton  height={20} />
      <Skeleton  height={20} />
      <Skeleton  height={20} />
      </Grid>
      
      </Grid>
    </>
  );
}

export default EeachProductLoading;
