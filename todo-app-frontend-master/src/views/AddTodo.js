import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class AddTodo extends Component {
  state = {
    title: "",
    text: "",
    importance: "low",
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

        <h6><br/>Vyber prioritu...</h6>
        <select 
           name = "importance"
           value={importance}
           onChange = {this.handleChange}
           className="custom-select custom-select-sm mb-3" 
           id="inlineFormCustomSelect"
         >
           <option value="low">nízka</option>
           <option value="medium">stredná</option>
           <option value="height">vysoká</option>
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
