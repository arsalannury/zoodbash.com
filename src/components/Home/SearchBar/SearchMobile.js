import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Backdrop } from "@mui/material";
import { useState } from "react";

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

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding: 30px;
`;

const Input = styled.input`
  padding: 12px 30px;
  border: 1px solid #ccc;
  border-radius: 20px;
  background: #eee;
  font-family: inherit;
  font-size: 0.8em;
  transition: all 0.5s ease;
  width: 200px;
  &::placeholder {
    color: #444;
    font-family: inherit;
    font-size: 0.8em;
  }
  &:focus {
    border: 1px solid #bbb;
    outline: none;
    width: 300px;
  }
  @media screen and (max-width: 480px) {
    width: 100px;
  }
`;

const Icon = styled(SearchIcon)`
  position: absolute;
  margin: 5px;
  color: #777;
  cursor: pointer;
`;
const SearchIconMobile = styled(SearchIcon)`
  cursor: pointer;
  color: #fff;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding: 30px;
  background: #cd1c1c;
`;

const BtnSearchIcon = styled(Button)`
  background: #003049;
  border-radius: 10px;
  &:hover {
    background: #003049;
  }
`;
