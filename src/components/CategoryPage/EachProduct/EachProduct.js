import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import EeachProductLoading from "../../Loading/EeachProductLoading";
import TabComponentTheme from "../../../Theme/TabItemTheme";
import TooltipTheme from "../../../Theme/TooltipTheme";
import CommentsProduct from '../EachProduct/Comments/CommentsProduct';
import Swal from "sweetalert2";
import { Rating, Tabs, Tab, Box, Tooltip, Chip, ButtonGroup,Button } from "@mui/material";
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
  Bookmark,
  FavoriteIcon,
  ShareIcon, 
  ActionsSec
} from "./EachProductStyle";

import {
  TabPanel,
  a11yProps,
} from "../../../Theme/ConfigMuiComponents/ConfigTabsComponent";
import FaceIcon from "@mui/icons-material/Face";

import Prices from "../../../images/هزارتومان.png";
import delivery from "../../../images/delivery.png";
import quality from "../../../images/quality.png";
import gift from "../../../images/gift.png";

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


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
  let [count,setCount] = useState(0);

  const incrementCount = () => {
    if(count >= 5) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'انتخاب بیشتر از پنج عدد مجاز نمیباشد'
      })
      return;
    }
    setCount(++count)
  }
  const decrementCount = () => {
    if(count <= 0) return;
    setCount(--count)
  }

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
            <ImageWrapper item container xs={12} sm={12} md={6} lg={6}>
              <TopImageSection container justifyContent={"space-evenly"}>
                <Actions
                  container
                  alignItems={"center"}
                  justifyContent={"space-around"}
                  flexDirection={"column"}                 
                >
                  <ShareIcon />
                  <FavoriteIcon />
                  <Bookmark />
                </Actions>
               <Zoom>
               <ImageProduct src={product.image} />
               </Zoom>
              </TopImageSection>
              <AnotherImages
                container
                alignItems={"center"}
                justifyContent={"space-evenly"}
                rowGap={4}
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
              item
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

              <ActionsSec sx={{my:3}} container alignItems={'flex-end'} justifyContent={'flex-end'} flexDirection={'column'}>
                         <ButtonGroup sx={{padding:'5px',border:'1px solid #38b000'}}>
                           <Button onClick={decrementCount} sx={{borderRadius:0}} variant="standard" color="warning">-</Button>
                           <Button sx={{borderRadius:0}} variant="standard" disabled>{count}</Button>
                           <Button onClick={incrementCount} sx={{borderRadius:0}} variant="standard" color="success">+</Button>
                         </ButtonGroup>
                         <Button sx={{fontFamily:'unset',mt:3}} color="success" variant="outlined">افزودن به سبد خرید</Button>
              </ActionsSec>

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
            <CommentsProduct />
          </Wrapper>
        </>
      ) : (
        <EeachProductLoading />
      )}
    </>
  );
}

export default EachProduct;
