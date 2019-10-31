import test from 'tape-cup';
import createApp from '../main.js';

test('my test', t => {
  const app = createApp();

  // override the logger with a mock
  app.register(LoggerToken, noopLogger);

  // now we can run an end-to-end test without polluting logs

  t.end();
});