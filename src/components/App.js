import React, { PureComponent } from 'react'
import Header from './Header/Header'
import styled from 'styled-components';

const Main = styled.main``;

class App extends PureComponent {
  render () {
    return <Main>
			<Header></Header>
    </Main>
  }
}

export default App
