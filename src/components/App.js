import React, { PureComponent } from 'react'
import styled from 'styled-components';

import Header from './Header/Header'
import Post from './Post/Post'
import Posts from './Posts/Posts'

const Main = styled.main``;

class App extends PureComponent {
  render () {
    return <Main>
			<Header></Header>
			<Posts></Posts>
    </Main>
  }
}

export default App
