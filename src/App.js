import React, { Component } from 'react';
import MainApp from './components/mainApp/Controler';
import Tutorial from './components/tutorial/Controler';
import Intro from './components/intro/Intro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainApp />
        {/* <Tutorial /> */}
        {/* <Intro closeIntro={this.onIntroOver}/> */}
      </div>
    );
  }
}

export default App;
