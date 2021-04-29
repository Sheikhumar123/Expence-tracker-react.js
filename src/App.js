import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import BalanceDetail from "./components/BalanceDetail/BalanceDetail";
import TransactionHistory from "./components/Transaction History/TransactionHistory";
import NewTransaction from "./components/newTransaction/newTransaction";
import transactionContex from "./components/transcationContex";

function App() {
  let list = useState([]);

  return (
    <transactionContex.Provider value={list}>
      <div className="App">
        <Header />
        <Balance />
        <BalanceDetail />
        <TransactionHistory />
        <NewTransaction />
      </div>
    </transactionContex.Provider>
  );
}

export default App;
