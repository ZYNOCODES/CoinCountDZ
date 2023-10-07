import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function SavesProgress() {
  return (
    <ProgressBar
      completed={20}
      baseBgColor="rgba(230, 230, 230, 0.7)"
      bgColor="rgb(6, 59, 135)"
      borderRadius="5px"
      height="15px"
      isLabelVisible={true}
      labelSize="10px"
      animateOnRender={true}
    />
  );
}
