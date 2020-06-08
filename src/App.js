import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Login = lazy(() => import('./containers/Login'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
