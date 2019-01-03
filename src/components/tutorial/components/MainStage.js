import React, { Component } from 'react';

class MainStage extends Component {
  state = {
    floor: {
      width: "100vw",
      height: "30vh",
      backgroundColor: "#999",
      opacity: 0,
      transition: "3s"
    }
  }
  componentDidMount() {
    setTimeout(() => {

      this.setState({
        floor: {
          width: "100vw",
          height: "30vh",
          backgroundColor: "#999",
          opacity: 1,
          transition: "3s"
        }
      });
    }, 100);
  }

  render() {

    return (
      <div style={this.styles.wrapper}>
        <div style={this.styles.wall}></div>
        <div style={this.state.floor}></div>
      </div>
    );
  }

  styles = {
    wrapper: {
      position: "fixed",
      zIndex: 1
    },
    wall: {
      width: "100vw",
      height: "70vh",
      backgroundColor: "#fff"
    },

  }
}

export default MainStage;
