import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import syllabus from "../syllabus/Syllabus";

function IntroToEthereum() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="note">
        <h1>Introduction to Ethereum</h1>
        <p>
          Ethereum is a Turing complete general purpose blockchain. It's a
          blockchain with a computer embedded in it, and it is the foundation
          for building applications as well as running organizations online all
          while being decentralized, permissionless and censorship-resistant.
        </p>
        <br />
        <p>
          The computer embedded is called the Ethereum Virtual Machine(EVM),
          this computer's state is agreed upon by every node on the Ethereum
          network. Every node which participates on the Ethereum network keeps a
          copy of this EVM state. Nodes can broadcast requests to this EVM to
          perform arbitrary computation, and whenever any request as such is
          broadcasted, other nodes on the network will verify, validate and
          carry out the computation so that the state of their EVM copy is the
          same. A record of all the transactions and as well as the EVM’s
          present state gets stored on the Ethereum Blockchain, meaning it is
          stored and agreed upon by all nodes participating in the network.
          Similar to the Bitcoin network, once the transaction is verified,
          validated and added to the blockchain, it then becomes immutable
          meaning it can't be changed easily.
        </p>
        <br />
        <p>
          Comparing and contrasting Ethereum to Bitcoin is that, Bitcoin can
          only do one thing which is to be money(way to transfer value across
          the Internet in a Decentralized manner), however Ethereum being a
          generalized purpose Blockchain allows for more use case on top of just
          being a medium of exchange on the Internet. Applications can be built
          on the EVM to do anything. Over the years, new use cases for the EVM
          have been discovered. In Ethereum’s current state, two use cases have
          been discovered: Decentralized Finance(Defi) and Non Fungible
          Tokens(NFTs). As the EVM develops and evolves, more use cases will
          emerge.
        </p>
        <button onClick={() => navigate("/topic14Quiz1")}>Quiz</button>
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

export default IntroToEthereum;
