import React, { Component } from 'react';
import MainApp from './components/mainApp/Controler';
import StaticPage from './components/staticPage/Controler';
import Intro from './components/intro/Intro';

class App extends Component {
  state = {
    showIntro: true,
    showApp: false
  }

  onIntroOver = () => {
    this.setState({
      showApp: true
    })
    setTimeout(() => {
      this.setState({
        showIntro: false
      })
    }, 3500);
  }

  render() {
    return (
      <div className="App">
        {this.state.showApp ?
          <MainApp /> :
          <div />
        }
        {this.state.showIntro ?
          <Intro closeIntro={this.onIntroOver} /> :
          <div />
        }
        {/* <StaticPage /> */}
      </div>
    );
  }
}

export default App;
