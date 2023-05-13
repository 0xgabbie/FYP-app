import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import RoleOfMoney from "./components/RoleOfMoney";
import RoleOfMoneyQuiz from "./components/RoleOfMoneyQuiz";
import MoneyCharateristics from "./components/MoneyCharateristics";
import FiatMoney from "./components/FiatMoney";
import DigitalCurrencies from "./components/DigitalCurrencies";
import DoubleSpending from "./components/DoubleSpending";
import IntroToBitcoin from "./components/IntroToBitcoin";
import WhatIsBlockchain from "./components/WhatIsBlockchain";
import CryptoHashFunction from "./components/CryptoHashFunction";
import AppendOnlyLogs from "./components/AppendOnlyLogs";
import BlocksAndMerkleTrees from "./components/BlocksAndMerkleTrees";
import AssymetricKeyAndDigitalSignatures from "./components/AssymetricKeyAndDigitalSignatures";
import ProofOfWork from "./components/ProofOfWork";
import NativeCurrency from "./components/NativeCurrency";
import IntroToEthereum from "./components/IntroToEthereum";
import IntroToEther from "./components/IntroToEther";
import ProofOfStake from "./components/ProofOfStake";
import MoneyCharateristicsQuiz from "./components/MoneyCharateristicsQuiz";
import FiatMoneyQuiz from "./components/FiatMoneyQuiz";
import DigitalCurrenciesQuiz from "./components/DigitalCurrenciesQuiz";
import IntroToBitcoinQuiz1 from "./components/IntroToBitcoinQuiz1";
import IntroToBitcoinQuiz2 from "./components/IntroToBitcoinQuiz2";
import WhatIsBlockchainQuiz1 from "./components/WhatIsBlockchainQuiz1";
import WhatIsBlockchainQuiz2 from "./components/WhatIsBlockchainQuiz2";
import CryptoHashFunctionQuiz from "./components/CryptoHashFunctionQuiz"; 
import ProofOfWorkQuiz from "./components/ProofOfWorkQuiz";
import NativeCurrencyQuiz from "./components/NativeCurrencyQuiz";
import IntroToEthereumQuiz1 from "./components/IntroToEthereumQuiz1";
import IntroToEthereumQuiz2 from "./components/IntroToEthereumQuiz2";
import IntroToEtherQuiz from "./components/IntroToEtherQuiz";
import ProofOfStakeQuiz from "./components/ProofOfStakeQuiz";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Learning" element={<RoleOfMoney />} />
        <Route path="/topic1" element={<RoleOfMoney />} />
        <Route path="/topic1Quiz" element={<RoleOfMoneyQuiz />} />
        <Route path="/topic2" element={<MoneyCharateristics />} />
        <Route path="/topic2Quiz" element={<MoneyCharateristicsQuiz />} />
        <Route path="/topic3" element={<FiatMoney />} />
        <Route path="/topic3Quiz" element={<FiatMoneyQuiz />} />
        <Route path="/topic4" element={<DigitalCurrencies />} />
        <Route path="/topic4Quiz" element={<DigitalCurrenciesQuiz />} />
        <Route path="/topic5" element={<DoubleSpending />} />
        <Route path="/topic6" element={<IntroToBitcoin />} />
        <Route path="/topic6Quiz1" element={<IntroToBitcoinQuiz1 />} />
        <Route path="/topic6Quiz2" element={<IntroToBitcoinQuiz2 />} />
        <Route path="/topic7" element={<WhatIsBlockchain />} />
        <Route path="/topic7Quiz1" element={<WhatIsBlockchainQuiz1 />} />
        <Route path="/topic7Quiz2" element={<WhatIsBlockchainQuiz2 />} />
        <Route path="/topic8" element={<CryptoHashFunction />} />
        <Route path="/topic8Quiz" element={<CryptoHashFunctionQuiz />} />
        <Route path="/topic9" element={<AppendOnlyLogs />} />
        <Route path="/topic10" element={<BlocksAndMerkleTrees />} />
        <Route
          path="/topic11"
          element={<AssymetricKeyAndDigitalSignatures />}
        />
        <Route path="/topic12" element={<ProofOfWork />} />
        <Route path="/topic12Quiz" element={<ProofOfWorkQuiz />} />
        <Route path="/topic13" element={<NativeCurrency />} />
        <Route path="/topic13Quiz" element={<NativeCurrencyQuiz />} />
        <Route path="/topic14" element={<IntroToEthereum />} />
        <Route path="/topic14Quiz1" element={<IntroToEthereumQuiz1 />} />
        <Route path="/topic14Quiz2" element={<IntroToEthereumQuiz2 />} />
        <Route path="/topic15" element={<IntroToEther />} />
        <Route path="/topic15Quiz" element={<IntroToEtherQuiz />} />
        <Route path="/topic16" element={<ProofOfStake />} />
        <Route path="/topic16Quiz" element={<ProofOfStakeQuiz />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
