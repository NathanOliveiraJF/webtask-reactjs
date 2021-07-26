import React from "react";
import { Trash2, ArrowRight } from "react-feather";

import "./styles.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-action">
        {props.status !== "Close" ? (
          <>
            <Trash2 size="24" color="#000000" />
            <ArrowRight size="24" color="#000000" />
          </>
        ) : (
          <Trash2 size="24" color="#000000" />
        )}
      </div>

      <div className="card-content">
        <div className="card-title" style={{ background: props.color }}>
          {props.title}
        </div>
        <div className="card-desc">{props.desc}</div>
        <div className="card-status">{props.status}</div>
      </div>
    </div>
  );
}
