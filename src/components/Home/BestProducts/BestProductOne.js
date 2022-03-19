import { useState } from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";

function BestProductOne() {
  const [categories, setCategories] = useState([
    { id: "1", imag: "phones.png" },
    { id: "2", imag: "toys.png" },
    { id: "3", imag: "homes.png" },
    { id: "4", imag: "jewerllyes.png" },
  ]);
  return (
    <>
      <Typo component={'h1'}>محصولات پر طرفدار</Typo>
      <Main
        container
        alignItems={"center"}
        justifyContent={"space-around"}
        rowGap={"20px"}
      >
        {categories.map((element) => (
          <ImageBox
            key={element.id}
            item
            xs={6}
            sm={6}
            md={3}
            lg={3}
            container
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image src={element.imag} />
          </ImageBox>
        ))}
      </Main>
    </>
  );
}

export default BestProductOne;

const Main = styled(Grid)`
  margin-bottom: 30px;
`;
const ImageBox = styled(Grid)`
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: translateY(-10px);
    filter: drop-shadow(0 0 3px #bbb);
  }
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
  background: #eee;
  padding: 20px;
  border-radius: 50%;
`;
const Typo = styled.h1`
margin : 10px 10px 30px 0;
`