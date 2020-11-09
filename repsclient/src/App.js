import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Accountability from "./pages/Accountability";
import Testimonials from "./pages/Testimonials";
import SupportServices from "./pages/SupportServices";
import Programs from "./pages/Programs";
import LifeCoaching from "./pages/LifeCoaching";
import "aos/dist/aos.css";
import Registration from "./pages/registration/registration";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  });
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path={"/"}>
            <LandingPage />
          </Route>
          <Route path={"/programs"}>
            <Programs />
          </Route>
          <Route path={"/testimonials"}>
            <Testimonials />
          </Route>
          <Route path={"/support"}>
            <SupportServices />
          </Route>
          <Route path={"/lifecoaching"}>
            <LifeCoaching />
          </Route>
          <Route path={"/accountability"}>
            <Accountability />
          </Route>
          <Route path={"/register"}>
            <Registration />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
