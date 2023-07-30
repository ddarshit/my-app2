import React from "react";
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
          <form onSubmit={(event) => this.ok(event)} className="my-5">
            <textarea
              value={this.state.textarea}
              cols="30"
              rows="5"
              onChange={(event) =>
                this.setState({ textarea: event.target.value })
              }
            ></textarea>
            <br />
            <input type="submit" value="Submit" className="" />
          </form>
        </div>
      </>
    );
  }
}

export default FormTextarea;
