import styled from "styled-components";
import { Grid } from "@mui/material";

export const Div = styled(Grid)`
  border-radius: 5px;
  box-shadow: 0 1px 2px #333;
  width:90%;
  cursor:pointer;
`;
export const SelerBox = styled(Grid)`
position: relative;
transition: all .4s ease;
&:hover {
  .detail {
    opacity: 1;
  }
}
`;

export const Title = styled.p`
color:#333;
font-size : .6em;
margin-bottom : 8px;
`;
export const Shop = styled.img``;
export const Delivery = styled.p`
font-size : .7em;
margin-top : 8px;
opacity : .6;
color: #cd1c1c;
`
export const DetailSeler = styled(Grid)`
width: 360px;
background: #fff;
border-radius: 3px;
z-index: 1;
top:10px;
left: 30px;
position: absolute;
opacity: 0;
transition: all .8s ease;
padding: 15px;
box-shadow: 0 2px 3px #999;
`
export const More = styled(Grid)``;
export const Percents = styled(Grid)`
padding: 20px;
text-align:center;
`
export const Span = styled.span`
font-size : .9em;
color : #000;
`


