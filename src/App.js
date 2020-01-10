import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScreenInterface from "./ScreenInterface/ScreenInterface";
function App() {
  return (
    <div>
      <Router>
        <Route exact path={`/`} component={ScreenInterface} />
      </Router>
    </div>
  );
}

export default App;
