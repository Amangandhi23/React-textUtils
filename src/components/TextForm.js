import React, { useState } from "react";
import propTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // const [isNormalText, setTextWeight] = useState(true);

  const handleText = (event) => {
    setText(event.target.value);
  };

  const btnUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase", "success");
  };

  const btnLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase", "success");
  };

  const btnClearClick = () => {
    setText("");
    props.showAlert("Text cleared!", "success");
  };

  // const textWeightChange = () => {
  //   setTextWeight(!isNormalText);
  //   console.log(text)
  // };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const countWords = (text) => {
    let newText = text.replace(/\s+/g, " ");
    let words = newText.split(" ");
    words = words.filter((obj) => obj !== "");
    return words.length;
  };

  return (
    <>
      <div className="container">
        <h1 style={{ color: props.mode !== "light" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          {/* <label for="myBox" className="form-label">{props.heading}</label> */}
          <textarea
            className="form-control"
            placeholder="Enter text here"
            value={text}
            onChange={handleText}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#042743",
              color: props.mode !== "light" ? "white" : "black",
            }}
            // style={ isNormalText ? { fontWeight: 'normal' } : { fontWeight: 'bold' } }
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={btnUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={btnLowClick}>
          Convert to lowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={btnClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        {/* {text.length > 0 && (
          <>
            <button className="btn btn-primary mx-2" onClick={btnUpClick}>
              Convert to UpperCase
            </button>
            <button className="btn btn-primary mx-2" onClick={btnLowClick}>
              Convert to lowerCase
            </button>
            <button className="btn btn-primary mx-2" onClick={btnClearClick}>
              Clear Text
            </button>
            <button
              className="btn btn-primary mx-2"
              onClick={handleExtraSpaces}
            >
              Remove Extra Spaces
            </button>
            <button className="btn btn-primary mx-2" onClick={textWeightChange}>
              {isNormalText ? "Bold" : "Normal"} Text
            </button>
          </>
        )} */}
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode !== "light" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {/* {text.split(" ").length
            ? text.length > 0
              ? text.split(" ").length
              : 0
            : 0}   */}
          {countWords(text)} words and {text.length} characters
        </p>
        <p>{countWords(text) * 0.008} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}

// eslint-disable-next-line react/no-typos
TextForm.propTypes = {
  heading: propTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Test Heading",
};
