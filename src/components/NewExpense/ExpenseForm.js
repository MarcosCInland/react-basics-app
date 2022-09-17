import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
    const titleChangeHandler = (event) => {
        //upadte enteredTitle
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        //upadte enteredAmount
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        //upadte enteredDate
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        // Avoid refreshing port after submit
        event.preventDefault();
        const expenseData = {
            title   : enteredTitle,
            amount  : enteredAmount,
            date    : new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        //two way binding
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount}  onChange={amountChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;