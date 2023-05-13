import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import syllabus from "../syllabus/Syllabus";

function BlocksAndMerkleTrees() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="note">
        <h1>Blocks and Merkle Trees</h1>
        <p>
          When a transaction is done, the transaction is submitted to the ledger
          by being sent to the nodes participating in the network(miners). The
          submitted transaction is sent out to other miners as well. The
          transaction is only added to the blockchain when the miners publish a
          block onto the blockchain. This block contains a set of validated
          transactions. Validation is done by checking that the providers of the
          funds in each of the transactions have all signed the transaction.
          This signing check verifies that the providers of the funds for the
          transactions had access to the private key. The Block is then also
          validated by multiple miners on the network and will only be published
          once multiple miners accept the block.
        </p>
        <br />
        <p>
          After each Block is created, it will be hashed which then creates a
          hashed digest value that represents the block. This hash digest is
          used to protect the blockchain from any change since all the miners on
          the network will have a copy of this block’s hash digest value and can
          then be checked later on to make sure that the block is valid.{" "}
        </p>
        <br />
        <p>
          Instead of storing the hash digest of every transaction within a
          block, a data structure called Merkle tree is used. Merkle tree
          combines the hash value until there is only a singular root. This root
          is an efficient mechanism that is used to summarize a transaction in a
          block. This data structure is also used as a means to save disk space
          on the Bitcoin network. How it saves space is because a block is a
          list of multiple transactions, basically meaning that one block holds
          information for many transactions. Taking only the ‘summary’ and
          adding it to the blockchain is the most efficient way of using disk
          space. An example of this is shown in the figure below. It can be seen
          that the block only contains the Root hash of the Merkle tree of
          multiple transactions.
        </p>
        <br />
        <img 
            src="https://static.javatpoint.com/tutorial/blockchain/images/blockchain-merkle-tree.png"
            alt="Blockchain Merkle Tree"
        />
        <p>Example of Blockchain Merkle Tree </p>   
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

export default BlocksAndMerkleTrees;
