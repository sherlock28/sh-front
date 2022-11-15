import React from "react";
import { Route, Switch } from "wouter";
import { LandingView } from "views/Landing";
import { SignInView } from "views/SignIn";
import { TagsView } from "views/Tags";
import { QuestionsView } from "views/Questions";
import { SignUpView } from "views/SignUp";
import { ProfileView } from "views/Profile";
import { ForgotterPassView } from "views/ForgotterPass";
import { SearchView } from "views/Search";
import { PublicationDetailView } from "views/PublicationDetail";
import { AboutUsView } from "views/AboutUs";
import { MembersView } from "views/Members";
import { HouseRegisterView } from "views/HouseRegister";
import { PublicationRegisterView } from "views/PublicationRegister";
import { FindRoommateView } from "views/FindRoommate";
import { RoommateProfileView } from "views/RoommateProfile";
import { paths } from "config/paths";

export function Router() {
  return (
    <Switch>
      <Route path={paths.landing} component={LandingView} exact />
      <Route path={paths.login} component={SignInView} exact />
      <Route path={paths.register} component={SignUpView} exact />
      <Route path={paths.tags} component={TagsView} exact />
      <Route path={paths.questions} component={QuestionsView} exact />
      <Route path={paths.account} component={ProfileView} exact />
      <Route path={paths.forgetterpass} component={ForgotterPassView} exact />
      <Route path={paths.search} component={SearchView} exact />
      <Route path={paths.publicationDetail} component={PublicationDetailView} exact />
      <Route path={paths.houseRegister} component={HouseRegisterView} exact />
      <Route path={paths.publicationRegister} component={PublicationRegisterView} exact />
      <Route path={paths.members} component={MembersView} exact />
      <Route path={paths.aboutUs} component={AboutUsView} exact />
      <Route path={paths.findRoommate} component={FindRoommateView} exact />
      <Route path={paths.roommateAccount} component={RoommateProfileView} exact />
      <Route>404, Not Found!</Route>
    </Switch>
  )
}
