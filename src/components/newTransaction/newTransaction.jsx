import "./newTransaction.css";
import React, { useContext, useState } from "react";
import transactionContex from "./../transcationContex";

function NewTransaction() {
  let list = useContext(transactionContex);

  let [des, setdes] = useState();
  let [amn, setamn] = useState();

  // funtion to get des
  let getDes = (e) => {
    setdes(e.target.value);
  };
  // funtion to get amount
  let getAmount = (e) => {
    setamn(e.target.value);
  };

  // funtion to push these transaction to the globel state
  let pushTransaction = () => {
    list[1]([...list[0], { description: des, amount: amn }]);
  };
  

  return (
    <div className="newTranaction">
      <h3>Add New Transaction</h3>
      <hr />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          pushTransaction();
        }}
      >
        <label>
          Description <br />
          <input
            type="text"
            onChange={getDes}
            placeholder="Detail of Transaction"
          />
        </label>
        <label>
          Transaction Amount <br />
          <input
            type="number"
            onChange={getAmount}
            placeholder="Dollar Value of Transaction"
          />
        </label>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default NewTransaction;
