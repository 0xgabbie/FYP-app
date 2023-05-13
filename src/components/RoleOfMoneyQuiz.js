import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import syllabus from "../syllabus/Syllabus";

function RoleOfMoneyQuiz() {
  const navigate = useNavigate();
  const [fullAnswer, setFullAnswer] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
  });
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    const { value, name } = event.target;
    setFullAnswer((prevValue) => {
      if (name === "answer1") {
        return {
          answer1: value,
          answer2: prevValue.answer2,
          answer3: prevValue.answer3,
        };
      } else if (name === "answer2") {
        return {
          answer1: prevValue.answer1,
          answer2: value,
          answer3: prevValue.answer3,
        };
      }
      else if (name === "answer3") {
        return {
          answer1: prevValue.answer1,
          answer2: prevValue.answer2,
          answer3: value,
        };
      }
    });
  }

  function handleClick(event) {
    console.log(fullAnswer)
    if(fullAnswer.answer1 === "Store of Value" && fullAnswer.answer2 === "Unit of Account" && fullAnswer.answer3 === "Medium of Exchange"){
      navigate("/topic2")
    }else{
      navigate("/topic1Quiz")
    }
    // event.preventDefault();
  }

  return (
    <div>
      <div className="note">
        <h1>What are the roles of Money?</h1>
        <form onSubmit={handleClick}>
          <input
            name="answer1"
            onChange={handleChange}
            placeholder="First Answer"
            value={fullAnswer.answer1}
          />
          <input
            name="answer2"
            onChange={handleChange}
            placeholder="Second Answer"
            value={fullAnswer.answer2}
          />
           <input
            name="answer3"
            onChange={handleChange}
            placeholder="Third Answer"
            value={fullAnswer.answer3}
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
