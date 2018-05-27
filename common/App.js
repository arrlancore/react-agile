import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
// Our single Styled Component definition
const Global = () => injectGlobal`
  ${styledNormalize}
  body {
    padding: 0;
  }
`;

const Container = styled.div`
  background: #fff;
`;

// set schildren as array
class App extends Component {
  render() {
    Global();
    return <Container>{this.props.children}</Container>;
  }
}

export default App;
