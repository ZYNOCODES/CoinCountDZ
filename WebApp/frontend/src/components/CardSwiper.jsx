import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import CardFITTECH from "./CardFITTECH";

export default function CardSwiper() {
  const SwiperCardDB = [
    {
      id: 1,
      Name: "Khaldi Abdelmoumen",
      Number: "1234",
    },
    {
      id: 2,
      Name: "Zino Boumrar",
      Number: "1234",
    },
    {
      id: 3,
      Name: "Abdallah Dekkich",
      Number: "1234",
    },
    {
      id: 3,
      Name: "Abdallah Dekkich",
      Number: "1234",
    },
    {
      id: 3,
      Name: "Abdallah Dekkich",
      Number: "1234",
    },
  ];
  return (
    <div className="CardSwiper ">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {SwiperCardDB.map((card) => {
          return (
            <SwiperSlide className="swiper-item flex justify-center">
              <CardFITTECH key={card.id} Name={card.Name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
