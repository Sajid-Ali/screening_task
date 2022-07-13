import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.css";

import { useEffect } from "react";

import "./App.css";
import Main from "./containers/Main";

const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#ccc";
  }, []);
  return (
    <div className="App">
      <Main />
    </div>
  );
};

export default App;
