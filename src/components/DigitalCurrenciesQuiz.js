import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import syllabus from "../syllabus/Syllabus";

function RoleOfMoneyQuiz() {
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
    if(fullAnswer.answer1 === "Lack of Merchant Adoption" || 
    fullAnswer.answer1 === "Centralization issues" ||
    fullAnswer.answer1 === "Consensus issues" ||
    fullAnswer.answer1 === "Double Spending Problem"
    ){
      navigate("/topic5")
    }else{
      navigate("/topic4Quiz")
    }
  }

  return (
    <div>
      <div className="note">
        <h1>Name one issue with these early forms of Digital Currencies:</h1>
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

export default RoleOfMoneyQuiz;
