import axios from 'axios';
import {useState,useEffect} from 'react';
import CardElectronics from './CardElectronics';
import {Grid} from '@mui/material';

function Electronics() {
    const [category,getCategory] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://fakestoreapi.com/products/category/electronics');
            try {
                getCategory(response.data);
            } catch (error) {
                
            }
        }
        fetchData()
    },[])
  return (
    <>
    <Grid container>
    {category.map((product) => (
        <CardElectronics 
        key={product.id}
        title={product.title}
        image={product.image}
        price={product.price}
        rating={product.rating}
        />
    ))}
    </Grid>
    </>
  )
}

export default Electronics;