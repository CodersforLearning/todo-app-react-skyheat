import React, { Component } from "react";
import "./toDoList.css";
import TodoList from "./App";
 
class MainPage extends Component {
  ////////////
  // Render //
  ////////////

  render() {
    return (
      <div className="todoListMain">
        <h1 className="listTitle"> Test </h1>
        <div className="header">
            <div className="lists">
                <a className="addNewList" href="">
                    <h1 className="plusSign">+</h1>
                </a>
            </div>
        </div>
        <div className="toDoList">
            <TodoList/>
        </div>
      </div>
    );
  }
}
 
export default MainPage;