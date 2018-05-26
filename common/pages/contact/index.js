import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import App from '../../App';

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

const Contact = (props) => {
  return (
    <App>
      <Helmet title="Contact ku" />
      <Container>
        <p>Contact Us</p>
      </Container>
    </App>
  );
};

export default Contact;
