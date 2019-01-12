import React, { Component } from 'react';

class MainStage extends Component {
  state = {
    floor: {
      width: "100vw",
      height: "30vh",
      backgroundColor: "#777777",
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        floor: {
          width: "100vw",
          height: "30vh",
          backgroundColor: "#777777",
          transition: "3s",
          transform: "translateY(-30vh)"
        },
      })
    }, 5000);
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
      height: "100vh",
      backgroundColor: "#dddddd"
    },
  }
}

export default MainStage;
