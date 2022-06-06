import logo from "./logo.svg";
import "./App.css";
import React from "react";
function App() {
  React.useEffect(() => {
    let xhr = new XMLHttpRequest();
    // 0: 객체는 만들었으나 open을 호출하기 전
    xhr.open("GET", "http://localhost:5001/sleep_times");
    // 1: 호출한 후
    xhr.send();
    // 2: 보내기
    // 3: 응답을 기다리는 중
    // 4: 응답완료 요청을 받아옴.
    //XMLHttpRequest.readyState 라는 프로퍼티가 변경될 때마다 콜백함수를 호출해준다.
    //
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(xhr.responseText);
      }
    };
    xhr.onload = function () {
      console.log(xhr.responseText);
    };
  }, []);
  return <div className="App"></div>;
}

export default App;
