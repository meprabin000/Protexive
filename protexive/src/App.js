import React from "react";
import "./App.css";
import Layout from "./Layout";
import { useEffect } from "react";

function App() {
  useEffect(() => {

    return (function(d, m){

        var kommunicateSettings =

            {"appId":"18078ed6e90b3f22ce16d29068a549d20","popupWidget":true,"automaticChatOpenOnNavigation":true};

        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;

        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";

        var h = document.getElementsByTagName("head")[0]; 
        h.appendChild(s);

        window.kommunicate = m; m._globals = kommunicateSettings;

    })(document, window.kommunicate || {});

    }, []);
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
