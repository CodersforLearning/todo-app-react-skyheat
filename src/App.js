import React, { Component, useState } from "react";
import TodoItems from "./ToDoItems";
import "./toDoList.css";
 
class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      completeItems: [],
      title: "click here",
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
    //console.log(this._titleElement.value)
    //return <input className="listTitleEdit" ref={(a) => this._titleElement = a} placeholder={this.state.title}></input>
    /*if (this._titleElement.value !== "") {
      console.log(this._titleElement.value)
      this.setState({ title: this._titleElement.value });
    }*/
    
    //this.setState({ title: this.titleElement.value });
  };

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log('enter press here! ')
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
 // completeItem(item) {
    /*
    console.log(item.key)
    console.log(this.state.items)
    console.log(this.state.items.key)
    if(item.key == this.state.items.key)  {
      console.log(item.key)
    }*/
    //console.log(item)
    //item.class = "doneList"
    //this.setState({className: "hello"});
    //console.log(item)
    //console.log(this.text)

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
          <div className="header">
            <input className="listTitleEdit" ref={(a) => this._titleElement = a} placeholder={this.state.title} onKeyPress={this.handleKeyPress}></input>

            <p>Add tasks by using the input field below</p>
            <p>Click once to mark task as complete</p>
            <p>Click twice to delete task</p>
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
          <div className="header">
            <h1 className="listTitle" onClick={this.changeTitle}>{this.state.title}</h1>
            <p>Add tasks by using the input field below</p>
            <p>Click once to mark task as complete</p>
            <p>Click twice to delete task</p>
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