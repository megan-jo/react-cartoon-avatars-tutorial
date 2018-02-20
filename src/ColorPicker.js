import React from "react";

class ColorPicker extends React.Component {
  // fires before component is mounted
  constructor(props) {
    // makes this refer to this component
    super(props);

    this.state = {
      colors: {
        red: "130",
        green: "170",
        blue: "133"
      },
      hex: "82AA85"
    };

    this.setHex = function(colors) {
      let r = parseInt(colors.red, 10).toString(16),
        g = parseInt(colors.green, 10).toString(16),
        b = parseInt(colors.blue, 10).toString(16),
        hex = this.padColor(r) + this.padColor(g) + this.padColor(b);
      this.props.setColor(hex);
      this.setState({ hex: hex });
    };

    this.changeColor = this.changeColor.bind(this);
    this.changeHex = this.changeHex.bind(this);

    // set local state
    this.handleClick = function(option) {
      this.props.setOption(option);
    };
  }

  changeColor = function(key) {
    let value = document.getElementById(key).value;
    let colors = Object.assign({}, this.state.colors);
    colors[key] = value;
    this.setHex(colors);
    this.setState({ colors: colors });
  };

  changeHex = function(event) {
    let color = event.target.value;
    if (color.charAt(0) === "#") color = color.slice(1);
    this.props.setColor(color);
    this.setState({ hex: color });
  };

  padColor = function(color) {
    return color.length < 2 ? "0" + color : color;
  };

  render() {
    const colorElements = Object.keys(this.state.colors).map((key, i) => (
      <fieldset key={"color" + i}>
        <label htmlFor={key}>{key}</label>
        <input
          type="range"
          min="0"
          max="255"
          id={key}
          step="1"
          value={this.state.colors[key]}
          onChange={() => this.changeColor(key)}
        />
        <output htmlFor={key} id={key + "_out"}>
          {this.state.colors[key]}
        </output>
      </fieldset>
    ));

    return (
      <div className="col-sm" id="colors">
        {colorElements}
        <fieldset>
          <label htmlFor="hex">#</label>
          <input
            type="text"
            id="hex"
            value={this.state.hex}
            onChange={this.changeHex}
          />
        </fieldset>
      </div>
    );
  }
}

export default ColorPicker;
