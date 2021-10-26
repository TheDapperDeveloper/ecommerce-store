import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import { createClient } from "@supabase/supabase-js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Inventory from "./components/Inventory";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

function App() {
  const [carInfo, setCarInfo] = useState([]);
  useEffect(() => {
    carDatabaseInfo();
  }, []);

  const carDatabaseInfo = async () => {
    const { data, error } = await supabase.from("Cars").select("*");
    setCarInfo(data);
    console.log(data);
    if (error) console.log("error", error);
  };
  return (
    <Router>
      <Switch>
        <div>
          <Header />
          <Route path="/home">
            <Home carInfo={carInfo} />
          </Route>
          <Route path="/inventory">
            <Inventory carInfo={carInfo} />
          </Route>
          <Route path="/cart"></Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
