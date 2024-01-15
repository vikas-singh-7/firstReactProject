import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const reduce = () => {
    setCount(count - 1);
  };

  const reduceBy10 = () => {
    setCount(count - 10);
  };

  const increaseBy10 = () => {
    setCount(count + 10);
  };

  const rotate =() =>{
    document.getElementById("inner")?.classList.add("rotate");
    document.getElementById("parentCard")?.classList.add("yellow")

  }
  const stoprotate = () =>{
    document.getElementById("inner")?.classList.remove("rotate")
    document.getElementById("parentCard")?.classList.remove("yellow")
  }
  return (  
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2 style={{fontFamily:"cursive"}}>Vite + React</h2>
      <div className="main">
      <div className="input" id="parentCard">
        <div className="inputchild" id="inner">
          <h2>🤖</h2>
          <h3>hey vikas here</h3>
          {count}
        <p>heres the count </p>
        </div>
      </div>
      <div className="card">
        <div className="innerControl">

        <button onClick={() => setCount((count) => count + 1)}>
          click to count
        </button>
        <button  onClick={increaseBy10}>
          click to increase by 10{" "}
        </button>
        
        <button onClick={reduce}>click to reduce count</button>
        </div>
     
      <div className="controls">
        <button onClick={reduceBy10}>click to reduce by 10</button>
        <button  style={{marginLeft:"20px"}} onClick={rotate}>click to rotate</button>
        <button  style={{marginLeft:"20px"}} onClick={stoprotate}>click to stop</button>
      </div>
      </div>
      
      
      </div>
     
    </>
  );
}

export default App;
