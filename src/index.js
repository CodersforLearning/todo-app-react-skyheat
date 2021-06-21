import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import TodoList from "./App";
import MainPage from "./mainPage";

var destination = document.querySelector("#container");
  
ReactDOM.render(
    <div>
        <MainPage/>
    </div>,
    destination
);