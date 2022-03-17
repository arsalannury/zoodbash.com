import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const CommentsLoading = () => {
    return ( 
        <>
        <Skeleton count={5} height={'80px'} width={'100%'} />
        </>
     );
}
 
export default CommentsLoading;