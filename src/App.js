import React, { Component, useState } from "react";
import { Container, Card, Button, Alert } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext";
import { Link, useHistory, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from "./Signup";
import TodoItems from "./ToDoItems";
import Dashboard from "./Dashboard";
import "./toDoList.css";


class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      completeItems: [],
      title: "Notes #1",
      edit: false
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.completeItem = this.completeItem.bind(this);
  }
  
  ///////////////
  // Functions //
  ///////////////

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
        class: "hi"
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });
     
      this._inputElement.value = "";
    }
     
    console.log(this.state.items);
       
    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
    });
  }


  changeTitle(e) {
    this.setState({
      edit: true
    })
  };

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      if (this._titleElement.value !== "") {
        console.log(this._titleElement.value)
        this.setState({ title: this._titleElement.value });
      }
      this.setState({
        edit: false
      })
      
    }
  }

  completeItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      if (item.key === key)   {
        console.log("test")
        if (item.class != "doneList")  {
          item.class = "doneList"
        }
        else{
          item.class = ""
        }
        
        return (item.key === key);
      }
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
    });

  }

  ////////////
  // Render //
  ////////////

  render() {
    if(this.state.edit) {
      return (
        <div className="todoListMain">
          <Link exact path="/" component={Dashboard}></Link>
          <Container className="d-flex align-items-center justify-content-center" style={{minheight:"100vh"}}>
            <div className="w-100" style={{ maWidth: "400px"}}>
              <Router>
                <AuthProvider>
                  <Switch>
                    <Route path="/signup" component={Signup}/>
                  </Switch>
                </AuthProvider>
              </Router>
            </div>
            
          </Container>
          <div className="header">
            <input className="listTitleEdit" ref={(a) => this._titleElement = a} placeholder={this.state.title} onKeyPress={this.handleKeyPress}></input>
            <form onSubmit={this.addItem}>
              <input ref={(a) => this._inputElement = a} 
                placeholder="enter task">
              </input>
              <button type="submit">add</button>
            </form>
          </div>
          <TodoItems entries={this.state.items}
                      delete={this.deleteItem}
                      complete={this.completeItem}/>
        </div>
        );
    }
    else{
      return (
          <div className="todoListMain">
          <Link exact path="/" component={Dashboard}></Link>
          <Container className="d-flex align-items-center justify-content-center" style={{minheight:"100vh"}}>
            <div className="w-100" style={{ maWidth: "400px"}}>
              <Router>
                <AuthProvider>
                  <Switch>
                    <Route path="/signup" component={Signup}/>
                  </Switch>
                </AuthProvider>
              </Router>
            </div>
            
          </Container>
          <div className="header">
            <h1 className="listTitle" onClick={this.changeTitle}>{this.state.title}</h1>
            <form onSubmit={this.addItem}>
              <input ref={(a) => this._inputElement = a} 
                placeholder="enter task">
              </input>
              <button type="submit">add</button>
            </form>
          </div>
          <TodoItems entries={this.state.items}
                      delete={this.deleteItem}
                      complete={this.completeItem}/>
        </div>
      );
    }
  
  }
}
 
export default TodoList;