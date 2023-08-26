import React,{useState} from "react";
import { MDBTextArea } from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


export default function TextForm() {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // event.preventDefault();
    // setText("you have clicked on handleOnChenge");
    setText(event.target.vaule);
  };
  return (
    <>
      <div className="container mt-5">
        <h1>{props.heading}</h1>
        <MDBTextArea
          label="Message"
          id="textAreaExample"
          onChange={handleOnChange}
          rows={8}
        />
        <MDBTextArea
          label="Message"
          id="textAreaExample"
          onChange={handleOnChange}
          value={text}
          rows={8}
        />
      </div>
      <div className="container my-4">
        <MDBBtn onClick={handleUpClick}>convert to Uppercase</MDBBtn>
        <MDBBtn className="mx-3" onClick={handleLoClick}>
          convert to Lowercase
        </MDBBtn>
      </div>
      <div className="container my-4">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length}words and {text.length}characters</p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
      <div>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          cols="30"
          rows="8"
        ></textarea>
      </div>

      <button className="btn btn-primary" onClick={handleUpClick}>
        convert to Uppercase
      </button>
    </>
  );
}
