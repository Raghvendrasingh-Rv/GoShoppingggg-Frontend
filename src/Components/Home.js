import React from "react";

function Home(props) {

  let sayHello=()=>{
    alert("Hello you clicked button!!");
  }
  return (
    <div style={{ padding: "20px", margin: "20px", border: "solid 2px red" }}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button onClick={sayHello}>{props.button}</button>
    </div>
  );
}

export default Home;
