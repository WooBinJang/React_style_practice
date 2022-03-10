import React from "react";
import "./test.scss";
const Test = () => {
  return (
    <div>
      <h1 className="box1">Scss 연습</h1>
      <div className="box2">Scss 연습</div>
      <div className="box3">
        <h3>제목3</h3>
        <p>내용</p>
      </div>
      <div className="box4">박스4</div>
      <button className="btn1">버튼1</button>
      <button className="btn2">버튼2</button>
      <div className="container">
        <div className="box6 orange"> </div>
        <div className="box6 violet"> </div>
        <div className="box6 tomato"> </div>
        <div className="box6 skyblue"> </div>
      </div>
    </div>
  );
};

export default Test;
