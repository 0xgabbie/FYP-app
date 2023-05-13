import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import syllabus from "../syllabus/Syllabus";

function ProofOfStakeQuiz() {
  const navigate = useNavigate();
  const [fullAnswer, setFullAnswer] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
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
          answer4: prevValue.answer4,
        };
      } else if (name === "answer2") {
        return {
          answer1: prevValue.answer1,
          answer2: value,
          answer3: prevValue.answer3,
          answer4: prevValue.answer4,
        };
      }
      else if (name === "answer3") {
        return {
          answer1: prevValue.answer1,
          answer2: prevValue.answer2,
          answer3: value,
          answer4: prevValue.answer4,
        };
      }
      else if (name === "answer4") {
        return {
          answer1: prevValue.answer1,
          answer2: prevValue.answer2,
          answer3: prevValue.answer3,
          answer4: value,
        };
      }
    });
  }

  function handleClick(event) {
    console.log(fullAnswer)
    if(fullAnswer.answer1 === "Lower energy usage" && 
    fullAnswer.answer2 === "Lower barrier of entry" && 
    fullAnswer.answer3 === "Reduced centralization" &&
    fullAnswer.answer4 === "Lower issuance of ETH"
    ){
      navigate("/Learning")
    }else{
      navigate("/topic16Quiz")
    }
  }

  return (
    <div>
      <div className="note">
        <h1>POS advantages over POW:</h1>
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
          <input
            name="answer4"
            onChange={handleChange}
            placeholder="Fourth Answer"
            value={fullAnswer.answer4}
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

export default ProofOfStakeQuiz;
