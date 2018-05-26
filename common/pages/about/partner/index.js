import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import App from '../../../App';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  font-size: 40px;
  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
`;

const Partner = (props) => {
  return (
    <App>
      <Helmet title="Helmet ku" />
      <Container>
        <p>Get Ready with Styled Components is goo!</p>
        <a href="/contact">GoooooLink</a>
      </Container>
    </App>
  );
};

export default Partner;
