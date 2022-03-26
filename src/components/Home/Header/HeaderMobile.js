import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

function HeaderMobile() {
  const [state, setState] = useState({
    right: false,
  });
  const [displayCategory, setDisplayCategory] = useState("none");
  const [isDisplayHandle, setDisplayHandle] = useState(false);

  const handleOpenMenu = () => {
    setDisplayCategory(displayCategory === "none" ? "flex" : "none");
    setDisplayHandle(isDisplayHandle === false ? true : false);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem
          style={{ fontSize: ".9em", padding: "15px 4px " }}
          onClick={handleOpenMenu}
        >
          <Span>
            {!isDisplayHandle ? <ArrowLeftIcon /> : <ArrowDropDownIcon />}
            دسته بندی
          </Span>
          <CatalogList style={{ display: displayCategory }}>
            <CatalogItem>
              {" "}
              <MenuLink to={"/electronics"}> لوازم الترونیک </MenuLink>
            </CatalogItem>
            <CatalogItem>
              {" "}
              <MenuLink to={"/jeweleryes"}> جواهرات</MenuLink>
            </CatalogItem>
            <CatalogItem>
              {" "}
              <MenuLink to={"/mensClothing"}> لباس مردانه</MenuLink>
            </CatalogItem>
            <CatalogItem>
              {" "}
              <MenuLink to={"/womenClothing"}> لباس زنانه</MenuLink>
            </CatalogItem>
          </CatalogList>
        </ListItem>
        <ListItem>
          <MenuLink to={""}>درباره ما</MenuLink>
        </ListItem>
        <ListItem>
          <MenuLink to={""}>مناقصه</MenuLink>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuBtn onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </MenuBtn>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
}

export default HeaderMobile;

const MenuLink = styled(Link)`
  color: inherit;
  font-size: 0.9em;
  text-decoration: inherit;
  font-family: font-sans;
`;

const MenuBtn = styled(Button)`
  color: #444 !important;
`;

const List = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  list-style-type: none;
  font-size: 0.9em;
  margin-top: 30px;
`;
const ListItem = styled.li`
  cursor: pointer;
  padding: 15px;
  transition: all 0.5s ease;
  font-family: font-sans;
`;

const CatalogList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all 0.5s ease;
  justify-content: space-around;
  height: 300px;
  z-index: 1;
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

const Span = styled.span`
  font-size: inherit;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
