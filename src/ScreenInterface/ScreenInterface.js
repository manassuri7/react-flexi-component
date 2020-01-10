import React from "react";
import Flexi from "../UI_Commponents/Flexi/index";
import hoc from "../UI_HOCs/ScreenHocs";
import config from "./config";

class ScreenInterfaces extends React.Component {
  render() {
    return (
      <div>
        <Flexi
          config={this.props.config}
          handleChange={this.props.handleChange}
          onFlexiSubmit={this.props.onFlexiSubmit}
        />
        <button className="btn btn-primary"onClick={this.props.onFlexiSubmit}>Submit</button>
      </div>
    );
  }
}

export default hoc(config)(ScreenInterfaces);
