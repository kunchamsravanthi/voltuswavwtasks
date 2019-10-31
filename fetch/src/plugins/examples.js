import {LoggerToken} from 'fusion-tokens';
import {createToken} from 'fusion-core';

export const ExampleToken = createToken('ExampleToken');

export default createPlugin({
  deps: {logger: LoggerToken},
  provides({logger}) {
    return {
      sayHello() {
        logger.log('hello world');
      },
    };
  },
});