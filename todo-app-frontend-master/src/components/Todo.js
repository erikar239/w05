import React, { Component } from "react";

import axios from "../axios";

import TodoButtons from "./TodoButtons";
import moment from "moment";

class Todo extends Component {
  renderText = () => {
    const { text } = this.props.todo;
    if (!text)  return null;

    return (
      <div className="card-text" dangerouslySetInnerHTML={{ __html: text }} />
    );
  };


  renderImportance = () => {
    const { importance } = this.props.todo; 
    let icon = "importanceIcon";
    
   if (importance === 'low') {
      icon += " dotLow"
    } else if (importance === 'medium') {
      icon += " dotMedium"
    } else if (importance === 'height'){
      icon += " dotHeight"
    } 

    return (
      <div>
        <span className={icon}></span>
        <span> </span>
        {importance}
      </div>
    );
  }


  handleStart = async () => {
    await axios.patch("/todos/" + this.props.todo.id, {
      todoState: 'inProgress'
    })
    this.props.onStart();
  }

  handleFinish = async () => {
    await axios.patch("/todos/" + this.props.todo.id, {
      todoState: 'finished'
    });
    this.props.onFinish();
  };

  handleRemove = async () => {
    await axios.delete("/todos/" + this.props.todo.id);
    this.props.onRemove();
  };

  render() {
    const { createdAt, title, state } = this.props.todo;
    let classes = "card";
    if (state === 'finished') {
      classes += " border-success"
    } 
    else if (state === 'inProgress') {
      classes += " border-in-progress " 
    }
    else {
      classes = "border-non-success"
    }

    return (
      <div className="todo mb-2">
        <div className={classes}>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle text-muted mb-2">
              Pridané: {moment(createdAt).format("DD MMM.'YY")}
            </h6>
            {this.renderText()}
            <TodoButtons
              todo={this.props.todo}
              onStart = {this.handleStart}
              onFinish={this.handleFinish}
              onRemove={this.handleRemove}
            />
          </div>
            <div className="card-footer">
              {this.renderImportance()}
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;


