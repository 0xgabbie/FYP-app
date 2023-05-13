import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import syllabus from "../syllabus/Syllabus";

function MoneyCharateristics() {

  const navigate = useNavigate();

  return (
    <div>
      <div className="note">
        <h1>Money Charateristics</h1>
        <p>-Durability</p>
        <p>-Divisibility</p>
        <p>-Portability</p>
        <p>-Uniformity</p>
        <p>-Limited Supply</p>
        <p>-Acceptability</p>
        <button onClick={() => navigate("/topic2Quiz")}>Quiz</button>
      </div>
      <div className="absolute">
        {syllabus.map(syllabusItem => (
         <button onClick={() => navigate('/topic' + syllabusItem.key)}>{syllabusItem.title}</button>
        ))}
      </div>
    </div>
  );
}

export default MoneyCharateristics;
