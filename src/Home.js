import React from "react";
import styled from "styled-components";
import "./Home.css";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';

const Button = styled.button`
  background: ${props => props.primary ? "black" : "white"};
  color: ${props => props.primary ? "white" : "black"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

/*
function onImage(){
    alert('Hello Image')
}

function onVideo(){
    alert('Hello Video')
}
function Home() {
  return (
      <div className="Container">
       <div className="Buttons"> 
        <Button onClick={onVideo}>Video</Button>
      </div>
      <div className="Buttons">
          <Button onClick={onImage}>Image</Button>
       </div>
       </div>
  );
}

export default Home;
*/
function Home() {
  return (

<body>
  <article class="card" style={{width:"350px",align:"center"}}>
    <div class="card__data">
      <h2 class="card__title">Video detection</h2>
      <p class="card__description">Real-time object detection using Camera Feed</p>
      <a href="Video" class="card__btn">Lanuch</a>
      <img src="https://images.unsplash.com/photo-1599240211563-17590b1af857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=" " class="card__img"></img>
    </div>
  </article>
    <article class="card" style={{width:"350px",align:"center"}}>
    <div class="card__data">
      <h2 class="card__title">Image detection</h2>
      <p class="card__description">Object Detection in uploaded image</p>
      <a href="Image" class="card__btn">Lanuch</a>
      <img src="https://images.unsplash.com/photo-1595981234058-a9302fb97229?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=" " class="card__img"></img>
    </div>
  </article>
</body>
  );
}

export default Home;