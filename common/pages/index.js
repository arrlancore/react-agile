import React from 'react';
import styled from 'styled-components';
import App from '../App';
import Head from '../Head';

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
      <Head defer="false">
        <title>React Agile - Starting your react quickly</title>
        <meta
          name="description"
          content="React app that ready to use for deploy"
        />
      </Head>
      <Container>
        <p>Welcome Home</p>
      </Container>
    </App>
  );
};

export default Partner;
