import React, { Component } from 'react';

import Painting from "./components/PaintingBlock";
import TopMenu from "./components/TopMenu";

import Painting1 from './../../resources/assets/painting1.jpg';
import Painting2 from './../../resources/assets/painting2.jpg';
import Painting3 from './../../resources/assets/painting3.jpg';
import Painting4 from './../../resources/assets/painting4.jpg';
import Painting5 from './../../resources/assets/painting5.jpg';

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
        <Painting painting={Painting2} showReverse />
        <Painting painting={Painting3} />
        <Painting painting={Painting4} showReverse />
        <Painting painting={Painting5} />
      </div>
    );
  }
}


export default MainController;
