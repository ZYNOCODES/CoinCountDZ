import React, { useRef, useState } from "react";
import GoalItemOnlyOne from "./GoalItemOnlyOne";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function GoalsItems() {
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
          <GoalItemOnlyOne
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
