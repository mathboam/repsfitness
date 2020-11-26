import { lazy } from "react";
const DashboardComponent = lazy(() => import("../pages/Dashboard"));
const StepsComponent = lazy(() => import("../pages/Steps"));
const MembersComponent = lazy(() => import("../pages/Members"));
const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: DashboardComponent,
    exact: true,
  },
  {
    path: "/steps",
    name: "Steps",
    component: StepsComponent,
    exact: true,
  },
  {
    path: "/members",
    name: "Members",
    component: MembersComponent,
    exact: true,
  },
];

export default routes;
