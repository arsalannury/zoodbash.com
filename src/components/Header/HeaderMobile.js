import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import HeaderTheme from "../../Theme/HeaderTheme";
import styled from 'styled-components';

function HeaderMobile() {
  const [state, setState] = React.useState({
    left: false,
  });

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
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <HeaderTheme>
        <List>
          <ListItem button>
            <ListItemText><MenuLink to={''}>مناقصه</MenuLink></ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText><MenuLink to={''}>دسته بندی</MenuLink></ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText><MenuLink to={''}>درباره ما</MenuLink></ListItemText>
          </ListItem>
        </List>
      </HeaderTheme>
      <Divider />
    </Box>
  );

  return (
    <>
      {["left"].map((anchor) => (
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
color : inherit;
font-size : inherit;
text-decoration : inherit;
`

const MenuBtn = styled(Button)`
color : #444 !important;
`