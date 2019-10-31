// @flow
import React from 'react';
import {Route,Link, Switch} from 'fusion-plugin-react-router';
import Trans from './pages/trans';
import Home from './pages/home.js';
// import PageNotFound from './pages/pageNotFound.js';



const root = (
  <div>
  <ul>
      <li>
        <Link to="/"><a>Home</a></Link>
      </li>
      <li>
        <Link to="/trans">trans</Link>
      </li>
      {/* <li>
        <Link to="/pagenotFound"><a>pagenotFound</a></Link>
      </li> */}
      {/* <li>
        <Link to="/data">FetchData</Link>
      </li> */}
    </ul>
  <Switch>
    <Route exact path="/" component={Home} />
    {/* <Route component={PageNotFound} /> */}
    <Route exact path="/trans" component={Trans} />
    {/* <Route exact path="/component/index" component={Index} />
    <Route exact path="/redux/fetch" component={Fetch} />
    <Route exact path="/rpc/data" component={Data} /> */}
  </Switch>
  </div>
);

export default root;
// import {createPlugin} from 'fusion-core';

// export default createPlugin({
//   deps: {RPC: RPCToken},
//   middleware: ({RPCFactory}) => (ctx, next) => {
//     RPC.from(ctx).request('getUser', 1).then(console.log);
//   }
// });