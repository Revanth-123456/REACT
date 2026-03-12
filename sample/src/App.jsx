import './App.css';
import Sample from './Component/March10/Sample';
import Movies from './Component/March10/Movies';
import ProductCard from './Component/March10/ProductCard';
import FirstComponent from './FirstComponent';


function App() {


 const products = [
  {
    id: 1,
    sponsored: true,
    title: "Google Pixel 9A (Porcelain, 256 GB)",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/q/f/-original-imahadxg8mgjzrfh.jpeg?q=70",
    rating: 4.5,
    reviews: "8,289",
    reviewCount: "548",
    features: [
      "8 GB RAM | 256 GB ROM",
      "15.96 cm (6.28 inch) Full HD+ Display",
      "48MP + 12MP | 12MP Front Camera",
      "5100 mAh Battery",
      "Tensor G4 Processor",
      "1 Year Domestic Warranty",
    ],
    price: "39,999",
    oldPrice: "49,999",
    discount: 20,
    exchange: "Upto ₹32,900 Off on Exchange",
    bankOffer: "Bank Offer",
    assured: true,
  },
];

//   let movieData =[
//     {
//       name:"Caption America",
//       imageUrl:"https://images.pexels.com/photos/31956081/pexels-photo-31956081.jpeg",
//       about:
//       "lorerm ipsum is very good vad nejkjdf ndjhir"
//     },
// ];



  // let name = "David";

  // let obj = [
  //   {name:"David",employer:"Google"},
  //   {name:"David",employer:"Google"},
  //   {name:"David",employer:"Google"},
  //   {name:"David",employer:"Google"},
  //   {name:"David",employer:"Google"},
  //   {name:"David",employer:"Google"},
  // ];



  return (
    <div>
      {/* <Sample obj={obj}/> */}
      {/* <Sample firstname={name} /> */}
      {/* <Movies movies={movieData}/> */}
      <ProductCard products={products} />
      <h1>hello</h1>
      <FirstComponent></FirstComponent>
    </div>
  );
}



export default App;