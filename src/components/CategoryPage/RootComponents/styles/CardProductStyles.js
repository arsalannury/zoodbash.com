import styled from "styled-components";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const Card = styled(Grid)`
  width: 300px;
  padding: 10px;
  min-height: 450px;
  z-index: 1;
  border-radius: 5px;
  position: relative;
  background: #fff;
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0 0 2px #eee;
    transform: translateY(-10px);
    &::before {
      clip-path: polygon(0 46%, 100% 95%, 100% 100%, 0% 100%);
    }
    &::after{
        transform: rotate(45deg);
    }
  }
  &::active {
    &::before {
      clip-path: polygon(0 46%, 100% 95%, 100% 100%, 0% 100%);
    }
    &::after{
        transform: rotate(45deg);
    }
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 10px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    transition: all 0.5s ease;
    background: linear-gradient(
      to right,
      rgb(243, 244, 246),
      rgb(209, 213, 219)
    );
    clip-path: polygon(0 75%, 100% 95%, 100% 100%, 0% 100%);
  }
  &::after{
    content: 'جدید';
    font-size: .7em;
    position: absolute;
    transition: all 0.5s ease;
    top:0;
    bottom:0;
    left:0;
    right:0;
    width:30px;
    height:30px;
    background: #ef233c;
    -webkit-clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 3px;
   }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  position: relative;
  &::before{
   content: '';
   position: absolute;
   top:0;
   bottom:0;
   left:0;
   right:0;
   width:30px;
   height:30px;
   background: red;
  }
`;
export const Title = styled.p`
  font-size: 0.8em;
  color: #555;
  margin: 20px 0;
`;
export const Div = styled(Grid)`
  margin-top: 10px;
`;
export const Footer = styled(Grid)``;
export const Btn = styled(Button)`
  font-family: unset;
  font-size: 0.7em;
  width: 70%;
  position:relative;
`;
export const Information = styled(Grid)``;

export const LinkImg = styled(Link)``;
export const Box = styled(Grid)``;

export const ImgPrice = styled.img`
  width: 40px;
  margin-right: 3px;
  filter: opacity(0.8);
`;
