import React from "react";
import { Link } from "react-router-dom";
import vMachine from "./VendingMachine.jpeg";

function VendingMachine() {
  return(
    <div
      className="VendingMachine"
      style={{ backgroundImage: `url(${vMachine})` }}>
      <div>
        <h1>hello i am a vending machine. what would you like to eat?</h1>
      </div>
      <div>
        <h1><Link to="/soda">soda</Link></h1>
        <h1><Link to="/chips">chips</Link></h1>
        <h1><Link to="/sardines">fresh sardines</Link></h1>
      </div>
    </div>
  );
}

export default VendingMachine;
