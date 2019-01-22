import React, { Component } from 'react';

class PaintingInfo extends Component {

  renderPicture = () => {
    return <div style={this.styles.paintingWrapper}>
      <img src={this.props.painting} style={this.styles.painting} />
    </div>
  }

  renderInfo = () => {
    return <div style={this.styles.infoWrapper}>
      <div style={this.styles.header}>Wojciech Stanisz</div>
      <div style={this.styles.info}>sadfasdf asdfsadfas asdfasdfasdf asdfasdfasda dfasdfa dfasdf asdfas dfasdfasdfdasfads fasdfasdfas dfadfasdfasd fasdf asdfadfas dfasfasdfa dfasdf a sdfasdf asd asdf asdf asdfa</div>
    </div>
  }

  render() {
    return (
      <div style={this.styles.wrapper}>
        {!this.props.showReverse ?
          <div style={this.styles.block}>
            {this.renderPicture()}
            {this.renderInfo()}
          </div>
          :
          <div style={this.styles.block}>
            {this.renderInfo()}
            {this.renderPicture()}
          </div>
        }
      </div>
    );
  }

  styles = {
    wrapper: {
      display: "flex",
      justifyContent: "center",
      padding: 20,
      marginBottom: 30
    },
    block: {
      display: "flex",
      height: 500,
      maxWidth: 1000
    },
    paintingWrapper: {
      position: "relative",
      width: "50%",
      display: "flex",
      justifyContent: "center"
    },
    painting: {
      maxHeight: 500,
      maxWidth: 500,
      resizeMode: "cover"
    },
    infoWrapper: {
      position: "relative",
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
    header: {
      textAlign: "center",
      padding: 10,
      fontSize: 40
    }
  }
}


export default PaintingInfo;
