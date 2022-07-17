import { Button, Backdrop, Divider, Typography, Grid } from "@mui/material";
import { useState } from "react";
import {
  BtnSearchIcon,
  Div,
  Icon,
  Input,
  SearchBar,
  SearchIconMobile,
} from "./styles/SearchMobileStyle";
import { useSearchContext } from "../../../Context/SearchContext";
import LinearProgress from "@mui/material/LinearProgress";

const SearchMobile = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (e) => {
    if (e.target.nodeName === "INPUT") return;
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const {
    handleRequestForSeach,
    returnSearchResults,
    handleScreenSizeSearch,
    isInSmallScreen,
    searchHandle,
    isLoading,
  } = useSearchContext();

  return (
    <>
      <Div>
        <BtnSearchIcon variant="standard" onClick={handleToggle}>
          <SearchIconMobile />
        </BtnSearchIcon>
      </Div>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
        open={open}
        onClick={handleClose}
      >
        <SearchBar>
          <Icon />
          <Input
            onChange={(event) => {
              handleRequestForSeach(event);
              handleScreenSizeSearch("searchMobile");
            }}
            type="text"
            placeholder="دنبال چه محصولی هستید ؟"
          />
        </SearchBar>

        {isInSmallScreen && searchHandle.length ? (
          <Grid
            container
            alignItems={"center"}
            flexdirection={"column"}
            justifyContent={"left"}
            sx={{
              background: "#fff",
              maxHeight: "600px",
              borderRadius: "3px",
              zIndex: "199",
              padding: "10px",
              overflowY: "auto",
              boxShadow: "0 0 5px #eee",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#f1f1f1",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#aaa",
              },
            }}
          >
            {isLoading ? (
              <>
                <div
                  style={{
                    width: "100%",
                    position: "absolute",
                    top: "3px",
                    right: "0",
                  }}
                >
                  <LinearProgress />
                </div>
              </>
            ) : (
              <>
                <Typography
                  sx={{
                    fontFamily: "unset",
                    textAlign: "center",
                    margin: "auto",
                    fontSize: ".9em",
                    color: "#000"
                  }}
                >
                  نتایج سرچ محصولات
                </Typography>
                <Divider sx={{ width: "100%", margin: "15px 0" }} />
                {returnSearchResults()}
              </>
            )}
          </Grid>
        ) : null}
      </Backdrop>
    </>
  );
};

export default SearchMobile;
