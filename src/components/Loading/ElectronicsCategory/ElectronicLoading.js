import Skeleton from "react-loading-skeleton";


function ElectronicLoading() {
    return Array(6).fill({}).map(() => {
        return (
            <>
            <Skeleton count={6} circle={true} width={150} height={150} />
            <Skeleton  count={6}/>
            </>
        )
    })
  
}

export default ElectronicLoading