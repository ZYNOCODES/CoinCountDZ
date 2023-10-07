import React, { useRef, useState } from "react";

import BigGoalItemOnlyOne from "./BigGoalItemOnlyOne";

export default function BigGoalsItems() {
  const GoalDB = [
    {
      id: 1,
      Name: "Iphone",
      Date: "April 28,2023 at 11:00",
      Amount: "3000",
    },
    {
      id: 1,
      Name: "Iphone",
      Date: "April 28,2023 at 11:00",
      Amount: "3000",
    },
  ];
  return (
    <div className="GoalsItems flex gap-5">
      {GoalDB.map((goal) => {
        return (
          <BigGoalItemOnlyOne
            key={goal.id}
            Name={goal.Name}
            Date={goal.Date}
            Amount={goal.Amount}
          />
        );
      })}
    </div>
  );
}
