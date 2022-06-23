import React, { useState } from "react";
import { Link } from "react-router-dom";

function Chips() {

  const [bags, setBags] = useState([]);

  function handleClick() {
    setBags(prevBags => [...prevBags]);
  }
  return (
    <div className="Chips">
      <div>
        <h1>bags eaten: {bags.length}</h1>
        <button onClick={handleClick}>nom nom nom</button>
        <h1>
          <Link to="/">go back</Link>
        </h1>
      </div>
    </div>
  );
}

export default Chips;
