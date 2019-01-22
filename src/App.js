import React, { Component } from 'react';
import MainApp from './components/mainApp/Controler';
import StaticPage from './components/staticPage/Controler';
import Contact from './components/contact/Controler';
import Intro from './components/intro/Intro';

class App extends Component {
  state = {
    showIntro: true,
    showApp: false,
    showStaticPage: false,
    showContact: false
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

  onShowStaticPage = () => {
    const currentState = this.state.showStaticPage;
    this.setState({
      showStaticPage: !currentState
    })
  }

  onShowContact = () => {
    const currentState = this.state.showContact;
    this.setState({
      showContact: !currentState
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.showApp ?
          <MainApp onShowStaticPage={this.onShowStaticPage} onShowContact={this.onShowContact} showContact={this.state.showContact} showStaticPage={this.state.showStaticPage} /> :
          <div />
        }
        {this.state.showIntro ?
          <Intro closeIntro={this.onIntroOver} /> :
          <div />
        }
        <StaticPage showStaticPage={this.state.showStaticPage}/>
        <Contact showStaticPage={this.state.showContact}/>
      </div>
    );
  }
}

export default App;
