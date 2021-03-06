import { Grid, Typography, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { EnglishNumberToPersian } from "../../ToPersian/EnglishNumberToPersian";
import {
  Box,
  Btn,
  Card,
  Div,
  Footer,
  Image,
  ImgPrice,
  Information,
  LinkImg,
  Title,
} from "./styles/CardProductStyles";
import Prices from "../../../images/هزارتومان.png";
import { useCacheContext } from "../../../Context/CacheProductContext";

function CardProducts({ title, image, price, rating, id, category }) {
  const { cacheProduct, setChacheState } = useCacheContext();

  useEffect(() => {
    EnglishNumberToPersian();
  }, []);

  return (
    <>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        item
        xs={12}
        sm={6}
        md={6}
        lg={4}
        my={5}
      >
        <Card>
          <LinkImg to={`/${category}/${id}`}>
            <Image
              onClick={() => {
                setChacheState(title, rating, image);
              }}
              src={image}
            />
          </LinkImg>
          <Title>{title}</Title>
          <Div>
            <Information
              container
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box container alignItems={"center"} width={"80px"}>
                <Typography
                  component={"span"}
                  sx={{ fontFamily: "unset", fontSize: ".8em" }}
                >
                  {price.toString().toPersian()}
                </Typography>
                <ImgPrice src={Prices} />
              </Box>
              <Rating name="read-only" value={rating.rate} readOnly />
            </Information>
          </Div>
          <Footer
            container
            alignItems={"center"}
            justifyContent={"center"}
            mt={6}
          >
            <Link
              onClick={() => {
                setChacheState(title, rating, image);
              }}
              style={{
                textDecoration: "none",
                color: "#1976d2",
                fontSize: ".9em",
                width: '80%'
              }}
              to={`/${category}/${id}`}
            >
              <Btn variant="outlined">مشاهده محصول</Btn>
            </Link>
          </Footer>
        </Card>
      </Grid>
    </>
  );
}

export default CardProducts;
