import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import syllabus from "../syllabus/Syllabus";

function IntroToBitcoin() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="note">
        <h1>Intro To Bitcoin</h1>
        <p>
          In 2008, Bitcoin emerged created by an anonymous person online named
          Satoshi Nakamoto. The idea of a blockchain combined with other
          computing concepts enabled the creation of the modern day
          cryptocurrencies. Cryptocurrency are electronic money protected and
          secured by cryptography instead of a centralized entity. These
          blockchains at the time was a novel idea because on top of storing
          data information, they also store value. Why do they store value?
          Because people see value in 1 Bitcoin.
        </p>
        <button onClick={() => navigate("/topic6Quiz1")}>Quiz</button>
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

export default IntroToBitcoin;
