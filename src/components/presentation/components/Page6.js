import React, { Component } from 'react';

class MainStage extends Component {
  state = {

  }

  currentInterval = null;

  render() {
    return (
      <div style={this.styles.mainWindow}>

        <div>
          <div style={this.styles.mainInfo}>Wykorzystanie aplikacji</div>
          <div style={this.styles.additional}>
            <div>Stworzone oprogramowanie może posłużyć jako baza do innych aplikacji. Stworzone moduły pozwalają na łatwe użycie funkcjonalnych części aplikacji w podobnych projektach.</div>
          </div>
        </div>
      </div>
    );
  }

  styles = {
    mainWindow: {
      backgroundColor: "rgba(139,131,120,0.15)",
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
      width: "60%",
      marginLeft: "20%"
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
