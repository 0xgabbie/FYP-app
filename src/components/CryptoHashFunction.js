
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import syllabus from "../syllabus/Syllabus";

function CryptoHashFunction() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="note">
        <h1>Cryptographic Hash Function</h1>
        <p>Above we mentioned that the Blockchain is just a ledger of signed transactions. This signing process is more precisely called the Hashing process. Hashing is the process of calculating a fixed-size output for any input of almost all sized input. Any slight change to the input will give a totally different output. The figure below shows examples of a SHA-256 output that almost all Blockchains use.</p>
        <br/>
        <h1>Example of Inputs and Outputs for a SHA-256 Hashing Function</h1>
        <img 
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*8WAtuh8Ab7TBbgmzj-s-Ig.png"
            alt="Sha-256 Input Output"
        />    
        <br/>
        <p>The hashing function is very secure because the only way to get a specific output, a computer needs to run through all possible input combinations words or numbers through a hashing function until the desired output is found. And this process will take a very very long time. Hashing Algorithms are also collision resistant, meaning that two or more inputs can never produce the same output.</p>
        <br />
        <p>What is the Hashing Function processing? They process a transaction. A Transaction in the Blockchain contains Amount, Input, Output and a Transaction ID/Hash.</p>
        <button onClick={() => navigate("/topic8Quiz")}>Quiz</button>
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

export default CryptoHashFunction;
