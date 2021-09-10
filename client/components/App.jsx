import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Listings from "./Listings";
import AddPlant from "./AddPlant";
import PlantDetail from "./PlantDetail";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Listings} />
        <Route exact path="/add" component={AddPlant} />
        <Route exact path="/:id" component={PlantDetail} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
