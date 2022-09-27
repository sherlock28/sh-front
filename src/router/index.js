import React from 'react';
import { Route, Switch } from 'wouter';
import { LandingView } from 'views/Landing';
import { SignInView } from 'views/SignIn';
import { SignUpView } from 'views/SignUp';
import { ForgotterPassView } from "views/ForgotterPass";
import { SearchView } from "views/Search";
import { MembersView } from "views/Members";
import { HouseRegisterView } from "views/HouseRegister";
import { PublicationRegisterView } from "views/PublicationRegister";
import { paths } from 'config/paths';

export function Router() {
  return (
    <Switch>
      <Route path={paths.lading} component={LandingView} exact />
      <Route path={paths.login} component={SignInView} exact />
      <Route path={paths.register} component={SignUpView} exact />
      <Route path={paths.forgetterpass} component={ForgotterPassView} exact />
      <Route path={paths.search} component={SearchView} exact />
      <Route path={paths.houseRegister} component={HouseRegisterView} exact />
      <Route path={paths.postRegister} component={PublicationRegisterView} exact />
      <Route path={paths.members} component={MembersView} exact />
      <Route>404, Not Found!</Route>
    </Switch>
  )
}
