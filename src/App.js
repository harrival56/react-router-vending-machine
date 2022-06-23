
import './App.css';
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Sardines from "./Sardines";
import Chips from "./Chips";
import Soda from "./Soda";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Route path="/" exact>
          <VendingMachine />
        </Route>
        <Route path="/soda" exact>
          <Soda />
        </Route>
        <Route path="/chips" exact>
          <Chips />
        </Route>
        <Route path="/sardines" exact>
          <Sardines />
      </Route>
    </BrowserRouter>
    </div>
  );
}

export default App;
