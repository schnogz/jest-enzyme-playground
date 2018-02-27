import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	height:20%;
	width: 16%;
	display:inline-block;
	margin:1%;
	border: 1px solid grey;
`;

const Title = styled.a`
  font-size: 1.2em;
  color: palevioletred;
  text-decoration: none;
`;

export default class Post extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Wrapper>
				<Title href={this.props.post.url || '#'} target={'_blank'}>
					{this.props.post.title}
				</Title>
			</Wrapper>
		);
	}
};
