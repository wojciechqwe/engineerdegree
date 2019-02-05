import React, { Component } from 'react';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';

const animationLength = 10;

class MainStage extends Component {

  state = {
    i: 1,
    firstSlide: {
      width: "100vw",
      height: "100vh",
      backgroundColor: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      zIndex: 1000
    },
    menu: {
      position: "fixed",
      fontSize: "3vh",
      display: "flex",
      alignItems: "center",
      width: "30vw",
      height: "100vh",
      fontFamily: 'Old Standard TT',
      zIndex: 1000,
      transform: "translateX(-30vw)"
    },
    mainPresentation: {
      left: "30vw",
      width: "70vw",
      height: "100vh",
      position: "fixed",
      zIndex: 1000,
      transform: "translateX(70vw)"
    },
    wrapper: {
      transition: "2s",
      opacity: 1,
      zIndex: 1000,
      position: "fixed"
    }
  }



  setNextSlide = () => {
    let i = this.state.i;
    this.setState({
      mainPresentation: {
        left: "30vw",
        width: "70vw",
        height: "100vh",
        position: "fixed",
        zIndex: 1000,
        transform: "translateY(-" + i + "00vh)",
        transition: "2s"
      },
      i: i + 1
    });
  }

  nextSlide = () => {
    if (this.state.i == 1) {
      this.setState({
        theme1: {
          backgroundColor: "rgba(97,219,251,0)",
          width: "30vw",
          transition: "2s"
        },
        theme2: {
          backgroundColor: "rgba(238,130,238,0.15)",
          width: "30vw",
          transition: "2s"
        }
      });
    }

    if (this.state.i == 2) {
      this.setState({
        theme2: {
          backgroundColor: "rgba(238,130,238,0)",
          width: "30vw",
          transition: "2s"
        },
        theme3: {
          backgroundColor: "rgba(152,251,152,0.2)",
          width: "30vw",
          transition: "2s"
        }
      });
    }

    if (this.state.i == 3) {
      this.setState({
        theme3: {
          backgroundColor: "rgba(152,251,152,0)",
          width: "30vw",
          transition: "2s"
        },
        theme4: {
          backgroundColor: "rgba(220,20,60,0.15)",
          width: "30vw",
          transition: "2s"
        }
      });
    }

    if (this.state.i == 4) {
      this.setState({
        theme4: {
          backgroundColor: "rgba(220,20,60,0)",
          width: "30vw",
          transition: "2s"
        },
        theme5: {
          backgroundColor: "rgba(139,131,120,0.15)",
          width: "30vw",
          transition: "2s"
        }
      });
    }
    if (this.state.i < 5) {
      this.setNextSlide();
    } else {
      this.setState({
        mainPresentation: {
          left: "30vw",
          width: "70vw",
          height: "100vh",
          position: "fixed",
          zIndex: 1000,
          transform: "translate(70vw, -400vh)",
          transition: "2s"
        },
        menu: {
          position: "fixed",
          fontSize: "3vh",
          display: "flex",
          alignItems: "center",
          width: "30vw",
          height: "100vh",
          fontFamily: 'Old Standard TT',
          zIndex: 1000,
          transform: "translateX(-30vw)",
          transition: "2s",
        },
      });
      setTimeout(() => {
        this.setState({
          wrapper: {
            transition: "2s",
            opacity: 0,
            zIndex: 1000,
            position: "fixed"
          }
        })
      }, 1000);
      setTimeout(() => {
        this.setState({
          wrapper: {
            transition: "2s",
            opacity: 0,
            zIndex: 0,
          }
        })
      }, 4000);
    }
  }

  hideFirstSlide = () => {
    this.setState({
      i: 1,
      firstSlide: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        zIndex: 1000,
        transition: "2s",
        opacity: 0
      },
      menu: {
        position: "fixed",
        fontSize: "3vh",
        display: "flex",
        alignItems: "center",
        width: "30vw",
        height: "100vh",
        fontFamily: 'Old Standard TT',
        zIndex: 1000,
        transition: "1s",
        transitionDelay: "2s"
      },
      mainPresentation: {
        left: "30vw",
        width: "70vw",
        height: "100vh",
        position: "fixed",
        zIndex: 1000,
        transition: "2s",
        transitionDelay: "3s"
      },
    });
    setTimeout(() => {
      this.setState({
        theme1: {
          backgroundColor: "rgba(97,219,251,0.15)",
          width: "30vw",
          transition: "2s"
        },
      });
    }, 4000);
  }

  render() {
    return (
      <div style={this.state.wrapper}>
        <div style={this.styles.background} />
        <div style={this.state.firstSlide} onClick={this.hideFirstSlide}>
          <Page1 />
        </div>
        <div style={this.state.mainPresentation} onClick={this.nextSlide}>
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Page6 />
        </div>
        <div style={this.state.menu}>
          <div>
            <div style={this.state.theme1}>Wstęp</div>
            <div style={this.state.theme2}>Koncepcja aplikacji</div>
            <div style={this.state.theme3}>Wybór technologii</div>
            <div style={this.state.theme4}>Realizacja projektu</div>
            <div style={this.state.theme5}>Wykorzystanie aplikacji</div>
          </div>
        </div>
      </div>
    );
  }

  styles = {
    background: {
      width: "100vw",
      height: "100vh",
      backgroundColor: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      zIndex: 1000
    },
  }
}

export default MainStage;
