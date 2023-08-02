import React from "react";
import { Component } from "react";

class Conditionrendring extends Component {
  constructor() {
    super();
    this.state = {
      login : true
    //   login: false,
    };
  }
  render() {
    return (
      this.state.login && (
        <div className="mx-4">
          <h1 style={{ color: "blue" }}>welcome</h1>
        </div>
      )
    );

    // return this.state.login ?
    // <div className='mx-4'><h1 style={{color: "blue"}}>welcome</h1></div> :
    // <div className='mx-4'> <h1 style={{color: "red"}}>sorry you are fail</h1></div>

    // let sign

    // if (this.state.login) {
    //     sign = <><div className='mx-4'><h1 style={{color: "blue"}}>welcome</h1></div></>
    // }
    // else {
    //     sign = <><div className='mx-4'> <h1 style={{color: "red"}}>sorry you are fail</h1></div> </>
    // }
    // return sign

    // return (
    //     <>
    //     <div className='mx-4'>
    //         <h1 style={{color: "blue"}}>welcome</h1>
    //         <h1 style={{color: "red"}}>sorry you are fail</h1>
    //     </div>
    //     </>
    // );
  }
}

export default Conditionrendring;
