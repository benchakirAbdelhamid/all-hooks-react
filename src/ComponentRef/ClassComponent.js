import React, { Component, createRef } from "react";

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }

  run = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <input ref={this.inputRef} />
        <button onClick={this.run}>run</button>
      </div>
    );
  }
}
