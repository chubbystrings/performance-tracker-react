import React from "react";
import Home from "../components/pages/Home";
import Dashboard from "../components/pages/Dashboard";

export const publicRoutes: Array<{
  path: string;
  exact: boolean;
  component: React.FC;
}> = [
    {
        path: '/',
        exact: true,
        component: Home
    },
];

export const privateRoutes: Array<{
    path: string;
    exact: boolean;
    component: React.FC;
  }> = [
      {
          path: '/dashboard',
          exact: true,
          component: Dashboard
      }
  ];
