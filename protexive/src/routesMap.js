import React from "react";
import Home from "./pages/Home/Home";
import Match from "./pages/Match/Match";
import Question from "./pages/Question/Question";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import InsuranceDescription from "./pages/InsuranceDescription/InsuranceDescription";
import Recommedation from "./pages/Recommendation/Recommedation";

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
      path: "/description",
      element: <InsuranceDescription />,
    },
    {
      path: "/match",
      element: <Match />,
    },
    {
      path: "/recs",
      element: <Recommedation />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ];
};

export default routesMap;
