import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [expenseViewFlag, setExpenseView] = useState('0');
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    // setting the flag a 0
    setExpenseView(0);
  };

  const onNewExpenseHandler = () => {
    setExpenseView(1);
  }
  const onCancelClickHandler = () => {
    setExpenseView(0);
  }

  return (
    <div className='new-expense'>
      {expenseViewFlag === 0 ?
        <button type='button' onClick={onNewExpenseHandler}>Add new Expense</button>
        : <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={onCancelClickHandler} />
      }
    </div>
  );
};

export default NewExpense;