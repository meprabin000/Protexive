import React from "react";
import Home from "./pages/Home/Home";
import Match from "./pages/Match/Match";
import Question from "./pages/Question/Question";

const routesMap = () => {
  return [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/questions",
      element: <Question />,
    },
    {
      path: "/match",
      element: <Match />,
    },
  ];
};

export default routesMap;
