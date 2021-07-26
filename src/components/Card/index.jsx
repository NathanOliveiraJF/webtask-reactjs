import React from "react";
import { Trash2, ArrowRight } from "react-feather";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-action">
        <Trash2 size="24" color="#000000" />
        <ArrowRight size="24" color="#000000" />
      </div>

      <div className="card-content">
        <div className="card-title">{props.title}</div>
        <div className="card-desc">{props.desc}</div>
        <div className="card-status">{props.status}</div>
      </div>
    </div>
  );
}
