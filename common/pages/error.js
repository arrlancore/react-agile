import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import App from '../App';

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

const Error = (props) => {
  return (
    <App>
      <Helmet>
        <title>React Starter</title>
        <meta name="description" content="Ready go react for super web." />
      </Helmet>
      <Container>
        <p>Something error</p>
      </Container>
    </App>
  );
};

export default Error;
