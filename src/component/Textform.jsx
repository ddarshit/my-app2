import React, { useState } from "react";
import { MDBTextArea } from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";

export default function Textform(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // setText("you have clicked on handleOnChenge");
    setText(event.target.vaule);
  };
  return (
    <>
      <div className="mt-5">
        <h1>{props.heading}</h1>
        {/* <MDBTextArea
          label="Message"
          id="textAreaExample"
          onChange={handleOnChange}
          rows={8}
        /> */}
        <MDBTextArea
          label="Message"
          id="textAreaExample"
          onChange={handleOnChange}
          value={text}
          rows={8}
        />
      </div>
      <div className="my-4">
        <MDBBtn onClick={handleUpClick}>convert to uppercase</MDBBtn>
      </div>
    </>
  );
}
