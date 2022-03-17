import { Grid } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
SwiperCore.use([Autoplay]);

function MenClothingCard() {
  const [clothing, getClothing] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://fakestoreapi.com/products/category/men's clothing"
      );
      try {
        getClothing(response.data);
      } catch (error) {}
    };
    fetchData();
  }, []);
  let sale = 50;
  return (
    <>
      <Container
        container
        alignItems={"center"}
        justifyContent={"space-evenly"}
        rowGap={5}
      >
        <Swiper
          pagination={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },

            768: {
              width: 768,
              slidesPerView: 2,
            },
            920: {
              width: 920,
              slidesPerView: 2,
            },
            1024: {
              width: 1024,
              slidesPerView: 2,
            },
          }}
        autoplay={{
            delay : 2500,
            disableOnInteraction: false
        }}
        >
          {clothing.map((product, index) => (
            <SwiperSlide>
              <Card
                key={product.id}
                container
                alignItems={"center"}
                justifyContent={"space-evenly"}
                flexDirection={"column"}
              >
                <Img src={product.image} />
                <Rate>{product.rating.rate.toString().toPersian()}</Rate>
                <Sale
                  container
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <SaleText>تخفیف ویژه</SaleText>
                  <SalePoint>{`% ${sale.toString().toPersian()}`}</SalePoint>
                </Sale>
              </Card>
            </SwiperSlide>
          ))}
          <SwiperSlide>
          <SingleCard
                container
                alignItems={"center"}
                justifyContent={"space-evenly"}
                flexDirection={"column"}
              >
                  <ImgSingleCard src="zood.png" alt="logo" />
           </SingleCard>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}

export default MenClothingCard;

const Container = styled(Grid)`
  margin: 250px 0 30px 0;
  background: #cd1c1c;
  padding: 15px 10px;
`;
const Card = styled(Grid)`
  max-width: 250px;
  height: 300px;
  background: #fff;
  transition: all 0.4s ease;
  padding: 10px;
  border-radius: 5px;
`;
const SingleCard = styled(Card)`

`
const Img = styled.img`
  width: 150px;
  height: 150px;
`;
const Rate = styled.p``;
const Sale = styled(Grid)``;
const SaleText = styled.span``;
const SalePoint = styled.span``;
const ImgSingleCard = styled.img`
width: 200px;
`