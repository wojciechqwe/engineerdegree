import React, { Component } from 'react';

class MainStage extends Component {
  render() {
    let styles = {
      wrapper: {
        position: "absolute",
        zIndex: 1000,
        width: "100%",
        height: "70vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      controls: {
        opacity: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }

    return (
      <div style={styles.wrapper}>
        {/* <div style={styles.controls}>
          <div style={this.styles.controls}>
            <div style={this.styles.modalName}>move.</div>
            <div style={this.styles.rowOfKeys}>
              <div style={this.styles.button}>w</div>
            </div>
            <div style={this.styles.rowOfKeys}>
              <div style={this.styles.button}>a</div>
              <div style={this.styles.button}>s</div>
              <div style={this.styles.button}>d</div>
            </div>
          </div>
        </div> */}
        <div style={this.styles.mainInfo}>
          {this.props.message}
        </div>
      </div>
    );
  }

  styles = {
    modalName: {
      position: "absolute",
      marginTop: -30,
      marginLeft: -25,
      fontSize: 20
    },
    controls: {
      position: "absolute",
      height: 190,
      width: 320,
      padding: 30,
      border: "solid 3px #000",
      transition: "1s"
    },
    rowOfKeys: {
      height: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    button: {
      height: 80,
      width: 80,
      margin: 5,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "solid 3px #000",
      fontSize: 30,
      borderRadius: 12
    },
    mainInfo: {
      fontSize: 60,
      
    }
  }

}

export default MainStage;
