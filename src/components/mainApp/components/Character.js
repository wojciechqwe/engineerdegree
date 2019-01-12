import React, { Component } from 'react';

class Character extends Component {
	state = {
		wrapper: {
			position: "fixed",
			transform: "translateY(250px)"
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				wrapper: {
					position: "fixed",
					transition: "2s",
					transform: "translateY(0px)"
				}
			})
		}, 6000);
	}

	render() {
		let style = {
			character: {
				position: "absolute",
				zIndex: 100,
				top: this.props.characterStyle.top,
				left: this.props.characterStyle.left
			},
		}
		return (
			<div style={style.character}>
				<div style={this.state.wrapper}>
					<div style={this.styles.head}></div>
					<div style={this.styles.body}></div>
				</div>
			</div>
		);
	}

	styles = {
		head: {
			position: "absolute",
			height: "14vh",
			width: "14vh",
			borderRadius: "50%",
			backgroundColor: "#333333"
		},
		body: {
			height: "14vh",
			width: "10vh",
			marginLeft: "2vh",
			marginTop: "6vh",
			borderRadius: 10,
			backgroundColor: "#cccccc"
		}
	}
}

export default Character;
