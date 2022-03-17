import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const SliderOneLoading = () => {
  return(
      <>
      <Skeleton width={'100%'} height={350} style={{margin:'50px 0'}} />
      </>
  )
}
 
export default SliderOneLoading;