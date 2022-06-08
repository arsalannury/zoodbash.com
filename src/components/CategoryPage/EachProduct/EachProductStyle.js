import styled from "styled-components";
import { Grid } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

export const Wrapper = styled(Grid)`
  margin: 40px 0;
  padding: 10px;
`;
export const ImageWrapper = styled(Grid)``;
export const DetailsWrapper = styled(Grid)`
  align-self: flex-start;
`;
export const ImageProduct = styled.img`
  width: 290px;
`;
export const Actions = styled(Grid)`
  width: 15%;
  svg {
    cursor: pointer;
  }
  @media screen and (max-width:361px){
    width:100%;
    flex-direction:row;
    margin-bottom:30px;
  }
`;
export const Title = styled.p`
  border-bottom: 1px solid #eee;
  font-size: 1.1em;
  margin: 0 0 0 16px;
  text-align: left;
`;
export const Description = styled.p`
  text-align: left;
  margin: 20px 0 20px 15px;
  color: #aaa;
`;
export const Price = styled.span`
  margin-left: 5px;
`;
export const TopImageSection = styled(Grid)`
@media screen and (max-width:361px){
  justify-content:center;
}
`;
export const AnotherImages = styled(Grid)`
  margin: 90px 0 0 0;
`;
export const Boxx = styled(Grid)`
  box-shadow: 0 0 5px #ddd;
  border-radius: 10px;
  padding: 15px;
  cursor: pointer;
`;
export const AnotherImage = styled.img`
  width: 130px;
`;
export const BoxT = styled(Grid)`
  margin: 40px 0;
`;

export const PriceWrapper = styled(Grid)`
  margin: 40px 0;
`;
export const ImgPrice = styled.img``;

export const IconsBox = styled(Grid)`
  margin-top: 30px;
`;
export const Icon = styled.img`
  width: 70px;
`;
export const ShareIcon = styled(ShareOutlinedIcon)`
  transition: all 0.4s ease;
  &:hover {
    color: #aaa;
  }
  &:active {
    color: #aaa;
  }
`;
export const FavoriteIcon = styled(FavoriteBorderOutlinedIcon)`
  transition: all 0.4s ease;
  &:hover {
    color: red;
  }
  &:active {
    color: red;
  }
`;
export const Bookmark = styled(BookmarkBorderOutlinedIcon)`
  transition: all 0.4s ease;
  &:hover {
    color: #38b000;
  }
  &:active {
    color: #38b000;
  }
`;

export const ActionsSec = styled(Grid)``;
