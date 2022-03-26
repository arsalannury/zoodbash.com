import * as URL from "../URL";
import HocCategoryes from "../HocCategoryes";

function Electronics() {
  return (
    <>
    <HocCategoryes apiLink={URL.electronics} />
    </>
  );
}

export default Electronics;
