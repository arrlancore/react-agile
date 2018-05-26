import React from 'react';
import Loadable from 'react-loadable';
import styled from 'styled-components';
import App from '../../App';
import Head from '../../Head';

const LoadableComponent = Loadable({
  loader: () => import('./input'),
  loading: () => <Loading />,
});

function Loading(props) {
  if (props.error) {
    return (
      <div>
        Error! <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else if (props.timedOut) {
    return (
      <div>
        Taking a long time... <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}

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
      <Head>
        <title>Contact Us</title>
      </Head>
      <Container>
        <p>Contact Us</p>
        <LoadableComponent />
      </Container>
    </App>
  );
};

export default Contact;
