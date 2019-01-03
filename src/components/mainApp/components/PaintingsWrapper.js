import React, { Component } from 'react';

class MainStage extends Component {
  render() {
    let styles = {
      wrapper:  {
        position: "absolute",
        width: this.props.windowSize.width-0.1,
        height: "70vh",
        overflow: "hidden",
      }, 
      flexWrapper: {
        position: "absolute",
        height: "70vh",
        zIndex: 1,
        display: "flex",
        overflow: "hidden"
      },
      paintingwrapper: {
        width: this.props.windowSize.width > 500 ? 500 : this.props.windowSize.width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      painting: {
        width: "28vh",
        height: "40vh",
        backgroundColor: "#222222"
      },
    }

    return (
      <div style={styles.wrapper}>
      <div style={styles.flexWrapper}>
        <div style={styles.paintingwrapper} >
          <div style={styles.painting} />
        </div>
        <div style={styles.paintingwrapper} >
          <div style={styles.painting} />
        </div>
        <div style={styles.paintingwrapper} >
          <div style={styles.painting} />
        </div>
      </div>
      </div>
    );
  }


}

export default MainStage;
