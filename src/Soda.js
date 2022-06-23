import React from "react";
import { Link } from "react-router-dom";

function Soda() {
  return (
    <div className="Soda">
      <div>
        <h1>OMG SUGARRRRR</h1>
        <h1><Link to="/">go back</Link></h1>
      </div>
    </div>
  );
}

export default Soda;
