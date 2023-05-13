import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import syllabus from "../syllabus/Syllabus";

function NativeCurrency() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="note">
        <h1>Native Currency </h1>
        <p>
          Because providing this work is very expensive in terms of
          computational power, why do miners even bother running the Bitcoin
          network? This proof-of-work model includes a reward for every block
          added to the network. Miners are rewarded with a specific number of
          Bitcoin for each block they validate. This reward system incentives
          the miners to constantly run to constantly keep the downtime of the
          network low closely to zero. This reward system however becomes
          smaller and smaller every 4 years. Bitcoin goes through this thing
          called the Bitcoin Halving. This is when the reward for mining one
          block gets cut in half, essentially meaning reducing the inflation of
          Bitcoin by 50% every 4 years. And this is seen to be a good thing for
          Bitcoin’s monetary policy because it further increases the
          deflationary aspect of the asset.
        </p>
        <br />
        <p>
          Bitcoin as an asset is largely debated to be money or not. As
          mentioned above, money needs to fulfill 3 things, being a store of
          value, medium of exchange and unit of account. Bitcoin as a store of
          value, in theory yes it is a good store of value due to its
          deflationary characteristics. Being deflationary basically means it's
          a scarce resource similar to Gold, that's widely the reason why
          Bitcoin is considered Digital Gold. However theory doesn't always line
          up with the real world because of price action. Due to its high
          volatility, it being a store of value at this day and age is very
          scary, especially for older folks who are in line to retire in a
          couple of years. Bitcoin does have the potential and characteristics
          of a fundamentally good store of value however, due to its low market
          cap it does not fulfill that role currently. Bitcoin being a medium of
          exchange, technically yes however not many merchants have adopted this
          technology yet so its usage rate is still on the low end. Some good
          signs for the asset being accepted as a medium of exchange is when El
          Salvador announced Bitcoin to be legal tender.
        </p>
        <br />
        <p>
          Bitcoin being a unit of account, this is hard to argue for due to the
          fact that 1 Bitcoin is very expensive. Currently sitting between 19 -
          20 thousand dollars. To use it as a unit of account is very tough in
          the real world even though one can technically count in decimals of 1
          Bitcoin (Satoshis). However in the current day, most people translate
          back to its USD value whenever any form of transaction surrounding
          this asset is done.
        </p>
        <br />
        <p>
          Bitcoin in conclusion does have the potential to be money, but in
          today’s standards the asset has not fulfilled all 3 aspects of being
          considered money.{" "}
        </p>
        <button onClick={() => navigate("/topic13Quiz")}>Quiz</button>
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

export default NativeCurrency;
