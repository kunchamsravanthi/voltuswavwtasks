// @flow
import App from 'fusion-react';
 import React from 'react';
import Reducer from './reducer';
import Enhancer,{EnhancerToken} from 'fusion-plugin-react-redux';
import Redux, {
  ReduxToken,
  ReducerToken,

  GetInitialStateToken,
} from 'fusion-plugin-react-redux';
// import Styletron from 'fusion-plugin-styletron-react';
import ReduxActionEmitterEnhancer from 'fusion-plugin-redux-action-emitter-enhancer';

import root from './root.js';

// export default () => {
//   const app = new App(root);
//   app.register(Styletron);
//   app.register(Router);
//   return app;
// };


export default function start() {
  const app = new App(root);
  app.register(ReduxToken, Redux);
  app.register(ReducerToken, Reducer);
  app.register(EnhancerToken, Enhancer);
  __NODE__ && app.register(GetInitialStateToken, async ctx => ({}));

  return app;
};
