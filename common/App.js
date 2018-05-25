import React from 'react';
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
const App = (props) => {
  Global();
  return <Container>{props.children}</Container>;
};

export default App;
