// // // @flow
// import App from 'fusion-react';
// import Router from 'fusion-plugin-react-router';
// import Styletron from 'fusion-plugin-styletron-react';

// import root from './root.js';

// export default () => {
//   const app = new App(root);
//   app.register(Styletron);
//   app.register(Router);
//   return app;
// };
// import App from 'fusion-react';
import {LoggerToken} from 'fusion-tokens';
import Example, {ExampleToken} from './plugins/examples.js';
import Foo from './plugins/foo.js';

export default () => {
  const app = new App();
  app.register(LoggerToken, console);
  app.register(ExampleToken, Example);
  app.register(Foo);
  return app;
};