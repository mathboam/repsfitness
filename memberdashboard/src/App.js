import React, { Fragment, Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BeatLoader } from "react-spinners";

const LayoutComponent = lazy(() => import("../src/comps/Layout/Dashboard"));
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
function App() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default App;
