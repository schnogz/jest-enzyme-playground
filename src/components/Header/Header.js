import React from 'react';
import styled from 'styled-components';


// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 2em;
  background: papayawhip;
`;

const Header = () => (
	<Wrapper>
		<Title>Jest Enzyme Test Playground</Title>
	</Wrapper>
);

export default Header;
