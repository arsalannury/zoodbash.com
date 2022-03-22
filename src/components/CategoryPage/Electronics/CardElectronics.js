import {Button,Grid,Typography,Rating} from '@mui/material';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

String.prototype.toPersian = function () {
    let num = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"];
    return this.replace(/[0-9]/g, function (number) {
      return num[+number];
    });
  };

function CardElectronics({title,image,price,rating}) {
  return (
    <>
    <Grid container alignItems={'center'} justifyContent={'center'} item xs={12} sm={6} md={6} lg={6}>
     <Card >
         <LinkImg to={'/'}><Image src={image} /></LinkImg>
         <Title>{title}</Title>
         <Div>
             <Information>
             <Typography>{price.toString().toPersian()}<Span>هزار تومان</Span></Typography>
             <Rating name="read-only" value={rating.rate} readOnly />
             </Information>
             <Typography>نظرات کاربران</Typography>
         </Div>
         <Footer>
             <Btn><Link to={'/'}></Link>مشاهده محصول</Btn>
         </Footer>
     </Card>
     </Grid>
    </>
  )
}

export default CardElectronics;

const Card = styled(Grid)`
width : 300px;
padding: 10px;
box-shadow: 0 0 3px #bbb;
border-radius: 5px;
`;
const Image = styled.img`
width : 90%;
height : 200px;
`;
const Title = styled.p``;
const Div = styled(Grid)``;
const Footer = styled(Grid)``;
const Btn = styled(Button)``
const Information = styled(Grid)``;
const Span = styled.span``;
const LinkImg = styled(Link)`

`