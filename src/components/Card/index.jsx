import React from "react";
import { Trash2, ArrowRight } from "react-feather";
import "./styles.css";

export default function Card(props) {
  const { save, status, color, title, desc, data, dataFinal, id } = props;

  function actionDeleteCard() {
    let url = `http://localhost:3001/task/${id}`;
    fetch(url, {
      method: "DELETE",
    });
    save();
  }

  function actionStatusCard() {
    let con = status === "Todo" ? "Open" : "Close";
    let date = new Date();
    let url = `http://localhost:3001/task/${id}`;
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        description: desc,
        color: color,
        type: con,
        status: con,
        data: data,
        dataFinal: date.toLocaleDateString("pt-Br"),
      }),
    });

    save();
  }

  return (
    <div className="card">
      <div className="card-action">
        {status !== "Close" && (
          <button
            type="button"
            className="btn-d"
            onClick={() => {
              actionStatusCard();
            }}
          >
            <ArrowRight size="24" color="#000000" />
          </button>
        )}

        <button
          type="button"
          className="btn-d"
          onClick={() => {
            actionDeleteCard();
          }}
        >
          <Trash2 size="24" color="#000000" />
        </button>
      </div>

      <div className="card-content">
        <div className="card-title" style={{ background: color }}>
          {title}
        </div>
        <div className="card-desc">Descrição - {desc}</div>
        <div className="card-status">Status - {status}</div>
        <div className="card-data">criado em - {data}</div>
        {status === "Close" && (
          <div className="card-data">finalizado em - {dataFinal}</div>
        )}
      </div>
    </div>
  );
}
