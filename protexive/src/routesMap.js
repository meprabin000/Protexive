import React from "react";
import Home from "./pages/Home/Home";
import Question from "./pages/Question/Question";

const routesMap = () => {
    return ([ 
            {
                "path": "/",
                "element": <Home />
            },
            {
                "path": "/questions",
                "element": <Question />
            }
        ]
    );
};

export default routesMap;
