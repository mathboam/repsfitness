import { lazy } from "react";
const DashboardComponent = lazy(() => import("./pages/Dashboard"));
const WeightComponent = lazy(() => import("./pages/Weights"));
const StepsComponent = lazy(() => import("./pages/Steps"));

const routes = [
  {
    path: "/weights",
    name: "Weights",
    exact: true,
    component: WeightComponent,
  },
  {
    path: "/",
    name: "Dashboard",
    exact: true,
    component: DashboardComponent,
  },
  {
    path: "/steps",
    exact: true,
    name: "Steps",
    component: StepsComponent,
  },
];

export default routes;
