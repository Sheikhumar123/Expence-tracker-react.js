import React, { useContext } from "react";
import "./Balance.css";
import transactionContex from "./../transcationContex";

function Balance() {
  let list = useContext(transactionContex);

  const calBalance = () => {
    let total = 0;
    list[0].forEach((value) => {
      total = total + Number(value.amount);
    });
    return <span>${total}.00</span>;
  };

  return (
    <div className="balance">
      <h4>Current Balance</h4>
      <h1>{calBalance()}</h1>
    </div>
  );
}

export default Balance;
