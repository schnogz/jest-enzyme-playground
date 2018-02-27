import React from 'react';
import styled from 'styled-components';

const Title = styled.a`
  font-size: 2em;
  color: palevioletred;
  text-decoration: none;
`;

export default class HoverLink extends React.Component {
	constructor(props) {
		super(props);

		this._onMouseEnter = this._onMouseEnter.bind(this);
		this._onMouseLeave = this._onMouseLeave.bind(this);

		this.state = {
			hovered: false,
		};
	}

	_onMouseEnter() {
		this.setState({hovered: true});
		console.info('hovered:', this.state.hovered);
	}

	_onMouseLeave() {
		this.setState({hovered: false});
		console.info('hovered:', this.state.hovered);
	}

	render() {
		return (
			<Title
				href={this.props.page || '#'}
				target={'_blank'}
				onMouseEnter={this._onMouseEnter}
				onMouseLeave={this._onMouseLeave}
			>
				{this.props.children}
			</Title>
		);
	}
}