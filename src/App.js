
import A from "./component1/A";
import B from "./component1/B";
import "./App.css";
import { useState } from "react";


function App() {
  const [valueA, updatedA] = useState(0);
  const [valueB, updatedB] = useState(0);

  function increaseA() {
    updatedA(valueA + 1);
  }

  function decreaseA() {
    updatedA(valueA - 1);
  }

  function increaseB() {
    updatedB(valueB + 1);
  }

  function decreaseB() {
    updatedB(valueB - 1);
  }

  return (
    <>
      <div >
       
        <div className=" main-container my-2 py-2">
          <h1 className="text-center m-5">
            A and B
          </h1>
          <div className=" row m-5">
            <h3 className="text-center col">A = {valueA}</h3>
            <h3 className="text-center col">B = {valueB}</h3>
            <div className=" button-container ms-auto text-center">
              <button onClick={increaseA} className="btn btn-success mx-2">
                A+
              </button>
              <button onClick={decreaseA} className="btn btn-success mx-2">
                A-
              </button>
              <button onClick={increaseB} className="btn btn-success mx-2">
                B+
              </button>
              <button onClick={decreaseB} className="btn btn-success mx-2">
                B-
              </button>
            </div>
          </div>
        </div>
        <A valueA={valueA} valueB={valueB} increaseA={increaseA} increaseB={increaseB} />
        <B valueA={valueA} valueB={valueB} decreaseA={decreaseA} decreaseB={decreaseB} />
      </div>
    </>
  );
}


export default App;


// function App() {
//   return (
//     <div>
//      <h1>hello world</h1>

//     </div>
//   );
// }
