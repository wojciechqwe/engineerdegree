import React, { Component } from 'react';
import LoadingImage1 from './../../resources/assets/LoadingCrop1.png';
import LoadingImage2 from './../../resources/assets/LoadingCrop2.png';
import LoadingImage3 from './../../resources/assets/LoadingCrop3.png';
import LoadingImage4 from './../../resources/assets/LoadingCrop4.png';

class MainStage extends Component {
  state = {
    currentMessage: "",
    buttonFill: {
      zIndex: 21,
      width: 120,
      height: 120,
      borderRadius: "50%",
      backgroundColor: "#fff",
      transition: "1s",
      opacity: 1,
      transform: "scale(0)"
    },
    pressButton: {
      height: 120,
      width: 120,
      border: "solid 2px #fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      transition: "1s",
    },
    wrapper: {
      position: "fixed",
      zIndex: 1000,
      transition: "4s",
      opacity: 1
    },
    loadingBackground: {
      zIndex: 19,
      height: 120,
      width: 120,
      backgroundColor: "#fff",
      transform: `translate(-120px, 0px)`,
      transition: "1s"
    },
    animationCount: 0,
    imageOpacity: {
      opacity: 1
    },
    loadingImage1: {
      zIndex: 20,
      height: 120,
      width: 120,
      position: "fixed",
      opacity: 1
    },
    currentImage: LoadingImage1
  }

  message = [
    "my name is wojciech.",
    "and this is my exhibition",
    // "so i will cut the long story short",
    // "well...",

    // "there was a girl",
    // "you know that feeling, right?",
    // "i know you f*$#ing do.",
    // "when you wanna hug her tight",
    // "and make her feel alright",
    // "just because.",
    // "you don't know why you like her",
    // "didn't really thought about it",
    // "me neither",
    // "maybe, that's because of the way she eats?",
    // "or how she awkwardly dance, to radio songs in a car?",
    // "or the way she makes the snowballs in a snowy day?",
    // "maybe",
    // "i don't know",
    // "so i tried to find those things",
    // "and i still do",
    // // "alone",
    // "just because."
  ];

  currentInterval = null;

  timer(ms) {
    return new Promise(res => setTimeout(res, ms));
  }

  componentDidMount = () => {
    let i = 1;
    setInterval(() => {
      let y;
      if (i % 2 == 1) {
        y = 120;
      } else {
        y = -120;
      }
      switch (i) {
        case 1:
          this.setState({ currentImage: LoadingImage1 });
          break;
        case 2:
          this.setState({ currentImage: LoadingImage2 });
          break;
        case 3:
          this.setState({ currentImage: LoadingImage4 });
          break;
        case 4:
          this.setState({ currentImage: LoadingImage3 });
          i = 0;
        default:
          break;
      }
      i++;
      this.setState({
        loadingBackground: {
          zIndex: 19,
          height: 120,
          width: 120,
          backgroundColor: "#fff",
          transform: `translate(${y}px, 0px)`,
          transition: "2s",
          transitionTimingFunction: "ease-out"
        }
      });
    }, 2000);
  }

  onStartAnimation = () => {
    this.setState({
      buttonFill: {
        zIndex: 21,
        width: 120,
        height: 120,
        backgroundColor: "#fff",
        transition: "1s",
        opacity: 1,
        position: "fixed"
      },
      imageOpacity: {
        opacity: 0
      }
    })
    setTimeout(() => {
      this.setState({
        buttonFill: {
          zIndex: 21,
          width: 120,
          height: 120,
          backgroundColor: "#fff",
          transition: "1s",
          opacity: 0,
          position: "fixed"
        },
        loadingImage1: {
          zIndex: 20,
          height: 120,
          width: 120,
          position: "fixed",
          opacity: 0
        },
        loadingBackgroundWrapper: {
          opacity: 0
        }
      })
    }, 1000);
    setTimeout(() => {
      this.setState({
        pressButton: {
          height: 70,
          width: 0,
          border: "solid 2px #fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          marginLeft: 6,
          transition: "1s",
        }
      })
    }, 2300);
    setTimeout(() => {
      this.readTheText();
    }, 3600);
  }

  closeIntro() {
    this.setState({
      wrapper: {
        position: "fixed",
        zIndex: 1000,
        transition: "4s",
        opacity: 0
      },
    });
  }

  async readTheText() {
    for (let singleInfo of this.message) {
      this.readOneLine(singleInfo);
      await this.timer(singleInfo.length * 100 + 1800);
    }
    this.closeIntro();
    this.props.closeIntro();
  }

  readOneLine = line => {
    let index = 0;
    this.setState({ currentMessage: "" });
    this.currentInterval = setInterval(() => {
      if (index < line.length) {
        let newCurrentMessage = this.state.currentMessage;
        newCurrentMessage = newCurrentMessage + line[index];
        this.setState({ currentMessage: newCurrentMessage });
        index++;
      } else {
        clearInterval(this.currentInterval);
        return;
      }
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.currentInterval);
  }

  render() {
    return (
      <div>
        <div style={this.state.wrapper}>
          <div style={this.styles.background}>
            <div style={this.styles.mainInfo}>{this.state.currentMessage}</div>
            <div onClick={this.onStartAnimation} style={this.state.pressButton}>
              <img src={this.state.currentImage} style={this.state.loadingImage1} alt="Logo" />
              <div style={this.state.loadingBackgroundWrapper}><div style={this.state.loadingBackground} /></div>
              <div style={this.state.buttonFill} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  styles = {
    background: {
      width: "100vw",
      height: "100vh",
      backgroundColor: "#2a2a2a",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    mainInfo: {
      color: "#fff",
      fontSize: 60,
      textAlign: "center"
    },
  }
}

export default MainStage;
