import React, {useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // const [swapiData, setSwapiData] = useState([]);
  // // const starWarsURL = "https://swapi.dev/api/species/"
        
  // useEffect(() =>{
  //     axios
  //         .get(
  //             "https://swapi.dev/api/species/"
  //         )
  //         .then((response) => {
  //             setSwapiData(response.data.results)
  //             // console.log(swapiData)
              
  //         })
  //         .catch(error=>{
  //             console.log(error)
  //         })
  //     }, []);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
// console.log(swapiData);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character />
    </div>
  );
}
export default App;
