import { Component } from "react";

class ButtonComponent extends Component {
  render() {
    return (
      <div>
        <button>{this.props.buttonText}</button>
      </div>
    );
  }
}

export default ButtonComponent;
