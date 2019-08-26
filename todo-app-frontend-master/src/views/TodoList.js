import React, { Component } from "react";
import Masonry from 'react-masonry-component';
import {GoPlus} from "react-icons/go";
import { Link } from 'react-router-dom';

import Todo from "../components/Todo";

class TodoList extends Component {

 state = {
   low: true,
   medium: true,
   height: true
 };

 handleChecked = event => {
  const { name, checked } = event.target;

  this.setState({
    [name]: checked
  });
};


  render() {
    const todos = this.props.todos;
    const {low, medium, height} = this.state;
  
    let finalTodos = [];

        if (low === true) {
          const filteredCheck = todos.filter(todo => {
          return todo.importance === 'low';
          });
        finalTodos = finalTodos.concat(filteredCheck);
        }

        if (medium === true) {
          const filteredCheck = todos.filter(todo => {
            return todo.importance === 'medium';
          });
          finalTodos = finalTodos.concat(filteredCheck);
        }

        if (height === true) {
          const filteredCheck = todos.filter(todo => {
            return todo.importance === 'height';
          });
          finalTodos = finalTodos.concat(filteredCheck);
        }

    return (
    <>
      <div className="custom-control custom-checkbox custom-control-inline">
        <input 
          type="checkbox" 
          className="custom-control-input" 
          id="defaultInline1"
          name = "low"
          checked= {low}
          onChange={this.handleChecked}
        />
        <label className="custom-control-label" htmlFor="defaultInline1" >
          <span className="importanceIcon dotLow"></span> 
          <span> </span>
          low
        </label>
      </div>

      <div className="custom-control custom-checkbox custom-control-inline">
        <input 
          type="checkbox" 
          className="custom-control-input" 
          id="defaultInline2"
          name = "medium"
          checked= {medium}
          onChange={this.handleChecked}
        />
        <label className="custom-control-label" htmlFor="defaultInline2">
        <span className="importanceIcon dotMedium"></span> 
        <span> </span>
        medium</label>
      </div>

      <div className="custom-control custom-checkbox custom-control-inline">
        <input 
          type="checkbox" 
          className="custom-control-input" 
          id="defaultInline3"
          name = "height"
          checked= {height}
          onChange={this.handleChecked}
        />
        <label className="custom-control-label" htmlFor="defaultInline3">
        <span className="importanceIcon dotHeight"></span> 
        <span> </span>
        height</label>
        <br/>
        <br/>
      </div>
      
      <Masonry className="todos">

        <div className="todo mb-2" >
        <div className="goPlus">
          <div className="card-body">
            <Link to="/add">
            <GoPlus size='60' color='grey' />
            <h6 className="card-subtitle text-muted mb-2">
              <br/>
              Add new Todo
            </h6>
            </Link>
          </div>
          </div>
          </div>

        {finalTodos.map((todoData) => {

          const handleStartTodo = () => {
            todoData.state = 'inProgress';
            this.props.onEdit(todoData);
          }
          const handleFinishTodo = () => {
            todoData.state = 'finished';
            this.props.onEdit(todoData);
          };

          const handleRemoveTodo = () => {
            this.props.onRemove(todoData);
          };

          return (
            <Todo
              todo={todoData}
              key={todoData.id}
              onStart={handleStartTodo}
              onFinish={handleFinishTodo}
              onRemove={handleRemoveTodo}
            />
          );
        })}
      </Masonry>
      </>

    );
  }
}

export default TodoList;
