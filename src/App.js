import React from "react";
import Avatar from "./Avatar";
import Sections from "./Sections";
import Options from "./Options";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      capitalizeFirstLetter: this.capitalizeFirstLetter.bind(this),
      setActive: this.setActive.bind(this),
      setOption: this.setOption.bind(this),
      setColor: this.setColor.bind(this),
      activeSection: "eyes",
      sections: {
        eyes: {
          class: "active"
        }
      },
      face: {
        eyes: [
          "eyes1",
          "eyes2",
          "eyes3",
          "eyes4",
          "eyes5",
          "eyes6",
          "eyes7",
          "eyes9",
          "eyes10"
        ]
      },
      avatar: {
        eyes: "eyes1",
        nose: "nose2",
        mouth: "mouth1",
        color: "82AA85",
        src: "https://api.adorable.io/avatars/face/eyes1/nose2/mouth1/82AA85"
      }
    };
  }
  setColor(color) {
    let avatar = Object.assign({}, this.state.avatar);

    avatar.color = color;

    avatar.src =
      "https://api.adorable.io/avatars/face/" +
      avatar.eyes +
      "/" +
      avatar.nose +
      "/" +
      avatar.mouth +
      "/" +
      avatar.color;

    this.setState({ avatar: avatar });
  }

  setOption(option) {
    let avatar = Object.assign({}, this.state.avatar);
    let activeSection = this.state.activeSection;

    avatar[activeSection] = option;

    avatar.src =
      "https://api.adorable.io/avatars/face/" +
      avatar.eyes +
      "/" +
      avatar.nose +
      "/" +
      avatar.mouth +
      "/" +
      avatar.color;

    this.setState({ avatar: avatar });
  }

  setAvatar() {
    let avatar = Object.assign({}, this.state.avatar);

    avatar.src =
      "https://api.adorable.io/avatars/face/" +
      avatar.eyes +
      "/" +
      avatar.nose +
      "/" +
      avatar.mouth +
      "/82AA85";

    this.setState({ avatar: avatar });
  }

  setActive(section) {
    let sections = Object.assign({}, this.state.sections);
    sections.eyes.class = "";
    //sections.nose.class = "";
    //sections.mouth.class = "";

    sections[section].class = "active";
    this.setState({ sections: sections });
    this.setState({ activeSection: section });
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  componentDidMount() {
    this.setAvatar();
  }

  render() {
    if (this.state.face) {
      return (
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="row">
              <div className="col">
                <h1>Avatar Creator</h1>
                <hr />
              </div>
            </div>
            <div className="row">
              {/*Place Sections Component Here*/}
              {/*Place Options Component Here*/}
              <Avatar {...this.state} />
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

export default App;
