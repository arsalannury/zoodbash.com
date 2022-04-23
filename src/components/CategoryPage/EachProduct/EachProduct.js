import {useEffect,useState} from 'react'
import axios from 'axios'

function EachProduct(props) {
    const [product,setProduct] = useState([])
    useEffect(()=>{
         console.log(props.match.params.id)
         const getData = async () => {
             const data = await axios.get(`https://fakestoreapi.com/products/${props.match.params.id}`)
             try {
                 console.log(data)
             } catch (error) {
                 console.log(error)
             }
         }
         getData()
    },[])
  return (
    <div>EachProduct</div>
  )
}

export default EachProduct