import React from "react";
const Flexi = props => {
  let items = props.config;
  let getChild = items => {
    return items.map(e => {
      return displayField(e);
    });
  };
  const displayField = e => {
    let child = [];
    if (e.children) {
      child = getChild(e.children);
    }

   // console.log(e, "lodu");
    let Components = require(`../AllComponents/${e.inputType}`).default;
    return (
      <div>
        <Components props={e} handleChange={props.handleChange} />
        {child}
      </div>
    );
  };
  return <div>{getChild(items)}</div>;
};
export default Flexi;
