// @flow
import React from 'react';
import {styled} from 'fusion-plugin-styletron-react';



const FusionStyle = styled('div', {
  fontSize: '80px',
  color: 'rgba(0,0,0,.8)',
  paddingRight: '30px',
  display: 'flex',
});

const Home = () => (
  <FusionStyle>Fusion.js</FusionStyle>

);

export default Home;
