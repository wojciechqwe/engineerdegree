import React, { Component } from 'react';

class MainStage extends Component {
  state = {

  }

  currentInterval = null;

  render() {
    return (
      <div style={this.styles.mainWindow}>

        <div>
          <div style={this.styles.mainInfo}>Wstęp</div>
          <div style={this.styles.additional}>
            <div>Obecnie trendem jest by wszelkiego rodzaju wystawy czy prezentacje stawały się jak najbardziej interaktywne i przyjazne dla odwiedzających.<br/>Wpisując się w wyżej opisany trend założeniem aplikacji było stworzyć portfolio w interesującej i zajmującej formie.</div>
          </div>
        </div>
      </div>
    );
  }

  styles = {
    mainWindow: {
      backgroundColor: "rgba(97,219,251,0.15)",
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
