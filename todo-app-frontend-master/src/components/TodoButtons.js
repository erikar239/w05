import React, { Component } from 'react';

class TodoButtons extends Component {
  render () {
    const { finished } = this.props.todo;
    let finishButton;
    let startButton;
    if (!finished) {
      
      startButton = (
        <button type="button" className="btn btn-warning float-left" onClick={this.props.onFinish}>
          Začať
        </button>
      )

      finishButton = (
        <button type="button" className="btn btn-success float-right" onClick={this.props.onFinish}>
          Dokončiť
        </button>
      )
    }

    return (
      <>
        <button type="button" className="btn btn-light" onClick={this.props.onRemove}>
          Zmazať
        </button>
        {startButton}{finishButton}
      </>
    )
  }
}

export default TodoButtons;
