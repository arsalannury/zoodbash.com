import styled from "styled-components";
import { Button, Grid } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FilterListIcon from '@mui/icons-material/FilterList';

const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: "#14213d",
          fontFamily : 'inherit' , 
          fontSize : '1em'
        },
      },
    },
  },
});

String.prototype.toPersian = function () {
  let num = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"];
  return this.replace(/[0-9]/g, function (number) {
    return num[+number];
  });
};


function FilterProductsMobile() {
  const [rangeValue, setRangeValue] = useState(0);
  const [filterShow,setFilterShow] = useState('none')
  const rangeHandler = (e) => {
    setRangeValue(e.target.value);
  };
  const FilterShowHandler = () => {
      setFilterShow(filterShow === 'none' ? 'flex' : 'none')
  }
  return (
    <>
      <Button onClick={FilterShowHandler}>
          <FilterListIcon />
      </Button>
      <Wrapper container flexDirection={"column"} alignItems={"center"} style={{display : filterShow}}>
        <PriceSection>
          <PriceTitle>فیلتر بر اساس قیمت</PriceTitle>
          <RangeContainer
            container
            alignItems={"center"}
            justifyContent={"space-evenly"}
            flexDirection={"column"}
          >
            <ThemeProvider theme={theme}>
              <Tooltip title={`${rangeValue.toString().toPersian()} هزار تومان`}>
                <Range
                  type="range"
                  max={"600"}
                  defaultvalue="0"
                  onChange={rangeHandler}
                />
              </Tooltip>
            </ThemeProvider>
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

        <RateSection>
          <RateTitle>فیلتر بر اساس امتیاز</RateTitle>
          <Rates
            container
            alignItems={"center"}
            justifyContent={"space-around"}
            flexDirection={"column"}
          >
            <FirstStateRates
              container
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Flabel htmlFor={"check1"}>امتیاز دو و کمتر</Flabel>
              <FcheckBox type={"checkbox"} id="check1" />
            </FirstStateRates>
            <SecondStateRates
              container
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Slabel htmlFor={"check2"}>امتیاز دو تا چهار</Slabel>
              <ScheckBox type={"checkbox"} id="check2" />
            </SecondStateRates>
            <ThirdStateRates
              container
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Thlabel htmlFor={"check3"}>بیشترین امتیاز</Thlabel>
              <ThcheckBox type={"checkbox"} id="check3" />
            </ThirdStateRates>
          </Rates>
        </RateSection>
        <ClearFilters>حذف تمام فیلتر ها</ClearFilters>
      </Wrapper>
    </>
  );
}

export default FilterProductsMobile;

const Wrapper = styled(Grid)`
  border-left: 1px solid #ddd;
  width: 100%;
  height: 100%;
  position : absolute;
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
const RateTitle = styled(PriceTitle)`
  margin-top: 15px;
`;
const Rates = styled(Grid)`
  padding: 10px;
  margin-top: 15px;
`;

const FirstStateRates = styled(Grid)`
padding : 8px;
border-bottom: 1px solid #eee;
`;
const Flabel = styled.label`
  cursor: pointer;
  font-size: 0.8em;
  color : #555;
`;
const Slabel = styled(Flabel)``;
const Thlabel = styled(Flabel)``;
const FcheckBox = styled.input`
  cursor: pointer;
  appearance: none;
  background: #ccc;
  position: relative;
  padding: 8px;
  border-radius: 3px;
  &:checked {
    background: #d00000;
    &:after {
      display: unset;
    }
  }
  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 4px;
    top: 0;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
const ScheckBox = styled(FcheckBox)``;
const ThcheckBox = styled(FcheckBox)``;

const SecondStateRates = styled(FirstStateRates)``;
const ThirdStateRates = styled(FirstStateRates)``;

const ClearFilters = styled.button`
border : none;
outline : none;
padding : 8px 16px;
border-radius : 5px;
background : #14213d;
color : #fff;
font-family : unset;
margin-top : 50px;
cursor : pointer;
font-size : .7em;
transition : all .4s ease;
&:hover {
  background : #0077b6;
}
`