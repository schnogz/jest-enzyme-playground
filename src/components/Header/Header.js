import React from 'react';
import HoverLink from './../HoverLink/HoverLink';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin: .4em;
  padding: 2em;
  background: papayawhip;
  text-align: center;
`;

const Header = () => (
	<Wrapper>
		<HoverLink page="https://www.github.com/schnogz/jest-enzyme-playground.git">Jest Enzyme Test Playground</HoverLink>
	</Wrapper>
);

export default Header;
