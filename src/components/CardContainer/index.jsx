import React from "react";
import { Plus } from "react-feather";
import "./styles.css";
export default function CardContainer(props) {
  return (
    <div className="card-container">
      <div className="card-container-header">
        <span className="card-container-title">{props.title}</span>

        {props.title === "Todo" ? (
          <div className="card-container-action">
            <Plus size="24" color="#000000" />
          </div>
        ) : (
          <> </>
        )}
      </div>

      {props.children}
    </div>
  );
}
