import {Button,Grid,Typography,Rating} from '@mui/material';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useEffect} from 'react';
import { EnglishNumberToPersian } from '../../ToPersian/EnglishNumberToPersian';


function CardProducts({title,image,price,rating}) {

  useEffect(() => {
   EnglishNumberToPersian()
  },[])

  return (
    <>
    <Grid container alignItems={'center'} justifyContent={'center'} item xs={12} sm={6} md={6} lg={6} my={5}>
     <Card >
         <LinkImg to={'/'}><Image src={image} /></LinkImg>
         <Title>{title}</Title>
         <Div>
             <Information container alignItems={'center'} justifyContent={'space-between'}>
             <Box container alignItems={'center'} width={'50px'}>
             <Typography sx={{fontFamily : 'unset',fontSize : '.8em'}}>{price.toString().toPersian()}</Typography>
             <ImgPrice src="تومان.png" />
             </Box>
             <Rating name="read-only" value={rating.rate} readOnly />
             </Information>
             {/* <Typography sx={{margin : '15px 0' , color : '#888' ,fontFamily : 'unset',fontSize : '.7em'}}>نظرات کاربران</Typography> */}
         </Div>
         <Footer container alignItems={'center'} justifyContent={'center'} mt={6}>
             <Btn variant='outlined'><Link to={'/'}></Link>مشاهده محصول</Btn>
         </Footer>
     </Card>
     </Grid>
    </>
  )
}

export default CardProducts;

const Card = styled(Grid)`
width : 300px;
padding: 10px;
border-radius: 5px;
transition : all .5s ease;
&:hover {
  box-shadow : 0 0 2px #eee;
  transform: translateY(-10px);
}
`;
const Image = styled.img`
width : 100%;
height : 200px;
`;
const Title = styled.p`
font-size : .8em;
color : #555;
margin: 20px 0;
`;
const Div = styled(Grid)`
margin-top : 10px;
`;
const Footer = styled(Grid)``;
const Btn = styled(Button)`
font-family : unset;
font-size : .7em;
width : 70%;
`
const Information = styled(Grid)``;

const LinkImg = styled(Link)`
`
const Box = styled(Grid)``

const ImgPrice = styled.img`
width: 20px;
margin-right: 3px;
filter: opacity(0.8);
`