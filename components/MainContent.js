import React from "react";
import Card from "./Card";
import data from "../data"

export default function MainContent() {
  const card = data.map(card => {
    return <Card
            {...card}
           />
  }
  )

  return (
    <div>
      {card}
    </div>
  )
}
