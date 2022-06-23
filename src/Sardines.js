import React from "react";
import { Link } from "react-router-dom";

function Sardines() {
  return (
    <div
      className="Sardines"
      style={{
        backgroundImage:
          "url(https://media.giphy.com/media/tVk4w6EZ7eGNq/giphy.gif)"
      }}>
      <div>
        <h1>You don't eat the sardines. The sardines, they eat you!</h1>
        <h1><Link to="/">go back</Link></h1>
      </div>
    </div>
  );
}

export default Sardines;
