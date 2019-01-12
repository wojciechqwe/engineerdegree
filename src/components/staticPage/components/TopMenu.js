import React, { Component } from 'react';

class MainController extends Component {
  state = {
 
  }

  render() {
    return (
      <div style={this.styles.wrapper}>
      <div style={this.styles.menu}>
      </div>        
      </div>
    );
  }

  styles = {
    wrapper: {
      height: 100,
    },
    menu: {
      position: "fixed",
      height: 100,
      width: "100vw",
      backgroundColor: "#fff",
      zIndex: 10
    }
  }
}


export default MainController;
