import React from "react";

class Sections extends React.Component {
  // fires before component is mounted
  constructor(props) {
    // makes this refer to this component
    super(props);

    this.handleClick = function(section) {
      this.props.setActive(section);
    };
  }

  render() {
    return (
      <div className="col-sm-3" id="sections">
        <button
          className={
            "btn btn-primary btn-block " + this.props.sections.eyes.class
          }
          type="button"
          onClick={() => this.handleClick("eyes")}
        >
          Eyes
        </button>
        {/*Place Nose button Here*/}
        {/*Place Mouth Component Here*/}
      </div>
    );
  }
}

export default Sections;
