import styled from "styled-components";
import { Grid } from "@mui/material";

export const Wrapper = styled(Grid)`
  margin-top: 40px;
  padding: 10px;
`;
export const ImageWrapper = styled(Grid)``;
export const DetailsWrapper = styled(Grid)`
  //   height: 300px;
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
export const TopImageSection = styled(Grid)``;
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
