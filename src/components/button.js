import React, { Component } from "react";

const Button = (props) => {
  return (
    <div>
      <button type="button" class="btn btn-info">
        {props.buttonText}
      </button>
    </div>
  );
};

export default Button;