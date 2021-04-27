import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = data => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setShowForm(false);
    };

    const handleShowForm = () => {
        setShowForm(true);
    };

    const handleCancel = () => {
        setShowForm(false);
    };

    return (
        <div className="new-expense">
            {!showForm && <button onClick={handleShowForm}>Add New Expense</button>}
            {showForm && <ExpenseForm onHandleSubmit={handleSubmit} onHandleCancel={handleCancel} />}
        </div>
    );
}

export default NewExpense;
