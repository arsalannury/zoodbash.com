import {Div,SelerBox} from './SelersStyle';
import {Grid} from '@mui/material';
import {useEffect} from 'react';
import axios from 'axios';

const Selers = () => {
    useEffect(()=>{
    const getData = async () => {
        const data = await axios.post("https://hzsqceossbxbfhtyrkme.supabase.co/test",{test:'test'})
        console.log(data);
    }
    getData();
    },[])
    return ( 
        <>
        <Div p={5}>
          <SelerBox>
               <Grid>

               </Grid>
          </SelerBox>
          <SelerBox></SelerBox>
          <SelerBox></SelerBox>
          <SelerBox></SelerBox>
        </Div>
        </>
     );
}
 
export default Selers;