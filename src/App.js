import React from 'react'
import './App.css';

export default function App() {
  const evaluate=()=>{
    alert('hii');
  }
  const rhs=()=>{
    prompt("What should be the rhs integer?", "");
  }
  return (
    <>
    <div className="app">

      <div className="operands">
        <div className="operand" draggable="true" data-value="1">A</div>
        <div className="operand" draggable="true" data-value="2">B</div>
        <div className="operand" draggable="true" data-value="3">C</div>
        <div className="operand" draggable="true" data-value="4">D</div>
        <div className="operand" draggable="true" data-value="5">E</div>
      </div>
      <br/>
      <div className="operators">
        <div className="operator" draggable="true" data-value="+">+</div>
        <div className="operator" draggable="true" data-value="-">-</div>
        <div className="operator" draggable="true" data-value="*">*</div>
        <div className="operator" draggable="true" data-value="/">/</div>
        <span className="space"></span>
        <div className="comparator" data-value="<">&lt;</div>
        <div className="comparator" data-value=">">&gt;</div>
        <span className="space"></span>
        <div className="rhs" onClick={rhs}>RHS Integer</div>
      </div>
      <br/>
      <div className="canvas"></div>
      <button className="submit"  onClick={evaluate}>Evaluate</button>
      <ul>
        <li>Alphabets are fetched from the NodeJS+Express+MongoDB backend</li>
        <li>Numbers(Alphabets) and operators are draggable</li>
        <li>&lt; and &gt; are clickable(non-draggable), pick the comparison sign using them</li>
        <li>Clicking on the RHS integer, it prompts to choose an integer and adds it to the equation</li>
        <li>Drag and drop functionality was implemented without any external library</li>
        <li>Dragging an operand/operator to the center of any two elements adds it between those two elements</li>
      </ul>
    </div>
    </>
  )
}
