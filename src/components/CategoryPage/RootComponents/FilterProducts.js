import Tooltip from "@mui/material/Tooltip";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FilterListIcon from "@mui/icons-material/FilterList";
import { EnglishNumberToPersian } from "../../ToPersian/EnglishNumberToPersian";
import {
  ButtonFilter,
  FcheckBox,
  ClearFilters,
  FirstStateRates,
  Flabel,
  From,
  PriceSection,
  PriceTitle,
  Range,
  RangeContainer,
  RangeValueContainer,
  RateSection,
  RateTitle,
  Rates,
  ScheckBox,
  SecondStateRates,
  Slabel,
  ThcheckBox,
  ThirdStateRates,
  Thlabel,
  To,
  Wrapper,
} from "./FilterProductsStyle";

const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: "#14213d",
          fontFamily: "inherit",
          fontSize: "1em",
        },
      },
    },
  },
});

function FilterProducts({
  checkboxOneToTwo,
  checkboxTwoToFour,
  checkboxMaxScore,
  oneToTwoFilter,
  twoToFourFilter,
  maxScoreFilter,
  rangeOnInputHandler,
  clearAllFilter
}) {
  const [rangeValue, setRangeValue] = useState(0);
  const [filterShow, setFilterShow] = useState("translateX(300%)");
  const [overflowShow, setOverflowShow] = useState(false);
  const [filterHeight, setFilterHeight] = useState("450px");
  const [positionFilter, setPositionFilter] = useState("absolute");
  const [widthFilter, setWidthFilter] = useState("300px");

  useEffect(() => {
    EnglishNumberToPersian();
  }, []);

  const FilterShowHandler = () => {
    setWidthFilter(widthFilter === "300px" ? "100vw" : "300px");
    setFilterShow(
      filterShow === "translateX(300%)" ? "none" : "translateX(300%)"
    );
    setFilterHeight(filterHeight === "450px" ? "100vh" : "450px");
    setOverflowShow(overflowShow === false ? true : false);
    if (!overflowShow) document.body.classList.add("body_when_filter_show");
    else document.body.classList.remove("body_when_filter_show");
  };

  const rangeHandler = (e) => {
    setRangeValue(e.target.value);
  };

  

  return (
    <>

     <ButtonFilter onClick={FilterShowHandler}>
        <FilterListIcon />
      </ButtonFilter>

      <Wrapper
        container
        flexDirection={"column"}
        alignItems={"center"}
        sx={{
          transform: "none",
          position: "none",
          width: "300px",
          height: "450px",
          "@media screen and (max-width : 899px)": {
            transform: filterShow,
            position: positionFilter,
            width: widthFilter,
            height: filterHeight,
          },
        }}
      >
        <PriceSection>
          <PriceTitle>فیلتر بر اساس قیمت</PriceTitle>
          <RangeContainer
            container
            alignItems={"center"}
            justifyContent={"space-evenly"}
            flexDirection={"column"}
          >
            <ThemeProvider theme={theme}>
              <Tooltip
                title={`${rangeValue.toString().toPersian()} هزار تومان`}
              >
                <Range
                  type="range"
                  max={"600"}
                  defaultvalue="0"
                  onChange={rangeHandler}
                  onInput={rangeOnInputHandler}
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
              <FcheckBox
                type={"checkbox"}
                id="check1"
                value="onetotwo"
                defaultchecked={oneToTwoFilter}
                onChange={checkboxOneToTwo}
              />
            </FirstStateRates>
            <SecondStateRates
              container
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Slabel htmlFor={"check2"}>امتیاز دو تا چهار</Slabel>
              <ScheckBox
                type={"checkbox"}
                id="check2"
                value="twotofour"
                defaultchecked={twoToFourFilter}
                onChange={checkboxTwoToFour}
              />
            </SecondStateRates>
            <ThirdStateRates
              container
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Thlabel htmlFor={"check3"}>بیشترین امتیاز</Thlabel>
              <ThcheckBox
                type={"checkbox"}
                id="check3"
                value="maxscore"
                defaultchecked={maxScoreFilter}
                onChange={checkboxMaxScore}
              />
            </ThirdStateRates>
          </Rates>
        </RateSection>
        <ClearFilters onClick={clearAllFilter}>حذف تمام فیلتر ها</ClearFilters>
      </Wrapper>
    </>
  );
}

export default FilterProducts;
