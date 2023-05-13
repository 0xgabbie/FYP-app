import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import syllabus from "../syllabus/Syllabus";

function WhatIsBlockchainQuiz2() {
  const navigate = useNavigate();
  const [fullAnswer, setFullAnswer] = useState({
    answer1: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setFullAnswer((prevValue) => {
      if (name === "answer1") {
        return {
          answer1: value,
        };
      }
    });
  }

  function handleClick(event) {
    console.log(fullAnswer)
    if(fullAnswer.answer1 === "Because every block is linked to their previous block" || 
    fullAnswer.answer1 === "Blocks are linked together" ||
    fullAnswer.answer1 === "Each block is cryptographically linked to the previous block in the chain"
    ){
      navigate("/topic8")
    }else{
      navigate("/topic7Quiz2")
    }
  }

  return (
    <div>
      <div className="note">
        <h1>Why is it called a Blockchain?</h1>
        <form onSubmit={handleClick}>
          <input
            name="answer1"
            onChange={handleChange}
            placeholder="First Answer"
            value={fullAnswer.answer1}
          />
          <button type="submit">Submit</button>
        </form>
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

export default WhatIsBlockchainQuiz2;
