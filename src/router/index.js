import React from 'react';
import { Route, Switch } from 'wouter';
import { LandingView } from 'views/Landing';
import { SignInView } from 'views/SignIn';
import { SignUpView } from 'views/SignUp';
import { paths } from 'config/paths';

export function Router() {
  return (
    <Switch>
      <Route path={paths.lading} component={LandingView} exact />
      <Route path={paths.login} component={SignInView} exact />
      <Route path={paths.register} component={SignUpView} exact />
      <Route>404, Not Found!</Route>
    </Switch>
  )
}
