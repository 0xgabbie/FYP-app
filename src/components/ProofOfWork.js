import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import syllabus from "../syllabus/Syllabus";

function ProofOfWork() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="note">
        <h1>Proof Of Work</h1>
        <p>
          Nodes on the network are all competing against each other to solve a
          mathematical puzzle on the network. Why? Because in the proof-of-work
          model, the node gets the right to publish the newest block on the
          blockchain after it has solved the puzzle first. This solution to the
          puzzle is the "proof" that the node has done work for the network, and
          this work is usually computational power. The puzzle on the network is
          designed so that it is hard to solve but easy to verify, meaning other
          miners on the network can easily verify the validity of the solution
          to the puzzle. The difficulty of the puzzle is dynamic, meaning it can
          get easier and harder based on parameters set by the developers of the
          blockchain. For Bitcoin, the difficulty is adjusted every two weeks so
          that blocks are published on the blockchain roughly around once every
          ten minutes.
        </p>
        <br />
        <p>
          One property of this model is that past performance does not have any
          influence on future likelihood of solving the puzzle again. This
          feature keeps the mining ecosystem fair.
        </p>
        <br />
        <p>
          Why would nodes/computers spend electricity for this? Because the
          node/computer that solves the math problem first gets rewarded a small
          amount of Bitcoin for its work. In the future, this Bitcoin can be
          worth a lot.
        </p>
        <button onClick={() => navigate("/topic12Quiz")}>Quiz</button>
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

export default ProofOfWork;
