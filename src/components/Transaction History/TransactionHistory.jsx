import React from "react";
import "./TransactionHistory.css";
import Transaction from "./../Transaction/Transaction";
import { useContext } from "react";
import transactionContex from "./../transcationContex";

function TransactionHistory() {
  let list = useContext(transactionContex);

  return (
    <div className="historyContainer">
      <h3>Transaction History</h3>
      <hr />
      <div className="historyBox">
        {list[0].map((value, index) => {
          return (
            <Transaction
              des={value.description}
              index={index}
              amount={value.amount}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TransactionHistory;
