import React from 'react';
import { Route, Switch } from 'wouter';
import { LandingView } from 'views/Landing';
import { paths } from 'config/paths';

export function Router() {
  return (
    <Switch>
      <Route path={paths.lading} component={LandingView} exact />
      <Route>404, Not Found!</Route>
    </Switch>
  )
}
