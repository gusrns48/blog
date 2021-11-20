/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {

  let [a, b] = useState(['코트','바지','모자']);
  
  let [zero, cnt] = useState(0);

  let posts = '강남';

  return (
    <div className="App">

      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{ a[0] } <span onClick={ ()=>{ cnt(zero++) } }>👍</span> {zero} </h3>
        <p>2월 7일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ a[1] }</h3>
        <p>2월 7일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ a[2] }</h3>
        <p>2월 7일 발행</p>
        <hr/>
      </div>

      <Modal />


    </div>
  );
}

function Modal(){
  return (
    <>
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
    </>
  )
}


export default App;
