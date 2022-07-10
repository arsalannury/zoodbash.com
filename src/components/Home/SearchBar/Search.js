import { Grid, Typography } from "@mui/material";
import {
  Div,
  GridImages,
  Icon,
  Image,
  Input,
  SearchBar,
} from "./styles/SearchStyle";
import SearchMobile from "./SearchMobile";
import { useState, useEffect } from "react";
import { useSearchContext } from "../../../Context/SearchContext";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";

const Search = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    window.innerWidth <= 500 ? setShow(true) : setShow(false);
    window.addEventListener("resize", (e) => {
      e.target.innerWidth <= 500 ? setShow(true) : setShow(false);
    });
  }, []);
  const {
    handleRequestForSeach,
    returnSearchResults,
    searchHandle,
    isLoading,
  } = useSearchContext();

  return (
    <>
      <Grid container sx={{ background: "#cd1c1c", position: "relative" }}>
        <Grid item xs={6} sm={6} md={6} ld={6}>
          {!show ? (
            <>
              <SearchBar>
                <Icon />
                <Input
                  onChange={(event) => {
                    handleRequestForSeach(event);
                  }}
                  type="text"
                  placeholder="دنبال چه محصولی هستید ؟"
                />
              </SearchBar>
            </>
          ) : (
            <SearchMobile />
          )}
        </Grid>
        <GridImages item xs={6} sm={6} md={6} ld={6}>
          <Div>
            <Image src="globe.png" />
            <Image src="carr.png" />
            <Image src="paypal.svg" />
          </Div>
        </GridImages>

        {searchHandle.length ? (
          <Grid
            container
            alignItems={"center"}
            flexdirection={"column"}
            justifyContent={"left"}
            sx={{
              position: "absolute",
              background: "#fff",
              width: "300px",
              minHeight: "200px",
              top: "100px",
              zIndex: "99",
              right: "30px",
              padding: "10px",
              boxShadow: "0 0 5px #555",
            }}
          >
            {isLoading ? (
              <>
                <div
                  style={{ width: "100%", position: "absolute", top: "3px", right:'0' }}
                >
                  <LinearProgress />
                </div>
              </>
            ) : (
              <>
                <Typography sx={{ fontFamily: "unset" }}>
                  نتایج سرچ محصولات
                </Typography>
                {returnSearchResults()}
              </>
            )}
          </Grid>
        ) : null}
      </Grid>
    </>
  );
};

export default Search;
