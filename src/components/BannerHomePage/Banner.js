import { Grid } from "@mui/material";
import styled from "styled-components";

function Banner() {
  return (
    <>
      <Container container justifyContent={"space-between"}>
        <Grid item xs={12} sm={12} md={6} lg={5}>
          <TextBox
            container
            flexDirection={"column"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Title>
              مناقصه های <BoldText>زود باش</BoldText> رو از دست ندیا
            </Title>
            <LineOne>هر هفته بهترین تخفیفارو میگیری</LineOne>
            <LineTwo>هر روز میتونی کلی لوازم خوب پیدا کنی</LineTwo>
          </TextBox>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={7}>
          <BannerBox container justifyContent={"center"} alignItems={"center"}>
            <Image src="shoppingbox.png" />
          </BannerBox>
        </Grid>
      </Container>
    </>
  );
}

export default Banner;

const Container = styled(Grid)`
  background: rgba(0,0,0,0.02);
  margin-top: 150px;
`;

const TextBox = styled(Grid)`
  height: 100%;
`;
const BannerBox = styled(Grid)`
  background: #003049;
  padding: 30px;
  margin: 30px;
  border-radius: 10px;
  width: unset !important;
`;
const Image = styled.img`
  width: 30%;
  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

const Title = styled.h1`
  align-self: flex-start;
  margin-right: 10px;
  font-size: 1.5em;
  color: #444;
  @media screen and (max-width: 900px) {
    align-self: center;
    padding: 10px;
    font-size: 0.9em;
    margin: 0;
  }
`;
const LineOne = styled.p`
  color: #444;
  @media screen and (max-width: 900px) {
    padding: 10px;
    font-size: 0.8em;
  }
`;
const LineTwo = styled.p`
  color: #444;
  align-self: end;
  @media screen and (max-width: 900px) {
    padding: 10px;
    font-size: 0.8em;
    align-self: center;
  }
`;
const BoldText = styled.span`
  color: #cd1c1c;
  font-size: 1.5em;
`;
