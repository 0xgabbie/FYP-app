import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import syllabus from "../syllabus/Syllabus";

function RoleOfMoney() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="note">
        <h1>Role of Money</h1>
        <p>Store of Value: Money must be able to hold on to its value. </p>
        <p>Unit of Account: Money needs to be measurable.</p>
        <p>
          Medium of exchange: Money needs to be widely accepted as payment.{" "}
        </p>
        <button onClick={() => navigate("/topic1Quiz")}>Quiz</button>
      </div>
      <div className="absolute">
        {syllabus.map((syllabusItem) => (
          <button onClick={() => navigate("/topic" + syllabusItem.key)}>
            {syllabusItem.title}
          </button>
        ))}
      </div>

    </div>
  );
}

export default RoleOfMoney;
