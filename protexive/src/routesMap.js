import React from "react";
import Home from "./Home";

const routesMap = () => {
    return ([ 
            {
                "path": "/",
                "element": <Home />
            }
        ]
    );
};

export default routesMap;

