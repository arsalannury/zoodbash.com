import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import styled from "styled-components";
import { Grid, Rating } from "@mui/material";
import SliderOneLoading from "../Loading/SliderOneLoading";
SwiperCore.use([Autoplay])

function SliderTwo() {
  const [jewerly, setJewerly] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect( () => {
    const responseData = async () => {
      const response = await axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((result) => {
        setJewerly(result.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(true);
      });
    }
    responseData()
  }, []);
  return (
    <>
      {loading ? (
        <SliderOneLoading />
      ) : (
        <Swipers
           autoplay= {{
              delay: 2500,
              disableOnInteraction: false
            }}
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          {jewerly.map((product, index) => (
            <SwiperSlide key={product.id}>
              <Container
                container
                alignItems={"center"}
                justifyContent={"center"}
              >
                <ImageBox container item xs={12} sm={6} md={6} lg={6} alignItems={'center'} justifyContent={'center'} >
                  <Image src={product.image} />
                </ImageBox>
                <Grid
                  container
                  alignItems={"center"}
                  justifyContent={"center"}
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                >
                  <Store
                    container
                    justifyContent={"space-evenly"}
                    alignItems={"center"}
                    flexDirection={"column"}
                  >
                    <LogoStore src="harirchi.png" />
                    <RateContainer
                      container
                      justifyContent={"space-around"}
                      alignItems={"center"}
                    >
                      <Rating
                        name="read-only"
                        value={product.rating.rate}
                        readOnly
                      />
                      <P>{product.rating.rate.toString().toPersian()}</P>
                    </RateContainer>
                  </Store>
                </Grid>
              </Container>
            </SwiperSlide>
          ))}
        </Swipers>
      )}
    </>
  );
}

export default SliderTwo;

const Swipers = styled(Swiper)`
  margin: 50px 0;
  background-color: #cd1c1c;
  padding: 40px;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  padding: 20px;
`;
const Container = styled(Grid)``;

const ImageBox = styled(Grid)`
  background: #fff;
  border-radius: 10px;
`;
const LogoStore = styled.img`
  width: 200px;
  height: 200px;
`;
const Store = styled(Grid)`
  width: 250px;
  height: 250px;
`;
const P = styled.p``;
const RateContainer = styled(Grid)`
  background: #f1ebeb;
  border-radius: 10px;
`;
