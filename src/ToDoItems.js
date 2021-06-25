import React, { Component, useState } from "react";
 
class TodoItems extends Component {
    constructor(props) {
        super(props);
     
        this.createTasks = this.createTasks.bind(this);
    }
     
    delete(key) {
        this.props.delete(key);
    }

    complete(key)   {
        this.props.complete(key);
    }

    createTasks(item) {
        return <li
                //className={this.state.active ? 'doneList': null}
                className={item.class}
                onClick={() => this.complete(item.key)} 
                onDoubleClick={() => this.delete(item.key)}
                key={item.key}>
                    {item.text}
                </li>   
    }
    
    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        console.log(listItems)
        return (
        <ul className="theList">
            {listItems}
        </ul>
        );
    }
    };
 
export default TodoItems;