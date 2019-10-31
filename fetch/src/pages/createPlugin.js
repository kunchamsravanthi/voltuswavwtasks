import App from 'fusion-react';
import {LoggerToken} from 'fusion-tokens';
import Example from './plugins/examples.js';

export default () => {
  const app = new App();
  app.register(Example);
  app.register(LoggerToken, console);
  return app;
};
