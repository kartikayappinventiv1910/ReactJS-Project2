import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { makeStyles, Typography } from "@material-ui/core";
import Header from "./header";
import Footer from "./footer";
import LandingScreen from "./landingscreen";
import Category from "./category";
import SubCategory from "./subcategory";

function RentalMS() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={"/"} exact>
          <LandingScreen />
        </Route>
        <Route path={"/EquipmentCatalog/:branch"} exact>
          <Category />
        </Route>
        {/* <Route path={"EquipmentCatalog/:branch/:subcategory"}><SubCategory /></Route> */}
      </Switch>
      <Footer />
    </Router>
  );
}
export default RentalMS;
