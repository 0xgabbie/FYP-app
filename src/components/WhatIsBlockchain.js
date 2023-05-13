
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import syllabus from "../syllabus/Syllabus";

function WhatIsBlockchain() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="note">
        <h1>What is a Blockchain?</h1>
        <p>Blockchains at its basic level are distributed ledgers of transactions that have been signed cryptographically which are grouped into blocks. Each block is cryptographically linked to the previous block in the chain after the block has gone through validation and a consensus decision. </p>
        <br />
        <p>With new blocks being added to the chain, the older blocks become harder to modify. The security of the blockchain in general becomes more secure as more transactions are added to the existing distributed ledger. New blocks when added are added onto all the ledgers across the network. Meaning that every copy of the distributed ledger needs to be exactly the same. </p>
        <button onClick={() => navigate("/topic7Quiz1")}>Quiz</button>
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

export default WhatIsBlockchain;
