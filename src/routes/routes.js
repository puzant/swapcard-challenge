import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from '../pages/home'
import { ArtistDetails } from '../pages/artist-details'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/artist-details/:artistId" exact component={ArtistDetails} />
    </Switch>
  );
}

export default Routes;