import { Grid } from "@mui/material";
import {Div,GridImages,Icon,Image,Input,SearchBar} from './styles/SearchStyle';
import SearchMobile from './SearchMobile';
import {useState,useEffect} from 'react';

const Search = () => {
    const [show,setShow] = useState(true);
    useEffect(() => {
      window.innerWidth <= 500 ? setShow(true) : setShow(false);
        window.addEventListener("resize", (e) => {
            e.target.innerWidth <= 500 ? setShow(true) : setShow(false);
          });
    },[])
  return (
    <>
      <Grid container sx={{background: '#cd1c1c'}}>
        <Grid item xs={6} sm={6} md={6} ld={6}>
         {!show ? (
              <SearchBar>
              <Icon />
              <Input type="text" placeholder="دنبال چه محصولی هستید ؟" />
            </SearchBar>
         ) : (
             <SearchMobile />
         )}
        </Grid>
        <GridImages item xs={6} sm={6} md={6} ld={6}>
          <Div>
            <Image src="globe.png" />
            <Image src="carr.png" />
            <Image src="paypal.svg" />
          </Div>
        </GridImages>
      </Grid>
    </>
  );
};

export default Search;

