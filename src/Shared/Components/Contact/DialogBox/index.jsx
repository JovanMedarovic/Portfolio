import React, { useState } from "react";
import "./style.scss";

const DialogBox = ({ isOpen, onClose }) => {
  return (
    <div className={`dialog-box ${isOpen ? "open" : ""}`}>
      <div className="dialog-content">
        <form method="dialog">
          <h3 id="contactTitle">Contact us</h3>
          <hr />
          <textarea name="mesage" id="mesage" cols="30" rows="10"></textarea>
          <button type="submit" id="dialogBtn" onClick={onClose}>
            Send message{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none"
            >
              <path
                d="M-5.24032e-07 9.01154L-3.92898e-07 12.0115L18.3146 12.0115L11.3126 18.9462L13.4097 21L24 10.5115L13.4097 1.32119e-06L11.3126 2.1L18.3146 9.01154L-5.24032e-07 9.01154Z"
                fill="#181717"
              />
            </svg>{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DialogBox;
