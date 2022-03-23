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
             <Information container alignItems={'center'} justifyContent={'space-between'}>
             <Typography sx={{fontFamily : 'unset',fontSize : '.8em'}}>{price.toString().toPersian()}<Span>هزار تومان</Span></Typography>
             <Rating name="read-only" value={rating.rate} readOnly />
             </Information>
             <Typography sx={{margin : '15px 0' , color : '#888' ,fontFamily : 'unset',fontSize : '.7em'}}>نظرات کاربران</Typography>
         </Div>
         <Footer container alignItems={'center'} justifyContent={'flex-end'}>
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
border-radius: 5px;
transition : all .5s ease;
&:hover {
  box-shadow : 0 2px 1px #aaa;
}
`;
const Image = styled.img`
width : 90%;
height : 200px;
`;
const Title = styled.p`
font-size : .8em;
color : #555;
`;
const Div = styled(Grid)`
margin-top : 10px;
`;
const Footer = styled(Grid)``;
const Btn = styled(Button)`
font-family : unset;
font-size : .7em;
`
const Information = styled(Grid)``;
const Span = styled.span`
font-size : .7em;
`;
const LinkImg = styled(Link)`
// font-family : unset;
`