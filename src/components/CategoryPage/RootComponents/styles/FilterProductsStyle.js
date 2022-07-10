import styled from 'styled-components';
import { Grid, Button, ButtonGroup } from "@mui/material";

export const Wrapper = styled(Grid)`
  border: 1px solid #eee;
  background: #fff;
  z-index: 100;
  transition: all .5s ease;
  margin: auto;
`;
export const PriceSection = styled(Grid)`
  width: 100%;
`;
export const PriceTitle = styled.p`
  text-align: center;
  font-size: 0.8em;
  background: #14213d;
  padding: 10px;
  color: #fff;
`;
export const Range = styled.input`
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
export const RangeContainer = styled(Grid)`
  height: 70px;
  margin-top: 15px;
`;
export const RangeValueContainer = styled(Grid)`
  width: 90%;
`;
export const From = styled.span`
  font-size: 0.6em;
  color: #888;
`;
export const To = styled(From)``;

export const RateSection = styled(Grid)`
  width: 100%;
`;
export const RateTitle = styled(PriceTitle)`
  margin-top: 15px;
`;
export const Rates = styled(Grid)`
  padding: 10px;
  margin-top: 15px;
`;

export const FirstStateRates = styled(Grid)`
  padding: 8px;
  border-bottom: 1px solid #eee;
`;
export const Flabel = styled.label`
  cursor: pointer;
  font-size: 0.8em;
  color: #555;
`;
export const Slabel = styled(Flabel)``;
export const Thlabel = styled(Flabel)``;
export const FcheckBox = styled.input`
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
export const ScheckBox = styled(FcheckBox)``;
export const ThcheckBox = styled(FcheckBox)``;

export const SecondStateRates = styled(FirstStateRates)``;
export const ThirdStateRates = styled(FirstStateRates)``;

export const ClearFilters = styled.button`
  border: none;
  outline: none;
  padding: 8px 16px;
  border-radius: 5px;
  background: #14213d;
  color: #fff;
  font-family: unset;
  margin-top: 50px;
  cursor: pointer;
  font-size: 0.7em;
  transition: all 0.4s ease;
  &:hover {
    background: #0077b6;
  }
`;


export const Div = styled.div`
width:100%;
`
export const ButtonFilter = styled(ButtonGroup)`
  display: none;
  align-self: flex-start;
  @media screen and (max-width: 899px) {
    display: unset;
  }
`;