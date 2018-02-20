import React from "react";

class Options extends React.Component {
  // fires before component is mounted
  constructor(props) {
    // makes this refer to this component
    super(props);

    this.isActive = function(option) {
      if (this.props.avatar[this.props.activeSection] === option) {
        return "active";
      }
      return "";
    };

    // set local state
    this.handleClick = function(option) {
      this.props.setOption(option);
    };
  }

  render() {
    let options = this.props.face[this.props.activeSection];
    const optionElements = Object(options).map((option, i) => (
      <button
        key={i}
        className={"btn btn-primary btn-block " + this.isActive(option)}
        type="button"
        onClick={() => this.handleClick(option)}
      >
        {this.props.capitalizeFirstLetter(option)}
      </button>
    ));

    return (
      <div className="col-sm-3" id="options">
        {optionElements}
      </div>
    );
  }
}

export default Options;
