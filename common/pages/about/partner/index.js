import React from 'react';
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
      <Container>
        <p>Get Ready with Styled Components!</p>
      </Container>
    </App>
  );
};

export default Partner;
