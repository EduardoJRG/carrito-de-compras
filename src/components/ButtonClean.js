import { Component } from "react";

const styles = {
  buttonClean: {
    margin: "10px",
    border: "none",
    borderRadius: "15px",
    padding: "10px 15px",
    backgroundColor: "#f55",
    color: "#fff",
    cursor: "pointer",
  },
};

class ButtonClean extends Component {
  render() {
    return <button style={styles.buttonClean} {...this.props}></button>;
  }
}
export default ButtonClean;
