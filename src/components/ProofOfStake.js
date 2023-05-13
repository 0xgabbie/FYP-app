import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import syllabus from "../syllabus/Syllabus";

function ProofOfStake() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="note">
        <h1>Proof Of Stake</h1>
        <p>
          In POW, validators risk their capital by expanding energy. However in
          POS, validators explicitly lock capital in the form of ETH into a
          smart contract on the Ethereum network. This staked ETH acts as a form
          of collateral that can be slashed(destroyed) if the validator chooses
          to behave maliciously or lazily(validator downtime).
        </p>
        <br />
        <p>POS advantages over POW:</p>
        <p>-Lower energy usage: POS network energy usage is magnitudes lower when compared to POW networks</p>
        <p>-Lower barrier of entry: No need for expensive grade hardware anymore, all one needs to be a validator is capital </p>
        <p>-Reduced centralization: With the ease to enter as a validator node operator, this should lead to more nodes securing the network reducing the risk of a 51% percent attack even more. </p>
        <p>-Lower issuance of ETH: Due to lower energy requirement, less ETH is required to be issued hence lower inflation rate of ETH.</p>
        <button onClick={() => navigate("/topic16Quiz")}>Quiz</button>
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

export default ProofOfStake;
