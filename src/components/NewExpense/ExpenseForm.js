import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enertedTitle, setEnteredTitle] = useState("");
  const [enertedAmount, setEnteredAmount] = useState("");
  const [enertedDate, setEnteredDate] = useState("");
  const [btnCheckBtnClicked, setNewBtnCheck] = useState(false);
  //   const [userInput, setUserInput] = useState({
  //     enertedTitle: "",
  //     enertedAmount: "",
  //     enertedDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enertedTitle: event.target.value,
    // });
    // setUserInput((pervious) => {
    //   return { ...pervious, enertedTitle: event.target.value };
    // });
  };

  const ammountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enertedAmount: event.target.value,
    // });
    // setUserInput((pervious) => {
    //   return { ...pervious, enertedAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enertedDate: event.target.value,
    // });
    // setUserInput((pervious) => {
    //   return { ...pervious, enertedDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enertedTitle,
      amount: enertedAmount,
      date: new Date(enertedDate),
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setNewBtnCheck(false);
  };

  const showFormHandler = () => {
    setNewBtnCheck(true);
  };
  const hideFormHandler = () => {
    setNewBtnCheck(false);
  };

  if (!btnCheckBtnClicked) {
    return (
      <div>
        <button onClick={showFormHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enertedTitle}
            onInput={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            steps="0.01"
            value={enertedAmount}
            onInput={ammountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            steps="2022-12-31"
            value={enertedDate}
            onInput={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={hideFormHandler}>Close</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
