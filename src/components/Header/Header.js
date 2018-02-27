import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  margin: .4em;
  padding: .2em;
  background: papayawhip;
`;

const Header = () => (
	<Wrapper>
		<Title>Jest Enzyme Test Playground</Title>
	</Wrapper>
);

export default Header;
