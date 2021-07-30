import React from "react";
import { Plus } from "react-feather";
import "./styles.css";

export default function CardContainer({ title, children, openModal }) {
  return (
    <div className="card-container">
      <div className="card-container-header">
        <span className="card-container-title">{title}</span>

        {title === "Todo" && (
          <div className="card-container-action">
            <button
              className="btn-modal"
              onClick={openModal}
              data-cy="openModal"
            >
              <Plus size="24" color="#000000" />
            </button>
          </div>
        )}
      </div>

      {children}
    </div>
  );
}
