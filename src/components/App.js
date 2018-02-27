import React, { PureComponent } from 'react'
import About from './About/about'
import styled from 'styled-components'

const Main = styled.main``;

class App extends PureComponent {
  render () {
    return <Main>
      <p>Hello!</p>
			<About></About>
    </Main>
  }
}

export default App
