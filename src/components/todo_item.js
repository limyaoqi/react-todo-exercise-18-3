import { useState } from "react";

export default function TodoItem({
  text,
  id,
  isCompleted,
  isChecked,
  onDelete,
}) {
  // console.log(text);

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        {isCompleted ? (
          <div>
            <button
              className="btn btn-sm btn-success"
              onClick={() => isChecked}
            >
              <i className="bi bi-check-square"></i>
            </button>
            <span className="ms-2">{text}</span>
          </div>
        ) : (
          <div>
            <button
              className="btn btn-sm btn-light"
              onClick={() => isChecked(id)}
            >
              <i className="bi bi-square"></i>
            </button>
            <span className="ms-2 text-decoration-line-through">{text}</span>
          </div>
        )}
      </div>
      <div>
        <button className="btn btn-sm btn-danger" onClick={() => onDelete(id)}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}
