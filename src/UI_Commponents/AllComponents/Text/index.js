import React from "react";

const Text = ({ props, handleChange }) => {
  //console.log(props, "props");
  return (
    <div className="form-group">
      <label className="label-primary">{props.name}</label>
      <input
        type={props.inputType}
        className="form-control"
        // value={props.value}
        onChange={e => handleChange(e.target.value, props.name)}
      />
    </div>
  );
};

export default Text;
