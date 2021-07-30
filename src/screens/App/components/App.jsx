import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "./Navbar";

// bind route with each pages
import routes from "../route";

export const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <div className="container my-5">
          <Switch>
            {/* <Route path='' component='' /> */}
            <Route {...routes.HOME} />
            <Route {...routes.SHOP} />
            <Route {...routes.ABOUT} />

            {/* Subroutes of Shop */}
            <Route {...routes.SHOP.routes[0]} />
          </Switch>
        </div>
      </Router>
    </>
  );
};
