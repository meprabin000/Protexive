import React from "react";
import Home from "./pages/Home";

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

