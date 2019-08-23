import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class AddTodo extends Component {
  state = {
    title: "",
    text: "",
    importance: "",
  };

  handleSubmit = async event => {
    event.preventDefault();
    await this.props.onAdd(this.state);
    this.setState({
      title: '',
      text: '',
      importance: '',
    });
    this.props.history.push("/");
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { title, text, importance } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="title"
          type="text"
          value={title}
          onChange={this.handleChange}
          className="form-control mb-2"
          placeholder="Title"
          required
        />
        <textarea
          name="text"
          value={text}
          onChange={this.handleChange}
          className="form-control mb-2"
          placeholder="Text"
        />
      
        <select 
          name = "importance"
          value={importance}
          onChange = {this.handleChange}
          className ="form-control mb-2"
          required
        >
          <option></option>
          <option value="low">low</option>
          <option value="medium">mediu</option>
          <option value="height">height</option>
        </select>
        

        <button
          type="submit"
          className="btn btn-outline-success"
          disabled={!title}
        >
          Uložiť
        </button>
      </form>
    );
  }
}

export default withRouter(AddTodo);
