import React, { Component } from 'react';
import Logos from '../../../resources/assets/logos.png';

class MainStage extends Component {
  state = {

  }

  currentInterval = null;

  render() {
    return (
      <div style={this.styles.mainWindow}>

        <div>
          <div style={this.styles.mainInfo}>Wybór technologii</div>
          <div style={this.styles.additional}>
            <div>Podczas wyboru technologii ważnym czynnikiem było to na jakich platformach ma działać aplikacja. Wybór padł na technologie hybrydowe które pozwolą na stworzenie zarazem aplikacji desktopowej jak i aplikacji mobilnej. Z dostępnych technologii hybrydowych wybór padł na użycie biblioteki React.</div>
          </div>
          <div style={this.styles.imageWrapper}>
            <img src={Logos} style={this.styles.image}></img>
          </div>
        </div>
      </div>
    );
  }

  styles = {
    mainWindow: {
      backgroundColor: "rgba(152,251,152,0.2)",
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
    },
    imageWrapper: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    image: {
      height: "26vh"
    }
  }

}

export default MainStage;
