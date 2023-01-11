import React from 'react'

export default function A(props) {
  return (
    <div className=" a-container my-2 py-2">
      <h1 className="text-center m-5">Increase both</h1>
      <div className="container row m-5">
        <h3 className="text-center col">A = {props.valueA}</h3>
        <h3 className="text-center col">B = {props.valueB}</h3>
        <div className="container button-container ms-auto text-center">
          <button onClick={props.increaseA} className="btn btn-success mx-2">A+</button>
          <button onClick={props.increaseB} className="btn btn-success mx-2">B+</button>
        </div>
      </div>
    </div>
  )
}
