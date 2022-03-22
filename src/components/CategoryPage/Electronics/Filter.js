import styled from "styled-components";
import { Grid } from "@mui/material";

function Filter() {
  return (
    <>
      <Wrapper container flexDirection={"column"} alignItems={"center"}>
        <PriceSection>
          <PriceTitle>فیلتر بر اساس قیمت</PriceTitle>
          <RangeContainer
            container
            alignItems={"center"}
            justifyContent={"space-evenly"}
            flexDirection={"column"}
          >
            <Range type="range" max={"600"} defaultvalue="0" />
            <RangeValueContainer
              container
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <From>ارزانترین</From>
              <To>گرانترین</To>
            </RangeValueContainer>
          </RangeContainer>
        </PriceSection>

        <RateSection></RateSection>
      </Wrapper>
    </>
  );
}

export default Filter;

const Wrapper = styled(Grid)`
  border-left: 1px solid #ddd;
  width: 100%;
  height: 100%;
`;
const PriceSection = styled(Grid)`
  width: 100%;
`;
const PriceTitle = styled.p`
  text-align: center;
  font-size: 0.8em;
  background: #14213d;
  padding: 10px;
  color: #fff;
`;
const Range = styled.input`
  appearance: none;
  background: #d00000;
  border-radius: 15px;
  height: 3px;
  width: 90%;
  cursor: pointer;
  &::-webkit-slider-thumb {
    appearance: none;
    background: #14213d;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    cursor: pointer;
  }
`;
const RangeContainer = styled(Grid)`
  height: 70px;
  margin-top: 15px;
`;
const RangeValueContainer = styled(Grid)`
  width: 90%;
`;
const From = styled.span`
  font-size: 0.6em;
  color: #888;
`;
const To = styled(From)``;

const RateSection = styled(Grid)`
  width: 100%;
`;
