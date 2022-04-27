import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import EeachProductLoading from "../../Loading/EeachProductLoading";
import TabComponentTheme from "../../../Theme/TabItemTheme";
import TooltipTheme from "../../../Theme/TooltipTheme";
import { Rating, Tabs, Tab, Box, Tooltip, Chip } from "@mui/material";
import {
  DetailsWrapper,
  ImageProduct,
  ImageWrapper,
  Wrapper,
  Description,
  Price,
  Title,
  Actions,
  TopImageSection,
  AnotherImages,
  AnotherImage,
  Boxx,
  BoxT,
  ImgPrice,
  PriceWrapper,
  IconsBox,
  Icon,
} from "./EachProductStyle";

import {
  TabPanel,
  a11yProps,
} from "../../../Theme/ConfigMuiComponents/ConfigTabsComponent";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FaceIcon from "@mui/icons-material/Face";

import Prices from "../../../images/هزارتومان.png";
import delivery from "../../../images/delivery.png";
import quality from "../../../images/quality.png";
import gift from "../../../images/gift.png";

String.prototype.toPersian = function () {
  let num = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"];
  return this.replace(/[0-9]/g, function (number) {
    return num[+number];
  });
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function EachProduct(props) {
  const [product, setProduct] = useState({});
  const [rateValue, setRateValue] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const data = await axios.get(
        `https://fakestoreapi.com/products/${props.match.params.id}`
      );
      try {
        setProduct(data.data);
        setLoading(false);
        setRateValue(data.data.rating.rate);
      } catch (error) {
        setLoading(true);
      }
    };
    getData();
  }, []);

  return (
    <>
      {!isLoading ? (
        <>
          <Wrapper
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <ImageWrapper container xs={12} sm={12} md={6} lg={6}>
              <TopImageSection container justifyContent={"space-evenly"}>
                <Actions
                  container
                  alignItems={"center"}
                  justifyContent={"space-around"}
                  flexDirection={"column"}
                >
                  <ShareOutlinedIcon />
                  <FavoriteBorderOutlinedIcon />
                  <BookmarkBorderOutlinedIcon />
                </Actions>
                <ImageProduct src={product.image} />
              </TopImageSection>
              <AnotherImages
                container
                alignItems={"center"}
                justifyContent={"space-evenly"}
              >
                <Boxx>
                  <AnotherImage src={product.image} />
                </Boxx>
                <Boxx>
                  <AnotherImage src={product.image} />
                </Boxx>
                <Boxx>
                  <AnotherImage src={product.image} />
                </Boxx>
              </AnotherImages>
            </ImageWrapper>

            <DetailsWrapper
              container
              xs={12}
              sm={12}
              md={6}
              lg={6}
              justifyContent={"space-around"}
              flexDirection={"column"}
            >
              <Title>{product.title}</Title>
              <Description>{product.description}</Description>
              <PriceWrapper container alignItems={"center"}>
                <Price>{String(product.price).toPersian()}</Price>
                <ImgPrice src={Prices} alt="price image" />
              </PriceWrapper>
              <BoxT container alignItems={"center"} justifyContent={"right"}>
                <Rating name="feedback" value={rateValue} readOnly />
                <Chip
                  sx={{
                    padding: "15px",
                    fontFamily: "unset",
                    "& .MuiChip-label": { fontSize: ".9em" },
                    mr: 3,
                    opacity: 0.5,
                  }}
                  color="info"
                  icon={<FaceIcon />}
                  label={"از دیدگاه کاربران"}
                />
              </BoxT>

              <Box sx={{ width: "100%", my: "40px" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab
                      label="مناقصه"
                      {...a11yProps(0)}
                      sx={{ fontFamily: "unset" }}
                    />
                    <Tab
                      label="پرسش و پاسخ"
                      {...a11yProps(1)}
                      sx={{ fontFamily: "unset" }}
                    />
                    <Tab
                      label="ارسال رایگان"
                      {...a11yProps(2)}
                      sx={{ fontFamily: "unset" }}
                    />
                  </Tabs>
                </Box>
                <TabComponentTheme>
                  <TabPanel value={value} index={0}>
                    این محصول در تخفیف مناقصه فعال نیست
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    دارد
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    ارسال رایگان فعال است
                  </TabPanel>
                </TabComponentTheme>
              </Box>

              <IconsBox
                container
                alignItems={"center"}
                justifyContent={"space-around"}
              >
                <TooltipTheme>
                  <Tooltip title="تحویل سریع" arrow>
                    <Icon src={delivery} alt="delivery" />
                  </Tooltip>
                  <Tooltip title="امکان بسته بندی مخصوص" arrow>
                    <Icon src={gift} alt="gift" />
                  </Tooltip>
                  <Tooltip title="تضمین کیفیت محصول" arrow>
                    <Icon src={quality} alt="quality" />
                  </Tooltip>
                </TooltipTheme>
              </IconsBox>
            </DetailsWrapper>
          </Wrapper>
        </>
      ) : (
        <EeachProductLoading />
      )}
    </>
  );
}

export default EachProduct;
