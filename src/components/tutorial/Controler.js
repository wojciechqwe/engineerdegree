import React, { Component } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import cloneDeep from 'lodash/cloneDeep';
import WindowSizeListener from 'react-window-size-listener';

import Character from "./components/Character";
import Her from "./components/Her";
import MainStage from "./components/MainStage";
import Paintings from "./components/PaintingsWrapper";

class MainController extends Component {
  state = {
    velocity: 0.6,
    speed: {
      x: 0,
      y: 0
    },
    clickedButtons: [],
    character: {
      top: 0,
      left: 0
    },
    her: {
      top: 0,
      left: 0
    },
    windowSize: {
      height: 0,
      width: 0
    },
    currentMessage: "",
    position: 0
  }

  initialMessage = [
    "floor.      ",
    "you.    ",
    "her.",
    "go.",
    "tell her.",
    "move.                                                      (wasd.)",
  ];

  messageFar = [
    "first step behind you",
    "you are strong",
    "it can't be that hard",
    "you are handsome",
    "your jokes are the best",
    "you have clear shoes",
    "your appearance is godlike",
    "you can"
  ];

  messageMedium = [
    "hmm...",
    "are you sure?",
    "are you looking good?",
    "what if you don't have anything in common?",
    "there would be ackward silence.",
    "do you smell good?",
    "don't be so sure",
    "you should iron your shirt",
  ];

  messageClose = [
    "you are weak",
    "you are not enough",
    "you are hopeless",
    "you are bad",
    "you are half-man",
    "you are ugly",
    "you are boring",
    "you are worthless",
    "you are over engaged",
    "you are the worst"
  ];

  movingInterval = null;

  timer(ms) {
    return new Promise(res => setTimeout(res, ms));
  }

  componentDidMount() {
    this.readTheText(this.initialMessage, 0, 100, 1800);
  }

  onStartMove = direction => {
    let isInTable = false
    for (let alreadyClickedButton of this.state.clickedButtons) {
      if (alreadyClickedButton === direction) {
        isInTable = true;
        break;
      }
    }
    if (isInTable === false) {
      let newTableOfClickedButtons = this.state.clickedButtons;
      newTableOfClickedButtons.push(direction);
      this.setState({ clickedButtons: newTableOfClickedButtons });
    }
    this.calculateNewSpeed();
    if (!this.movingInterval) {
      this.onChangeMovingInterval();
    }
  }

  onStopMove = direction => {
    if (this.state.clickedButtons.length > 0) {
      for (let clickedButton of this.state.clickedButtons) {
        if (clickedButton === direction) {
          let newTableOfClickedButtons = [];
          this.state.clickedButtons.forEach(element => {
            if (element !== direction) {
              newTableOfClickedButtons.push(element);
            }
          });
          this.setState({ clickedButtons: newTableOfClickedButtons });
          this.calculateNewSpeed();
          clearInterval(this.movingInterval);
          this.onChangeMovingInterval();
          break;
        }
      }
    } else {
      clearInterval(this.movingInterval);
      this.movingInterval = null;
    }
  }

  calculateNewSpeed = () => {
    let newSpeed = { x: 0, y: 0 };
    if (this.state.clickedButtons.find((direction) => { return direction === "d" })) {
      newSpeed.x = this.state.velocity;
    }
    if (this.state.clickedButtons.find((direction) => { return direction === "a" })) {
      newSpeed.x = newSpeed.x - this.state.velocity;
    }
    if (this.state.clickedButtons.find((direction) => { return direction === "s" })) {
      newSpeed.y = this.state.velocity;
    }
    if (this.state.clickedButtons.find((direction) => { return direction === "w" })) {
      newSpeed.y = newSpeed.y - this.state.velocity;
    }
    this.setState({ speed: newSpeed });
  }

  onChangeMovingInterval = () => {
    this.movingInterval = setInterval(() => {
      let newCharacter = cloneDeep(this.state.character);
      if (newCharacter.left + this.state.speed.x > 20 && newCharacter.left + this.state.speed.x < this.state.windowSize.width - this.state.windowSize.height * 14 / 100 - 20) {
        newCharacter.left = newCharacter.left + this.state.speed.x;
      }
      if (newCharacter.top + this.state.speed.y < this.state.windowSize.height * 4 / 5 - 20 && newCharacter.top + this.state.speed.y > this.state.windowSize.height * 3 / 5) {
        newCharacter.top = newCharacter.top + this.state.speed.y;
      }
      this.setState({ character: newCharacter });
      if (newCharacter.left < this.state.windowSize.width / 3) {
        if (this.state.position !== 1) {
          this.setState({ position: 1 });
          this.readTheText(this.messageFar, 1, 100, 1800, true);
        }
      } else if (newCharacter.left < this.state.windowSize.width * 2 / 3) {
        if (this.state.position !== 2) {
          this.setState({ position: 2 });
          this.readTheText(this.messageMedium, 2, 80, 1000, true);
        }
      } else {
        if (this.state.position !== 3) {
          this.setState({ position: 3 });
          this.readTheText(this.messageClose, 3, 60, 100, true);
        }
      }
    }, 10);
  }

  onChangeWindowSize = (windowSize) => {
    if (this.state.character.top === 0) {
      this.setState({
        character: {
          top: windowSize.windowHeight * 7.5 / 10,
          left: 50
        },
        her: {
          top: windowSize.windowHeight * 7.1 / 10,
          left: windowSize.windowWidth * 9 / 10
        }
      })
    }
    this.setState({
      windowSize: {
        height: windowSize.windowHeight,
        width: windowSize.windowWidth
      }
    });
  }

  async readTheText(message, position, speed, cooldown, eternal) {
    console.log(message);
    do {
      for (let singleInfo of message) {
        if (position !== this.state.position) {
          console.log("stopped " + position);
          return;
        }
        console.log(singleInfo + " + " + position);
        this.readOneLine(singleInfo, position, speed);
        await this.timer(singleInfo.length * speed + cooldown);
      } 
    }
    while (eternal);
  }

  readOneLine = (line, position, speed) => {
    let index = 0;
    this.setState({ currentMessage: "" });
    this.currentInterval = setInterval(() => {
      if (position !== this.state.position) {
        console.log("STOPPED " + position);
        return;
      }
      if (index < line.length) {
        let newCurrentMessage = this.state.currentMessage;
        newCurrentMessage = newCurrentMessage + line[index];
        this.setState({ currentMessage: newCurrentMessage });
        index++;
      } else {
        clearInterval(this.currentInterval);
        return;
      }
    }, speed);
  }



  render() {
    return (
      <div>
        {this.props.windowHeight}
        <KeyboardEventHandler
          handleKeys={['w', 'a', 's', 'd']}
          handleEventType="keydown"
          onKeyEvent={(key, e) => this.onStartMove(key)} />
        <KeyboardEventHandler
          handleKeys={['w', 'a', 's', 'd']}
          handleEventType="keyup"
          onKeyEvent={(key, e) => this.onStopMove(key)} />
        <WindowSizeListener onResize={windowSize => {
          this.onChangeWindowSize(windowSize)
        }} />
        <Character characterStyle={this.state.character} />
        <Her characterStyle={this.state.her} />
        <MainStage />
        <Paintings message={this.state.currentMessage} />
      </div>
    );
  }
}


export default MainController;
