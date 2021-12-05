import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm"
import FormCard from "../UI/FormCard"
import Card from "../UI/Card";

var expenseArray = [];

export default function AddExpense(props) {
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        expenseArray.push(expenseData);
    
        //                          saving expenses in localStorage
        localStorage.setItem("localExpenses",JSON.stringify(expenseArray))
        
        cancelEventHandler();
    }
    
    expenseArray = JSON.parse(localStorage.getItem("localExpenses"));

    const [isAddFormClicked, setIsAddFormClicked] = useState(false);
    function clickEventHandler() {
        setIsAddFormClicked(true);
    }
    function cancelEventHandler() {
        setIsAddFormClicked(false);
    }
    
    return (
        <Card>
            <FormCard>
                {!isAddFormClicked && <button type="submit" className="createExpenseButton" onClick={clickEventHandler}>Create New Expense</button>}
                {isAddFormClicked && <ExpenseForm changeExpenses={props.changeExpenses} onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelEventHandler} />}
            </FormCard>
        </Card>
    )
}