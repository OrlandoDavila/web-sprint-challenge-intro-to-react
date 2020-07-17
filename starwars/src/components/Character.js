// Write your Character component here

import React, {useState, useEffect} from "react";
import axios from "axios";
import CharacterCards from "./CharacterCards"

 function Character(){
    const [swapiData, setSwapiData] = useState([]);
        
        
    useEffect(() =>{
        axios
            .get(
                "https://swapi.dev/api/species/"
            )
            .then(response => {
                setSwapiData(response.data.results)
                
            })
            .catch(error=>{
                console.log(error)
            })
        }, []);
    
        console.log(swapiData);
        return(
            
            <div className="hereData">
            {swapiData.map(data => 
              
                <CharacterCards
                  key={data.index}
                  name={data.name}
                  homeworld={data.homeworld}
                />
              
            )}
             </div>
          ) 
    
    }
    export default Character