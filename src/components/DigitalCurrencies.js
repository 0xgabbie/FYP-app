import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import syllabus from "../syllabus/Syllabus";

function DigitalCurrencies() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="note">
        <h1>History of Digital Currencies</h1>
        <p>Why is there a need for Digital Currencies? During the 80s, the cypherpunk movement was born. This movement wished to see safe and encrypted communications as well as anonymous transactions in the Digital world. Thus the usage of Credit cards was frowned upon in the cypherpunk movement because credit card transactions can identify both the payer and receiver</p>
        <br />
        <p>Early Cryptographic Digital Currencies:</p>
        <p>-DigiCash</p>
        <p>-Mondex</p>
        <p>-CyberCash</p>
        <p>-E-Gold</p>
        <p>-HashCash</p>
        <p>-Bit Gold</p>
        <p>-B-Money</p>
        <p>-Lucre</p>
        <br />
        <p>However, all these early forms of Digital Currencies fail due to a lack of Merchant Adoption, Centralization issues, Consensus and Double Spending Problems</p>
        <button onClick={() => navigate("/topic4Quiz")}>Quiz</button>
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

export default DigitalCurrencies;
