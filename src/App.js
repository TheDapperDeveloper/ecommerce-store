import "./App.css";
import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Header />
          <Route path="/home">
            <Home />
          </Route>
          {/* <Route path="/inventory"></Route>
          <Route path="/cart"></Route> */}
        </div>
      </Switch>
    </Router>
  );
}

export default App;
