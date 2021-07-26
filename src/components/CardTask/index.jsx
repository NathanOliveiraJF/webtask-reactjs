import React from "react";
import Card from "../Card";

// recebe uma lista e returna vários cards
export default function CardTask({ tasks }) {
  return (
    <>
      {tasks.map((i) => {
        return <Card />;
      })}
    </>
  );
}
