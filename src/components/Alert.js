import React from "react";

const Alert = (props) => {
  // To Capitalize the first letter of message type
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{height : "50px"}}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)} </strong> :{" "}
          {props.alert.message}
        </div>
      )}
    </div>
  );
};

export default Alert;
