import React, { Component } from 'react';

import Painting from "./components/PaintingBlock";

import Painting1 from './../../resources/assets/me.jpg';

class MainController extends Component {
  render() {

    const style = {
      wrapper: {
        transform: "translateY(" + (!this.props.showStaticPage ? "100vh" : "14vh") + ")",
        position: "fixed",
        height: "86vh",
        width: "100vw",
        zIndex: "99999",
        backgroundColor: "#eee",
        overflowY: "scroll",
        transition: "1s"
      }
    }

    return (
      <div style={style.wrapper}>
        <Painting painting={Painting1} />
      </div>
    );
  }
}


export default MainController;
