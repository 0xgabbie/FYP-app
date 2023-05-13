import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import syllabus from "../syllabus/Syllabus";

function IntroToEthereumQuiz1() {
  const navigate = useNavigate();
  const [fullAnswer, setFullAnswer] = useState({
    answer1: "",
  });
  const [headingText, setHeading] = useState("");

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
    if(fullAnswer.answer1 === "It is a Turing complete general purpose blockchain" ||
    fullAnswer.answer1 === "It is a Turing complete general purpose Blockchain" ||  
    fullAnswer.answer1 === "Ethereum is a Turing complete general purpose Blockchain" || 
    fullAnswer.answer1 === "Ethereum is a Turing complete general purpose blockchain"
    ){
      navigate("/topic14Quiz2")
    }else{
      navigate("/topic14Quiz1")
    }
  }

  return (
    <div>
      <div className="note">
        <h1>Describe Ethereum:</h1>
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

export default IntroToEthereumQuiz1;
