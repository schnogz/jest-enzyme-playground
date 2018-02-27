import React from 'react';
import styled from 'styled-components';
import HoverLink from './../HoverLink/HoverLink';
import Api from './../../services/api';

const Wrapper = styled.section`
  margin: .4em;
  padding: 2em;
  background: papayawhip;
`;

const Title = styled.a`
  font-size: 2em;
  color: palevioletred;
  text-decoration: none;
`;

class Posts extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loaded: false,
			posts: []
		};
	}

	componentDidMount() {
		Api.getPosts()
			.then(data => {
				const posts = data.data.children.map(obj => obj.data);
				this.setState({posts: posts, loaded: true});
			});
	}

	render() {
		return (
			<Wrapper>
				<HoverLink page='https://www.reddit.com/r/bitcoin/new.json?sort=top'>Hot /r/bitcoin Posts</HoverLink>
				<ul>
					{this.state.posts.map(post =>
						<li key={post.id}>{post.title}</li>
					)}
				</ul>
			</Wrapper>
		);
	}
}

export default Posts;