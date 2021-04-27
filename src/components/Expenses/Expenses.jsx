import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2021");

    const onHandleFilterChange = year => {
        setFilteredYear(year);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onHandleFilterChange={onHandleFilterChange} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;
