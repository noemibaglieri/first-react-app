import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <img src={this.props.imageSrc} alt="immagine di prova" />
      </div>
    );
  }
}

export default ImageComponent;
