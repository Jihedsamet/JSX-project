import Image from "../Image/Image";
import Name from "../Name/Name";

function Profile ({name,img}) {
return (
<>
<h1> Profile</h1>
<Image img ={img}   />
<Name esmou={name} />
</>


);

}

export default Profile;