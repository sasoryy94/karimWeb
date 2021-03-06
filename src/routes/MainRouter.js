import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { NavBar } from '../components/NavBar'
import { Currency } from "../components/projects/currency/Currency";
import { About } from "../pages/About";
import { Contact } from '../pages/Contact';
import { LandingPage } from '../pages/LandingPage';
import { Projects } from '../pages/Projects'

export const MainRouter = () => {
    return (
        <Router>
            <NavBar></NavBar>
    
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path='/project/currency' component={Currency}/>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <LandingPage />
              </Route>
            </Switch>
           

        </Router>
      );
}
