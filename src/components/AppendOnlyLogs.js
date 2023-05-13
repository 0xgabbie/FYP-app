import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import syllabus from "../syllabus/Syllabus";

function AppendOnlyLogs() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="note">
        <h1>Append only Logs</h1>
        <p>Another property of the Bitcoin Blockchain is the append-only logs. This means that data can only be added to the distributed ledger in a time-ordered sequential order. This makes it so that once data is added to the blockchain, it is pretty much impossible to alter it. This property makes a Blockchain immutable. The only way for the Bitcoin Blockchain to be changed is for a single entity to gain 51 percent of the network power, which is very difficult to achieve in today's Bitcoin landscape.</p>
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

export default AppendOnlyLogs;
