import React, { Component } from 'react';

class MainStage extends Component {
  state = {

  }

  currentInterval = null;

  render() {
    return (
      <div style={this.styles.mainWindow}>

        <div>
          <div style={this.styles.mainInfo}>Realizacja projektu</div>
          <div style={this.styles.additional}>
            <div>Realizacja projektu została rozłożona na dwie części.<br/>W pierwszej z nich zaprojektowane został sposób działania wszystkich potrzebnych w aplikacji modułów, oraz stworzenie designu interfejsu użytego w programie.<br/>Druga część odpowiada za implementacje zaprojektowanych modułów, oraz ekranów.</div>
          </div>
        </div>
      </div>
    );
  }

  styles = {
    mainWindow: {
      backgroundColor: "rgba(220,20,60,0.15)",
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    mainInfo: {
      color: "#2a2a2a",
      fontSize: "8vh",
      textAlign: "center",
      fontFamily: 'Old Standard TT',
      backgroundColor: "#fff",
      width: "40%",
      marginLeft: "30%"
    },
    additional: {
      marginTop: "10vh",
      fontSize: "3vh",
      display: "flex",
      justifyContent: "space-around",
      width: "80%",
      marginLeft: "10%",
      fontFamily: 'Old Standard TT'
    },
    blue: {
      color: "#61dbfb"
    }
  }

}

export default MainStage;
