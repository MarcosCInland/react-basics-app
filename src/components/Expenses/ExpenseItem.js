import './ExpenseItem.css';
import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    //Usage of useState
    const [title, setTitle] = useState(props.title);
    const clickHandler = ()=>{
        //update value
        setTitle('Updated!'); //we pass new value
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;