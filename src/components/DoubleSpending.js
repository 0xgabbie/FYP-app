import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import syllabus from "../syllabus/Syllabus";

function DoubleSpending() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="note">
        <h1>Understanding Double Spending</h1>
        <p>Double Spending as its name suggests is the expenditure of a digital currency twice, basically duplicating the money online. Because digital currencies are ultimately just files, a user can create multiple copies of the files in multiple places. </p>
        <br />
        <h1>How does Double Spending Happen?</h1>
        <p>Assume Merchant A and Merchant B:</p>
        <p>-A digital payment was made to Merchant A.</p>
        <p>-The copy of the transaction is stored on the user’s computer.</p>
        <p>-Another digital payment was made to Merchant B using the same digital currency at the same time.</p>
        <p>-Both Merchants think that they have been paid but in reality the transaction has not been confirmed yet.</p>
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

export default DoubleSpending;
