import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import './Expenses.css'
function Expenses (props) {
    //Save updated year
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
        //console.log(selectedYear);
    }
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    return (
        <Card className='expenses'>
            <div>
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            </div>
            {filteredExpenses.length === 0 ? <p>No expenses found</p>
            : (filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))}
        </Card>
    );
}
export default Expenses;