import React, { Fragment, lazy, Suspense } from "react";
import "./App.css";
import Layout from "./comps/layout";
import { BeatLoader } from "react-spinners";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const LoadingComponent = () => {
  return (
    <Fragment>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BeatLoader color="#3C94A3" size={10} />
      </div>
    </Fragment>
  );
};

const LayoutComponent = lazy(() => import("./comps/layout"));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={LoadingComponent()}>
        <Switch>
          <Route
            path={"/"}
            exact={false}
            render={(props) => <LayoutComponent />}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
