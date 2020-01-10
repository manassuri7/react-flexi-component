import React from "react";

const hoc = config => Component => {
  class HocComponent extends React.Component {
    state = {
      dataChange: {}
      
    };
    handleChange = (value, key) => {
      let { dataChange } = this.state;

      this.setState({
        ...this.state,
        dataChange: { ...dataChange, [key]: value }
      });
    };

    onFlexiSubmit = e => {
      e.preventDefault();
      console.log(this.state.dataChange);
    };

    render() {
      
      const { handleChange, onFlexiSubmit } = this;
      return (
        <div>
         
          <Component
            config={config}
            handleChange={handleChange}
            onFlexiSubmit={onFlexiSubmit}
            {...this.props}
          />
        </div>
      );
    }
  }
  return HocComponent;
};
export default hoc;
