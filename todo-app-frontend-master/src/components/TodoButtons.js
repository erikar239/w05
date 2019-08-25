import React, { Component } from 'react';

class TodoButtons extends Component {
  render () {
    const {state} = this.props.todo;
    let finishButton;
    let startButton;

    if (state === 'notStarted') {
      startButton = (
        <button type="button" className="btn btn-warning float-left" onClick={this.props.onStart}>
          Začať
        </button>
      ) 
    }
    
    if (state !== 'finished') {
      finishButton = (
        <button type="button" className="btn btn-success float-right" onClick={this.props.onFinish}>
          Dokončiť
        </button> 
      )
    } 

    return (
      <>
        <button type="button" className="close" aria-label="Close" onClick={this.props.onRemove}>
          <span aria-hidden="true">&times;</span>
        </button>
        {startButton}
        {finishButton}
        <div className="clear"></div>
      </>
    )
  }
}

export default TodoButtons;
