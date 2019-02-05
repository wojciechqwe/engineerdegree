import React, { Component } from 'react';
import Image1 from '../../../resources/assets/image1.jpg'
import Image2 from '../../../resources/assets/image2.png'

class MainStage extends Component {
  state = {

  }

  currentInterval = null;

  render() {
    return (
      <div style={this.styles.border}>
        <div style={this.styles.university}>
          <img src={Image2} style={this.styles.image}/>
          <div style={this.styles.universityText}>
            <div>POLITECHNIKA KRAKOWSKA im. T. Kościuszki</div>
            <div>Wydział Mechaniczny</div>
            <div>Instytut Informatyki Stosowanej</div>
          </div>
          <img src={Image1} style={this.styles.image}/>
        </div>
        <div style={this.styles.mainInfo}>Wykorzystanie biblioteki <span style={this.styles.blue}>react</span><br />do budowy<br />interaktywnego portfolio<span style={this.styles.blue}>.</span></div>
        <div style={this.styles.additional}>
          <div><b>_Promotor:</b><br />dr. hab. inż. Zbigniew Latała, prof. PK</div>
          <div><b>_Autor:</b><br />Wojciech Stanisz</div>
        </div>
      </div>
    );
  }

  styles = {
    mainInfo: {
      color: "#2a2a2a",
      fontSize: "8vh",
      textAlign: "center",
      fontFamily: 'Old Standard TT',
      border: "solid 2px rgba(0,0,0)"
    },
    additional: {
      backgroundColor: "rgba(97,219,251,0.15)",
      marginTop: "5vh",
      padding: "3vh",
      fontSize: "3vh",
      display: "flex",
      justifyContent: "space-around",
      width: "100vw",
      fontFamily: 'Old Standard TT'
    },
    university: {
      marginTop: "-5vh",
      padding: "3vh",
      fontSize: "3vh",
      display: "flex",
      justifyContent: "space-around",
      width: "100vw",
      fontFamily: 'Old Standard TT'
    },
    universityText: {
      textAlign: "center"
    },
    image: {
      height: "10vh"
    },
    blue: {
      color: "#61dbfb"
    },
    border: {

    }
  }

}

export default MainStage;
