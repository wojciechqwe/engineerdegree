import React, { Component } from 'react';

class MainStage extends Component {
  render() {
    return (
      <div style={this.styles.wrapper}>
        <div style={this.styles.wall}></div>
        <div style={this.styles.floor}></div>
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
      backgroundColor: "#dddddd"
    },
    floor: {
      width: "100vw",
      height: "30vh",
      backgroundColor: "#777777"
    }
  }
}

export default MainStage;
