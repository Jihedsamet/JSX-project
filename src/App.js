import "./App.css";
import Product from "./components/Profile/Product";

function App() {

const users = [
  {
    name: "Sneakers",
    img : 'https://www.snickers.fr/sites/g/files/fnmzdf871/files/migrate-product-files/tgfhunegzpgqjlbsuc0d.png',
    soum: "1.70$",
    description: "Good taste"
  },
  {
    name: "Twix",
    img: 'https://meilleurgout.com/web/image/product.template/43/image_1024?unique=7060bcd',
    soum:"4$",
    description:" it has several health benefits"
  },
  {
    name: "mars",
    img:"https://snack.tn/wp-content/uploads/2019/04/50889510_1972388202873358_4489317920513458176_n.png",
    soum: "2$",
    description:"source of quick energy"
  },
  {
    name: "Kitkat",
    img: "https://chocosweets.net/img/product_images/919_30.jpg",
    soum: "3$",
    description: "Rich in carbohydrates"
  },
];


  return (
    <>
    {users.map(user => (
      <Product name={user.name} img={user.img} description={user.description} soum={user.soum}/>
    ))}
  </>
  );
}

export default App;
