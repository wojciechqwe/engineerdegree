import React, { Component } from 'react';
import Logos from '../../../resources/assets/clouds.png';

class MainStage extends Component {
  state = {

  }

  currentInterval = null;

  render() {
    return (
      <div style={this.styles.mainWindow}>

        <div>
          <div style={this.styles.mainInfo}>Koncepcja aplikacji</div>
          <div style={this.styles.additional}>
            <div>Stworzenie aplikacji pozwalającej na zwiedzenie wirtualnej wystawy. Użytkownik może swobodnie się poruszać i rozmawiać o napotkanych dziełach, dzieki czemu całość doświadczenia jest interesująca oraz spersonalizowana.</div>
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
      backgroundColor: "rgba(238,130,238,0.15)",
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
      height: "22vh",
      padding: "3vh",
      opacity: 0.7
    }
  }

}

export default MainStage;
