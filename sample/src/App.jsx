import './App.css';
import Sample from './Component/March10/Sample';
import Movies from './Component/March10/Movies';


function App() {

  let movieData =[
    {
      name:"Caption America",
      imageUrl:"https://images.pexels.com/photos/31956081/pexels-photo-31956081.jpeg",
      about:
      "lorerm ipsum is very good vad nejkjdf ndjhir"
    },
];

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
      <Movies movies={movieData}/>
    </div>
  );
}

export default App;