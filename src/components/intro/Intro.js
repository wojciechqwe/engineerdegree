import React, { Component } from 'react';

class MainStage extends Component {
  state = {
    currentMessage: "",
    buttonFill: {
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
  }

  message = [
    "hihihi heheheh :D!",
    "my name is wojciech.",
    "i don't want to bore you",
    "so i will cut the long story short",
    "well...",

    "there was a girl",
    "you know that feeling, right?",
    "i know you f*$#ing do.",
    "when you wanna hug her tight",
    "and make her feel alright",
    "just because.",
    "you don't know why you like her",
    "didn't really thought about it",
    "me neither",
    "maybe, that's because of the way she eats?",
    "or how she awkwardly dance, to radio songs in a car?",
    "or the way she makes the snowballs in a snowy day?",
    "maybe",
    "i don't know",
    "so i tried to find those things",
    "and i still do",
    // "alone",
    "just because."
  ];

  currentInterval = null;

  timer(ms) {
    return new Promise(res => setTimeout(res, ms));
  }

  onStartAnimation = () => {
    this.setState({
      buttonFill: {
        width: 120,
        height: 120,
        backgroundColor: "#fff",
        transition: "1s",
        opacity: 1
      }
    })
    setTimeout(() => {
      this.setState({
        buttonFill: {
          width: 120,
          height: 120,
          backgroundColor: "#fff",
          transition: "1s",
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
