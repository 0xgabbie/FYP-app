import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import syllabus from "../syllabus/Syllabus";

function FiatMoneyQuiz() {
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
    console.log(fullAnswer.answer1)
    if(fullAnswer.answer1 === "From the government" ||  
    fullAnswer.answer1 === "The government" || 
    fullAnswer.answer1 === "Trust of the government"
    ){
      navigate("/topic4")
    }else{
      navigate("/topic3Quiz")
    }
    // event.preventDefault();
  }

  return (
    <div>
      <div className="note">
        <h1>Where does the value of Fiat Money come from??</h1>
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

export default FiatMoneyQuiz;
