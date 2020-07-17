
import React from "react"
import styled from "styled-components"

const Container = styled.div`
background: grey;
border-radius: 10px;
color:white;
height:200px;
width;400px;
padding:100px 0;
margin: 30px;
`;
const H3 = styled.h3`
  color: #945316;
  font-size: 30px
`;

const CharacterCards = props =>{
   return(
    
     <Container key={props.index}>
         <H3>Name</H3>
         <p>{props.name}</p>
         <h3>Home World</h3>
         <p>{props.homeworld}</p>
     </Container>
     
     )
}

export default CharacterCards;