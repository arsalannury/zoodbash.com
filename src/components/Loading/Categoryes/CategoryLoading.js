import Skeleton from "react-loading-skeleton";
import { Grid } from "@mui/material";

function CategoryLoading() {
  return Array(6)
    .fill({})
    .map(() => {
      return (
        <>
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
              circle={true}
              width={150}
              height={150}
              style={{ margin: "55px 0" }}
            />
            <Skeleton count={3} width={300} height={10} />
          </Grid>
        </>
      );
    });
}

export default CategoryLoading;
