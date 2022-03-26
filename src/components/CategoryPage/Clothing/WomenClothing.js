import HocCategoryes from "../HocCategoryes"
import * as URL from "../URL";

function WomenClothing() {
  return (
    <>
    <HocCategoryes apiLink={URL.womenClothing} />
    </>
  )
}

export default WomenClothing