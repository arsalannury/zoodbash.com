import { Grid } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HeaderMobile from "./HeaderMobile";
import { useState, useEffect } from "react";

const Header = () => {
  const [styles, setStyles] = useState(false);
  const [positionHeader, setPositionHeader] = useState("unset");
  const [shadowHeader, setShadowHeader] = useState("none");

  const scrollChanges = () => {
    window.scrollY > 5
      ? setPositionHeader("sticky")
      : setPositionHeader("unset");
    window.scrollY > 5
      ? setShadowHeader("0 -4px 15px #aaa")
      : setShadowHeader("none");
  };

  useEffect(() => {
    window.innerWidth <= 600 ? setStyles(true) : setStyles(false);
    window.addEventListener("resize", (e) => {
      e.target.innerWidth <= 600 ? setStyles(true) : setStyles(false);
    });
  });

  useEffect(() => {
    window.addEventListener("scroll", scrollChanges);
    return () => {
      window.removeEventListener("scroll", scrollChanges);
    };
  }, []);

  return (
    <>
      <Grid
        container
        sx={{
          boxShadow: shadowHeader,
          position: positionHeader,
          transition: "all .4s ease",
          background: "#fff",
          zIndex: 100,
          top: "0",
        }}
      >
        <Grid item xs={6} sm={6} md={6}>
          <Link to={"/"}>
            <Image src="zood.png" />
          </Link>
        </Grid>
        <Grid item xs={6} sm={6} md={6} sx={{ textAlign: "end" }}>
          {!styles ? (
            <>
              <List>
                <ListItem style={{ position: "relative", fontSize: ".9em" }}>
                  دسته بندی
                  <CatalogList>
                    <CatalogItem>
                      {" "}
                      <Link to={"/electronics"}> لوازم الترونیک </Link>
                    </CatalogItem>
                    <CatalogItem>
                      {" "}
                      <Link to={"/jewelery"}> جواهرات</Link>
                    </CatalogItem>
                    <CatalogItem>
                      {" "}
                      <Link to={"/men's clothing"}> لباس مردانه</Link>
                    </CatalogItem>
                    <CatalogItem>
                      {" "}
                      <Link to={"/women's clothing"}> لباس زنانه</Link>
                    </CatalogItem>
                  </CatalogList>
                </ListItem>
                <ListItem>
                  <Link to={""}>درباره ما</Link>
                </ListItem>
                <ListItem>
                  <Link to={""}>مناقصه</Link>
                </ListItem>
              </List>
            </>
          ) : (
            <HeaderMobile />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Header;

const Image = styled.img`
  width: 180px;
  height: 130px;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style-type: none;
  font-size: 0.9em;
  margin-top: 30px;
`;
const ListItem = styled.li`
  cursor: pointer;
  padding: 15px;
  transition: all 750ms ease;
  &:hover {
    color: #cd1c1c;
    ul {
      display: flex;
    }
  }
  a {
    transition: all 750ms ease;
    color: #000;
    font-size: 0.9em;
    text-decoration: none;
    &:hover {
      color: #cd1c1c;
    }
  }
`;

const CatalogList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 300px;
  width: 190px;
  position: absolute;
  top: 40px;
  box-shadow: 0 4px 5px #cdcdcd;
  border-radius: 5px;
  display: none;
  z-index: 100;
  background: #fff;
  li {
    color: #000;
  }
`;
const CatalogItem = styled.li`
  list-style-type: none;
  padding: 10px;
  font-size: 0.9em;
  width: 100%;
  text-align: center;
  a {
    text-decoration: none;
    color: #000;
    transition: all 750ms ease;

    &:hover {
      color: #cd1c1c;
    }
  }
`;
