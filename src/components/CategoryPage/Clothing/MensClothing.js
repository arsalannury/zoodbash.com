import HocCategoryes from "../HocCategoryes"
import * as URL from "../URL";

function MensClothing() {
  return (
    <>
    <HocCategoryes apiLink={URL.mensClothing} />
    </>
  )
}

export default MensClothing