import { useEffect } from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { useTimer } from "react-timer-hook";
import {EnglishNumberToPersian} from '../../ToPersian/EnglishNumberToPersian';

function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, hours, days, pause } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  const show = (localTime) => {
    return localTime.toString().toPersian();
  };


  useEffect(() => {
   EnglishNumberToPersian();
  },[])

  return (
    <>
      <GridMain
        container
        alignItems={"center"}
        justifyContent={"space-between"}
        rowGap={"40px"}
      >
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <ImageBox
            container
            alignItems={"center"}
            justifyContent={"flex-start"}
          >
            <Image src="discount.png" />
          </ImageBox>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <TimerBox
            container
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Timer>
              {show(days)}:{show(hours)}:{show(minutes)}:{show(seconds)}
            </Timer>
            <TimerText>تا شروع مناقصه</TimerText>
          </TimerBox>
        </Grid>
      </GridMain>
    </>
  );
}

const BannerTime = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 6000);
  return (
    <>
      <MyTimer expiryTimestamp={time} />
    </>
  );
};

export default BannerTime;

const TimerBox = styled(Grid)``;
const ImageBox = styled(Grid)`
  background: #003049;
  border-radius: 10px;
`;
const Image = styled.img`
  width: 50%;
  @media screen and (max-width: 600px) {
    width: 75%;
  }
`;
const GridMain = styled(Grid)`
  padding: 50px;
  margin-top: 50px;
  background: rgba(0,0,0,0.02);
  @media screen and (max-width: 600px) {
    padding: 20px;
  }
`;
const Timer = styled(Grid)`
  color: #cd1c1c;
  font-size: 3.5em;
  font-weight: bold;
  @media screen and (max-width: 599px) {
    font-size: 1.5em;
  }
`;
const TimerText = styled(Grid)``;
