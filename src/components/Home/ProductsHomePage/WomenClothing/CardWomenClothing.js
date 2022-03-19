import {Typography,Button,CardMedia,CardContent,CardActions,Card,Rating,Grid} from '@mui/material'
import styled from 'styled-components';

function CardWomenClothing({image,rate,price}) {
  return (
    <>
     <Grid container alignItems={'center'} justifyContent={'center'} item xs={12} sm={6} md={4} lg={4} >
     <CardMain>
      <CardMedia
        component="img"
        height="140"
        image={image}
        loading="lazy"
        alt="product"
        sx={{objectFit: 'contain',padding: '5px'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <Rating name="half-rating-read" defaultValue={rate}  readOnly />
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontFamily:'unset',fontSize: '.7em'}}>
          این محصول در دسته بندی پر فروش ها قرار دارد
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{fontFamily: 'unset',fontSize: '.8em'}}>مشاهده محصول</Button>
      </CardActions>
    </CardMain>
     </Grid>
    </>
  )
}

export default CardWomenClothing;


const CardMain = styled(Card)`
width : 250px;
`