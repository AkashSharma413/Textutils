import React, { useState } from "react";

const TextForm = (props) => {
  const [inputData, setInputData] = useState("");

  // To convert the text to Uppercase
  const textToUppercase = () => {
    let newInputData = inputData.toUpperCase();
    setInputData(newInputData);
    props.showAlert('Text converted to Uppercase!', 'success');
  };

  // To convert the text to Lowercase
  const textToLowercase = () => {
    let newInputData = inputData.toLowerCase();
    setInputData(newInputData);
    props.showAlert('Text converted to Lowercase!', 'success');
  };

  // To clear the text
  const clearText = () => {
    setInputData("");
    props.showAlert('Text is cleared', 'success');
  };

  // To copy the text in clipboard
  const copyText = () => {
    navigator.clipboard.writeText(inputData);
    props.showAlert('Text is copied', 'success');
  };

  // To remove the extra spaces
  const removeSpaces = () => {
    let newMessage = inputData.split(/[ ]+/);
    setInputData(newMessage.join(" "));
    props.showAlert('Extra spaces are removed.', 'success');
  };

  return (
    <>
      <div className="row" style={{color: props.mode === "light" ? "black" : "white"}}>
        <div className="col-12">
          <h4 className="mb-3">{props.heading}</h4>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="myBox"
              rows="8"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#1a4564",
                color: props.mode === "light" ? "black" : "white"
              }}
            ></textarea>
          </div>
          <button disabled={inputData.length === 0} className="btn btn-primary mx-1 my-1" onClick={textToUppercase}>
            Convert text to Uppercase
          </button>
          <button disabled={inputData.length === 0} className="btn btn-primary mx-1 my-1" onClick={textToLowercase}>
            Convert text to Lowercase
          </button>
          <button disabled={inputData.length === 0} className="btn btn-primary mx-1 my-1" onClick={clearText}>
            Clear Text
          </button>
          <button disabled={inputData.length === 0} className="btn btn-primary mx-1 my-1" onClick={copyText}>
            Copy Text
          </button>
          <button disabled={inputData.length === 0} className="btn btn-primary mx-1 my-1" onClick={removeSpaces}>
            Remove Spaces
          </button>
          <h4 className="my-3">Number of words and characters</h4>
          <p>
            {inputData.split(/\s+/).filter((element)=>{return element.length}).length} words and {inputData.length}{" "}
            characters
          </p>
          <p>{0.008 * inputData.split(" ").filter((element)=>{return element.length}).length} Minutes to Read</p>
          <h4 className="my-3">Preview</h4>
          <p>{inputData.length > 0 ? inputData : 'Nothing to preview!!!'}</p>
        </div>
      </div>
    </>
  );
};

export default TextForm;
