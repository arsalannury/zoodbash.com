import {Grid,Typography,Rating} from '@mui/material';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import { EnglishNumberToPersian } from '../../ToPersian/EnglishNumberToPersian';
import {Box,Btn,Card,Div,Footer,Image,ImgPrice,Information,LinkImg,Title} from './styles/CardProductStyles'

function CardProducts({title,image,price,rating,id,category}) {

  useEffect(() => {
   EnglishNumberToPersian()
  },[])

  return (
    <>
    <Grid container alignItems={'center'} justifyContent={'center'} item xs={12} sm={6} md={6} lg={4} my={5}>
     <Card >

         <LinkImg to={`/${category}/${id}`}><Image src={image} /></LinkImg>
         <Title>{title}</Title>
         <Div>
             <Information container alignItems={'center'} justifyContent={'space-between'}>
             <Box container alignItems={'center'} width={'80px'}>
             <Typography sx={{fontFamily : 'unset',fontSize : '.8em'}}>{price.toString().toPersian()}</Typography>
             <ImgPrice src="هزارتومان.png" />
             </Box>
             <Rating name="read-only" value={rating.rate} readOnly />
             </Information>
         
         </Div>
         <Footer container alignItems={'center'} justifyContent={'center'} mt={6}>
             <Btn variant='outlined'><Link to={`/${category}/${id}`}></Link>مشاهده محصول</Btn>
         </Footer>
     </Card>
     </Grid>
    </>
  )
}

export default CardProducts;

