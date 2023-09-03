import Description from "../Description/Description";
import Image from "../Image/Image";
import Name from "../Name/Name";
import Price from "../Price/Price";

function Product ({name,img,soum,description}) {

return (
<>
<h1 > Product</h1>
<Image img={img}   />
<Name esmou={name} />
<Price soum={soum}/>
<Description description={description}/>

</>
);

}

export default Product;