import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function BuyingProgress() {
  return (
    <ProgressBar
      completed={20}
      bgColor="rgb(6, 59, 135)"
      borderRadius="5px"
      baseBgColor="rgba(230, 230, 230, 0.7)"
      height="15px"
      isLabelVisible={true}
      labelSize="10px"
      animateOnRender={true}
    />
  );
}
