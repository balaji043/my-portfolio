import Layout from 'components/Layout';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { pages } from 'utils';

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {pages.map(e => <Route key={'route' + e.to} exact path={e.to} component={e.component} />)}

        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
