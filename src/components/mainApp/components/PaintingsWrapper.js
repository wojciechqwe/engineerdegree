import React, { Component } from 'react';
import Sound from 'react-sound';
import Painting1 from './../../../resources/assets/painting3.jpg';
import Sound1 from './../../../resources/sounds/glass.mp3';
import Painting2 from './../../../resources/assets/painting2.jpg';
import Sound2 from './../../../resources/sounds/glass.mp3';
import Painting3 from './../../../resources/assets/painting1.jpg';
import Sound3 from './../../../resources/sounds/glass.mp3';
import Painting4 from './../../../resources/assets/painting4.png';
import Sound4 from './../../../resources/sounds/glass.mp3';
import Painting5 from './../../../resources/assets/painting5.png';
import Sound5 from './../../../resources/sounds/glass.mp3';

const paintings = [Painting1, Painting2, Painting3, Painting4, Painting5];
const sounds = [Sound1, Sound2, Sound3, Sound4, Sound5];
class MainStage extends Component {
  state = {
    showDetailedPicture: false,
    currentPicture: null,
    currentAnswer: "",
    flexWrapper: {
      position: "absolute",
      height: "70vh",
      width: "100vw",
      zIndex: 1,
      display: "flex",
      justifyContent: "space-evenly",
      paddingTop: "15vh",
      transform: "scale(1.1) translateY(-500px)"
    },
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        flexWrapper: {
          position: "absolute",
          height: "70vh",
          width: "100vw",
          zIndex: 1,
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "15vh",
          transition: "3s",
          transform: "scale(1.12) translateY(0px)"
        },
      })
    }, 2000);
    setTimeout(() => {
      this.setState({
        flexWrapper: {
          position: "absolute",
          height: "70vh",
          width: "100vw",
          zIndex: 1,
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "15vh",
          transition: "3s",
          transform: "scale(1) translateY(0px)"
        },
      })
    }, 5010);
  }

  showDetailedPicture = (pictureNumber) => {
    this.setState({
      showDetailedPicture: true,
      currentPicture: paintings[pictureNumber]
    });

  }

  hideDetailedPicture = () => {
    this.setState({
      showDetailedPicture: false,
    });
  }

  render() {
    return (
      <div>
        <div style={this.styles.wrapper}>
          <div style={this.state.flexWrapper}>
            <div style={this.styles.paintingSmall}>
              <img src={Painting1} onClick={() => this.showDetailedPicture(0)} style={this.styles.paintingSmall} />
            </div>
            <div style={this.styles.paintingMedium} >
              <img src={Painting2} onClick={() => this.showDetailedPicture(1)} style={this.styles.paintingMedium} />
            </div>
            <div style={this.styles.paintingBig} >
              <img src={Painting3} onClick={() => this.showDetailedPicture(2)} style={this.styles.paintingBig} sd />
            </div>
            <div style={this.styles.paintingMedium} >
              <img src={Painting4} onClick={() => this.showDetailedPicture(3)} style={this.styles.paintingMedium} />
            </div>
            <div style={this.styles.paintingSmall} >
              <img src={Painting5} onClick={() => this.showDetailedPicture(4)} style={this.styles.paintingSmall} />
            </div>
          </div>
        </div>
        {this.state.showDetailedPicture ?
          <div onClick={this.hideDetailedPicture} style={this.styles.showPaintingWrapper}>
            <img src={this.state.currentPicture} style={this.styles.showPainting} />
            <div style={this.styles.subtitles}>
              {this.state.currentAnswer}
            </div>
            {/* <Sound
              url={Sound1}
              playStatus={Sound.status.PLAYING}
              playFromPosition={0 /* in milliseconds */}
            /> */}
          </div> :
          <div />
        }
      </div>
    );
  }

  styles = {
    wrapper: {
      position: "absolute",
      width: "100vw",
      height: "70vh",
      overflow: "hidden",
      transition: "2s",
    },
    paintingwrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    paintingBig: {
      width: "28vh",
      height: "40vh",
      overflow: "hidden",
    },
    paintingMedium: {
      width: "25vh",
      height: "35vh",
      overflow: "hidden"
    },
    paintingSmall: {
      width: "23vh",
      height: "32vh",
      overflow: "hidden"
    },
    showPaintingWrapper: {
      zIndex: 10001,
      height: "100vh",
      width: "100vw",
      backgroundColor: "rgba(0,0,0,0.8)",
      position: "fixed",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    showPainting: {
      height: "80vh",
      marginTop: "-7vh"
    },
    subtitles: {
      position: "fixed",
      bottom: 20,
      width: "100vw",
      textAlign: "center",
      color: "#fff",
      zIndex: 10002
    }
  }


}

export default MainStage;
