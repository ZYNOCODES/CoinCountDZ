import React from "react";
import GoalItemOnlyOne from "./GoalItemOnlyOne";
import FormDialogButton from "./AddGoalButton";

export default function GoalsItems() {
  const GoalDB = [
    {
      id: 1,
      Name: "House",
      Amount: "8900000",
    },
    {
      id: 1,
      Name: "Car",
      Amount: "500000",
    },
    {
      id: 1,
      Name: "Iphone",
      Amount: "300000",
    },{
      id: 1,
      Name: "Saving",
      Amount: "65000",
    },
  ];
  return (
    <div className="Goals-Items">
      <FormDialogButton />
      {GoalDB.map((goal) => {
        return (
          <GoalItemOnlyOne
            key={goal.id}
            Name={goal.Name}
            Amount={goal.Amount}
          />
        );
      })}
    </div>
  );
}
