import React from "react";

const TextArea = ({ props, handleChange }) => {
  //console.log(props, "props");
  return (
    <form className="form-group">
      <label className="label-primary">{props.name}</label>
      <textarea className="form-control"
        onChange={e => handleChange(e.target.value, props.name)}
      />
    </form>
  );
};

export default TextArea;
