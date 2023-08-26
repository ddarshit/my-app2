import React, {useState} from "react";
import { Component } from "react";

class FormTextarea extends Component {
  constructor() {
    super();
    this.state = {
      textarea: "",
    };
  }

  ok = (event) => {
    event.preventDefault();
    console.log(this.state.textarea);
  };
  render() {
    return (
      <>
        <div className="container">
          <h2 className="my-3">textarea Type Form:</h2>
          <form onSubmit={(event) => this.ok(event)} className="my-">
            <textarea
              value={this.state.textarea}
              cols="30"
              rows="5"
              onChange={(event) =>
                this.setState({ textarea: event.target.value })
              }
            ></textarea>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </>
    );
  }
}

export default FormTextarea;
