import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMIES_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 12),
  },
  {
    id: "e2",
    title: "Uis awe",
    amount: 1560.6,
    date: new Date(2022, 9, 11),
  },
  {
    id: "e3",
    title: "Chemise",
    amount: 689.6,
    date: new Date(2021, 1, 11),
  },
  {
    id: "e4",
    title: "Trouseres",
    amount: 56.6,
    date: new Date(2019, 5, 11),
  },
  {
    id: "e5",
    title: "Shooses",
    amount: 109.6,
    date: new Date(2021, 4, 11),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMIES_EXPENSES);

  const addExpenseHandler = (newExpenseItem) => {
    setExpenses((previous) => {
      return [newExpenseItem, ...previous];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
