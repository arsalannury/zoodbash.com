import styled from "styled-components";
import { Button, Backdrop } from "@mui/material";
import { useState } from "react";
import {BtnSearchIcon,Div,Icon,Input,SearchBar,SearchIconMobile} from './styles/SearchMobileStyle';

const SearchMobile = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (e) => {
    if (e.target.nodeName === "INPUT") return;
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Div>
        <BtnSearchIcon variant="standard" onClick={handleToggle}>
          <SearchIconMobile />
        </BtnSearchIcon>
      </Div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <SearchBar>
          <Icon />
          <Input type="text" placeholder="دنبال چه محصولی هستید ؟" />
        </SearchBar>
      </Backdrop>
    </>
  );
};

export default SearchMobile;

