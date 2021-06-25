import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./App";
import MainPage from "./mainPage";
import firebase from "firebase/app";
import Signup from "./Signup";
import TestPage from "./TestPage";
import 'bootstrap/dist/css/bootstrap.min.css'

var destination = document.querySelector("#container");
console.log('Signup', Signup)
ReactDOM.render(
    <div>
        <TestPage/>
    </div>,
    destination
);