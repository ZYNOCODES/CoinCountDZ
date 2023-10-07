import React from "react";

export default function GoalItemOnlyOne({id, Name, Amount, Date}) {
  return (
    <div className="goal-item">
      <h3>{Name}</h3>
      <span>{Amount} DZ</span>
      <p>{Date}</p>
    </div>
  );
}
