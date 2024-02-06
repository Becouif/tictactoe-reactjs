import React, { useState } from "react";
import "./TicTacToe.css";

// importing images 
import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png";


function TicTacToe(){
  let data = ["","","","","","","","",""];

  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  
  const toggle = (e,num) => {
    if (lock){
      return 0;
    }

    // here we add new innerHTML to the DOM 
    if (count % 2 === 0){
      e.target.innerHTML = `<img src='${cross_icon}'/>`;
      data[num] = "x";
      setCount(++count);
    }
    else {
      e.target.innerHTML = `<img src='${circle_icon}' />`;
      data[num] = "o";
      setCount(++count);
    }
  }


  const checkWin = () => {
    if (data[0] === data[1] && data[1]=== data[2] && data[2] !== "")
    {
      win(data);
    }

    else if (data[3] === data[4] && data[4] === data[5] && data[2] !== "")
    {
      win(data);
    }
    else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") 
     {
      win(data);
     }
    else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "")
    {
      win(data);
    }
    else if (data[0] === data[3] && data[4] === data[5] && data[5] !== "")
    {
      win(data);
    }
    else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "")
    {
      win(data);
    }
    else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "")
    {
      win(data);
    }
  }

  const win = (winner) => {
    setLock(true);
  }

  return (
    <div className="container">
      <h1 className="title">Tic Tac Game By <span> Becouif</span></h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,1)}}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,2)}}></div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e)=>{toggle(e,3)}}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,4)}}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,5)}}></div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e)=>{toggle(e,6)}}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,7)}}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,8)}}></div>
        </div>
      </div>
      <button className="reset">Reset</button>
    </div>
  )
}

export default TicTacToe;