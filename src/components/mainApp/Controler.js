import React, { Component } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import cloneDeep from 'lodash/cloneDeep';
import WindowSizeListener from 'react-window-size-listener';

import Character from "./components/Character";
import MainStage from "./components/MainStage";
import Paintings from "./components/PaintingsWrapper";
import CharacterConversationClouds from "./components/CharacterConversationClouds";

const paintingNames = [
  "painting1",
  "painting2",
  "painting3",
  "painting4",
  "painting5",
]

class MainController extends Component {
  state = {
    speed: {
      x: 0,
      y: 0
    },
    clickedButtons: [],
    character: {
      top: 0,
      left: 0
    },
    windowSize: {
      height: 0,
      width: 0
    },
    showMenu: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showMenu: true
      })
    }, 7000);
  }

  movingInterval = null;

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
      newSpeed.x = 1;
    }
    if (this.state.clickedButtons.find((direction) => { return direction === "a" })) {
      newSpeed.x = newSpeed.x - 1;
    }
    if (this.state.clickedButtons.find((direction) => { return direction === "s" })) {
      newSpeed.y = 1;
    }
    if (this.state.clickedButtons.find((direction) => { return direction === "w" })) {
      newSpeed.y = newSpeed.y - 1;
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
    }, 10);
  }

  onChangeWindowSize = (windowSize) => {
    if (this.state.character.top === 0) {
      this.setState({
        character: {
          top: windowSize.windowHeight * 7 / 10 - 20,
          left: windowSize.windowWidth / 2 - 110
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

  render() {
    let currentPainting = Math.floor((this.state.character.left + this.state.windowSize.width * 5 / 100) / (this.state.windowSize.width / 5));

    let styles = {
      topMenu: {
        position: "fixed",
        height: "15vh",
        width: "100vw",
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: this.props.showStaticPage || this.props.showContact ? "#eee" : "rgba(0,0,0,0)",
        transition: "1s",
        opacity: this.state.showMenu ? 1 : 0
      },
      staticPageButton: {
        height: "10vh",
        width: "10vh",
        backgroundColor: "#4a4a4a"
      },
      header:{
        fontSize: 40
      }
    }

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
        <div style={styles.topMenu}>
          <div style={styles.staticPageButton} onClick={this.props.onShowContact}></div>
          <div style={styles.header}> {this.state.character.top / this.state.windowSize.height < 0.65 && !this.props.showStaticPage ? paintingNames[currentPainting] : "Something"} </div>
          <div style={styles.staticPageButton} onClick={this.props.onShowStaticPage}></div>
        </div>
        <Character characterStyle={this.state.character} />
        <CharacterConversationClouds currentPainting={currentPainting} characterStyle={{ left: this.state.character.left, top: this.state.windowSize.height - this.state.character.top, percentageTop: this.state.character.top / this.state.windowSize.height }} windowSize={this.state.windowSize} />
        <MainStage />
        <Paintings characterStyle={{ left: this.state.character.left }} />
      </div>
    );
  }

  styles = {
    wrapper: {
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      zIndex: 1
    },
  }
}


export default MainController;
