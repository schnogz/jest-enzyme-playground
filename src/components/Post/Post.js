import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 1.2em;
  color: palevioletred;
`;

const Wrapper = styled.section`
  margin: .4em;
  padding: .2em;
  background: papayawhip;
`;

const Post = (props) => (
	<Wrapper>
		<Title>
			{props.titleLink
				? <Link to={`/post/${props.slug}`}>{props.title}</Link>
				: props.title}
		</Title>
		<p>{props.excerpt}</p>
	</Wrapper>
);

export default Post;