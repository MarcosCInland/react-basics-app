import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) =>{

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    //LOGIC TO DISPLAY / HIDE FORM
    const [isEditing, setIsEditing] = useState(false);
    const startEditingHandler = ()=>{
        //update value
        setIsEditing(true); //we pass new value
    };
    const stopEditingHandler = ()=>{
        //update value
        setIsEditing(false); //we pass new value
    };

    return (
        <div className='new-expense'>
            {!isEditing ? 
                <button onClick={startEditingHandler} >Add new Expense</button>
                : <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
            }
        </div>
    );
}
export default NewExpense;