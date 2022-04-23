import { useEffect, useState } from "react";
import axios from "axios";
import EeachProductLoading from "../../Loading/EeachProductLoading";
import {DetailsWrapper,ImageProduct,ImageWrapper,Wrapper,Description,Price,Title,Actions,TopImageSection,AnotherImages,AnotherImage,Box} from './EachProductStyle';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';



function EachProduct(props) {
  const [product, setProduct] = useState([]);
  const [isLoading,setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      const data = await axios.get(
        `https://fakestoreapi.com/products/${props.match.params.id}`
      );
      try {
        setProduct(data.data);
        setLoading(false)
      } catch (error) {
        setLoading(true)
        console.log(error);
      }
    };
    getData();
  }, []);
  return(
    <>
    {!isLoading ? (
     <>
      <Wrapper container justifyContent={'space-between'} alignItems={'center'}>

        <ImageWrapper container xs={12} sm={12} md={6} lg={6}>
         <TopImageSection container  justifyContent={'space-evenly'}>
         <Actions container alignItems={'center'} justifyContent={'space-around'} flexDirection={'column'}>
                  <ShareOutlinedIcon />
                  <FavoriteBorderOutlinedIcon />
                  <BookmarkBorderOutlinedIcon />
          </Actions>
          <ImageProduct src={product.image} />
         </TopImageSection>
         <AnotherImages container alignItems={'center'} justifyContent={'space-evenly'}>
                  <Box><AnotherImage src={product.image} /></Box>
                  <Box><AnotherImage src={product.image} /></Box>
                  <Box><AnotherImage src={product.image} /></Box>
         </AnotherImages>
        </ImageWrapper>

        <DetailsWrapper container xs={12} sm={12} md={6} lg={6} justifyContent={'space-around'} flexDirection={'column'}>
                     <Title>{product.title}</Title>
                     <Description>{product.description}</Description>
                     <Price>{product.price}</Price>
        </DetailsWrapper>
        
      </Wrapper>
     </>
    ) : (
      <EeachProductLoading />
    )}
    </>
  )
}

export default EachProduct;
