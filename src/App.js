import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import { createClient } from "@supabase/supabase-js";

import { Link } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Inventory from "./components/Inventory";
import CartContainer from "./components/CartContainer";
import {
  HeaderDiv,
  HeaderIcons,
  HeaderLink,
  LinkTitle,
} from "./styled-components/HeaderStyle";

import shoppingcart from "./styled-components/shopping-cart.png";
import garage from "./styled-components/garage.png";
import home from "./styled-components/home.png";

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
    if (error) console.log("error", error);
  };
  return (
    <Router>
      <Switch>
        <div>
          <Header />
          <HeaderDiv>
            <HeaderLink to="/home">
              <HeaderIcons src={home} alt="" srcset="" />
              <LinkTitle>Home</LinkTitle>
            </HeaderLink>
            <HeaderLink to="/inventory">
              <HeaderIcons src={garage} alt="" srcset="" />
              <LinkTitle>Inventory</LinkTitle>
            </HeaderLink>
            <HeaderLink to="/cart">
              <HeaderIcons src={shoppingcart} alt="" srcset="" />
              <LinkTitle>Cart</LinkTitle>
            </HeaderLink>
          </HeaderDiv>
          <Route exact path="/home">
            <Home carInfo={carInfo} />
          </Route>
          <Route exact path="/inventory">
            <Inventory carInfo={carInfo} />
          </Route>
          <Route exact path="/cart">
            <CartContainer />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
