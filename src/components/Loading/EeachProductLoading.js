import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import {Grid} from '@mui/material';


function EeachProductLoading() {
  return (
    <Grid container alignItems={'center'} justifyContent={'space-around'} sx={{width: '100vw'}}>
        <Grid container flexDirection={'column'} justifyContent={'space-around'} width={'unset'}>
            <Skeleton count={2} width={450} height={30} />
            <Skeleton width={180} height={30} />
            <Skeleton width={160} height={30} />
        </Grid>
        <Skeleton count={1} width={200} height={350} />
    </Grid>
  )
}

export default EeachProductLoading