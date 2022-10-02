import React from "react";
import Home from "./pages/Home/Home";
import Question from "./pages/Question/Question";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import InsuranceDescription from "./pages/InsuranceDescription/InsuranceDescription";

const routesMap = () => {
    return ([ 
            {
                "path": "/",
                "element": <Home />
            },
            {
                "path": "/questions",
                "element": <Question />
            },
            {
                "path": "/description",
                "element": <InsuranceDescription />
            },
            {
                "path": "*",
                "element": <PageNotFound/>
            }
        ]
    );
};

export default routesMap;
