import {createToken} from 'fusion-core';
import {ExampleToken} from './examples.js';

export default createPlugin({
  deps: {example: ExampleToken},
  provides({example}) {
    example.sayHello();
  },
});