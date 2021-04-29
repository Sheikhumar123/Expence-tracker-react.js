import React, { useContext } from "react";
import "./BalanceDetail.css";
import transactionContex from "./../transcationContex";

function BalanceDetail() {
  let list = useContext(transactionContex);

  const calIncome = () => {
    let sum = 0;
    list[0].forEach((value, index) => {
      if (value.amount[0] !== "-") {
        sum = sum + Number(value.amount);
      }
    });
    return <span>${sum}.00</span>;
  };

  const calExpense = () => {
    let mins = 0;
    list[0].forEach((value, index) => {
      if (value.amount[0] === "-") {
        mins = mins + Number(value.amount);
      }
    });
    return <span>${mins}.00</span>;
  };

  return (
    <div className="balanceDetail">
      <div className="income">
        <h4>INCOME</h4>
        <p>{calIncome()}</p>
      </div>
      <div className="expense">
        <h4>EXPENSE</h4>
        <p>{calExpense()}</p>
      </div>
    </div>
  );
}

export default BalanceDetail;
