import React from 'react';
import styled from 'styled-components';
import HoverLink from './../HoverLink/HoverLink';
import Api from './../../services/api';
import Post from './../Post/Post';

const Wrapper = styled.section`
  margin: .4em;
  padding: 2em;
  background: papayawhip;
`;

const List = styled.div`
	width:100%;
	height:100%;
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
				<List>
					{this.state.posts.map(post =>
						<Post key={post.id} post={post}/>
					)}
				</List>
			</Wrapper>
		);
	}
}

export default Posts;