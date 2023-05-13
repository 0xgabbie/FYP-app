import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import syllabus from "../syllabus/Syllabus";

function IntroToEther() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="note">
        <h1>Introduction to Ether</h1>
        <p>
          Ether(ETH) the asset is the native currency of the Ethereum network.
          In the early stages of Ethereum, it was on the Proof-of-Work(POW)
          consensus model, however as of 2022 the consensus model changed to
          Proof-of-Stake(POS) more on that in later Sections. Going back to POW
          days, similar to Bitcoin, Ether the asset was an incentive for miners
          to contribute to the security and running of the network.{" "}
        </p>
        <br />
        <p>
          However, contrasting from Bitcoin is the concept of Gas. A portion of
          the Ether that validators earn come from the users of the network.
          This means that whenever one participates and broadcasts a transaction
          request on the EVM, the participant needs to offer some amount of ETH
          as ‘Gas’ as a form of bounty for validators. This gas amount varies
          according to network volume. Usually the higher the demand for network
          usage, the more in gas one needs to pay to use the network.
          Participants broadcasting a transaction can also increase and decrease
          gas according to how much priority they want their transaction to get.
        </p>
        <br />
        <p>
          Usually the higher value transactions would increase the gas bounty to
          above recommended levels to get prioritization for their transactions
          to get approved first. One thing to mention is that the EVM
          transaction waiting pool does not work on a FIFO model. Because miners
          in the past were profit driven, they are incentivized more to approve
          transactions that have the highest bounty. So if people wanted to cut
          the queue per say, they could. Another aspect for why Ether needed to
          exist was to prevent malicious participants from intentionally
          clogging up the network by doing large amounts of transaction
          requests(spam request). Having to pay a bounty, malicious actors are
          disincentived to spam the network due to the hefty price to pay.
        </p>
        <br />
        <p>
          In recent days, with Ethereum migrating over to the POS consensus
          model, ETH is also used to provide economic security to the network in
          3 ways:
        </p>
        <p>-Means to reward validators on the network </p>
        <p>
          -Eth is now staked by validators, meaning the Eth is acting as
          collateral against dishonest behavior{" "}
        </p>
        <p>
          -Eth is used as weightage for voting rights for a newly proposed
          mechanism for the network known as Ethereum Improvement
          Proposals(EIP).{" "}
        </p>
        <button onClick={() => navigate("/topic15Quiz")}>Quiz</button>
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

export default IntroToEther;
