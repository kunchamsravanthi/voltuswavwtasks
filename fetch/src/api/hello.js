import {LoggerToken} from 'fusion-tokens';

export default createPlugin({
  deps: {console: LoggerToken},
  middleware({console}) {
    return (ctx, next) => {
      if (ctx.method === 'POST' && ctx.path === '/api/hello') {
        ctx.body = {greeting: 'hello'};
        console.log('hello');
      }
      return next();
    }
  }
});