import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FilterListIcon from "@mui/icons-material/FilterList";
import HistoryIcon from "@mui/icons-material/History";
import { useCacheContext } from "../../../Context/CacheProductContext";
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
} from "./styles/FilterProductsStyle";

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
  clearAllFilter,
}) {
  const [rangeValue, setRangeValue] = useState(0);
  const [filterShow, setFilterShow] = useState("translateX(300%)");
  const [overflowShow, setOverflowShow] = useState(false);
  const [filterHeight, setFilterHeight] = useState("450px");
  const [positionFilter, setPositionFilter] = useState("absolute");
  const [widthFilter, setWidthFilter] = useState("90%");
  const { handleStateShowCache, isCacheOpen, handleFilterOpen } =
    useCacheContext();

  useEffect(() => {
    EnglishNumberToPersian();
  }, []);

  const FilterShowHandler = () => {
    if(isCacheOpen) return;
    setWidthFilter(widthFilter === "90%" ? "100vw" : "90%");
    setFilterShow(
      filterShow === "translateX(300%)" ? "none" : "translateX(300%)"
    );
    setFilterHeight(filterHeight === "450px" ? "100vh" : "450px");
    setOverflowShow(overflowShow === false ? true : false);
    if (!overflowShow) document.body.classList.add("body_when_filter_show");
    else document.body.classList.remove("body_when_filter_show");

    handleFilterOpen();
  };

  const rangeHandler = (e) => {
    setRangeValue(e.target.value);
  };

  return (
    <>
      <ButtonFilter variant="normal" aria-label="normal button group">
        <Button>
          <FilterListIcon onClick={FilterShowHandler} />
        </Button>
        <Button onClick={handleStateShowCache}>
          <HistoryIcon sx={{ margin: "0 20px" }} />
        </Button>
      </ButtonFilter>

      <Wrapper
        container
        flexDirection={"column"}
        alignItems={"center"}
        sx={{
          transform: "none",
          position: "none",
          width: "90%",
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
                checked={oneToTwoFilter}
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
                checked={twoToFourFilter}
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
                className="aa"
                type={"checkbox"}
                id="check3"
                value="maxscore"
                checked={maxScoreFilter}
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
