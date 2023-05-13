import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import syllabus from "../syllabus/Syllabus";

function FiatMoney() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="note">
        <h1>Fiat Money</h1>
        <p>Modern form of money is fiat money. This type of money is not backed by any commodity or is any form of commodity. It relies on the trust of the people in the government that the money they print has value. </p>
        <button onClick={() => navigate("/topic3Quiz")}>Quiz</button>
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

export default FiatMoney;
