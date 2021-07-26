import React from "react";
import Card from "../Card";
import { filterTaskByType } from "../../utils/filtersTask";

import "./styles.css";

export default function CardTask({ tasks, typeTask }) {
  const { filter } = filterTaskByType(tasks, typeTask);

  return (
    <div className="card-task">
      {filter.map((i, key) => {
        return (
          <Card
            key={key}
            title={i.title}
            desc={i.description}
            status={i.status}
            color={i.color}
          />
        );
      })}
    </div>
  );
}
