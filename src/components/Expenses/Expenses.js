import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import './Expenses.css'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
function Expenses (props) {
    //Save updated year
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }
    //Filter by year
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    //After filtering, validate what to display
    /*let expensesContent = '';
    filteredExpenses.length > 0 ? expensesContent = <p>No expenses found</p>
    : expensesContent = filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />);*/
    
    return (
        <Card className='expenses'>
            <div>
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            </div>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
}
export default Expenses;