import React, { useContext } from "react";
import "./Transaction.css";
import transactionContex from "./../transcationContex";

function Transaction(props) {
  let list = useContext(transactionContex);

  const checkvalue = () => {
    if (props.amount > 0) {
      return <span>{"+$" + props.amount}</span>;
    } else {
      return <span>{"-$" + Math.abs(props.amount)}</span>;
    }
  };

  const removeItem = () => {
    let newarry = [];
    list[0].forEach((element, index) => {
      if (index !== props.index) {
        newarry.push(element);
      }
    });
    list[1](newarry);
  };

  return (
    <div className="transactionBox">
      <div className="close" onClick={removeItem}>
        X
      </div>
      <div
        className={props.amount > 0 ? "transaction sum" : "transaction mins"}
      >
        <p>{props.des}</p>
        <p>{checkvalue()}</p>
      </div>
    </div>
  );
}

export default Transaction;
