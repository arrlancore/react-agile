import React from 'react';
import Helmet from 'react-helmet';
const head = (props) => <Helmet defer={false}>{props.children}</Helmet>;
export default head;
