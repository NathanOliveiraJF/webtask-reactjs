import React, { useState } from "react";
import "./styles.css";

export default function Modal({ close, save }) {
  const [values, setValues] = useState({
    title: "",
    desc: "",
    color: "#4285f4",
  });

  function handlerChange(e) {
    e.preventDefault();
    let nameField = e.target.name;
    let valueField = e.target.value;
    setValues({ ...values, [nameField]: valueField });
  }

  function createTask(e) {
    e.preventDefault();
    const { title, desc, color } = values;
    let url = "https://webtaskp.herokuapp.com/task";
    let date = new Date();
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        description: desc,
        color: color,
        status: "Todo",
        type: "Todo",
        dataFinal: date.toLocaleDateString("pt-Br"),
        data: date.toLocaleDateString("pt-Br"),
      }),
    });

    save();
    close();
  }

  return (
    <div className="modal">
      <div className="modal-form">
        <form>
          <div className="form-group">
            <label className="form-label" htmlFor="taskTitle">
              Task title
            </label>

            <input
              id="taskTitle"
              name="title"
              className="form-field"
              type="text"
              placeholder="..."
              onChange={handlerChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="taskDesc">
              Task description
            </label>
            <input
              id="taskDesc"
              name="desc"
              className="form-field"
              type="text"
              placeholder="..."
              onChange={handlerChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="color">
              Choose color
            </label>
            <input
              className="form-field"
              name="color"
              type="color"
              id="color"
              value={values.color}
              onChange={handlerChange}
            />
          </div>
          <button type="button" id="btn-c" onClick={close}>
            Close
          </button>

          <button type="button" onClick={createTask} data-cy="submit">
            Criar
          </button>
        </form>
      </div>
    </div>
  );
}
