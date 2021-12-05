import React,{useState} from "react";
import "./ExpenseForm.css"

export default function ExpenseForm(props){
    function submitHandler(e){
        e.preventDefault();
        const expenseData = {
            title:userInput.enteredTitle,
            date: new Date(userInput.enteredDate),
            price: parseFloat(userInput.enteredAmount).toFixed(2)
        }
        props.onSaveExpenseData(expenseData);   // sending expenseData from ExpenseForm -> AddExpense

        setUserInput({
            enteredTitle:"",
            enteredDate:"",
            enteredAmount:""
        })
        props.changeExpenses();
    }
    const [userInput,setUserInput] = useState({
        enteredTitle: "",
        enteredDate: "",
        enteredAmount: ""
    })
    function titleHandler(e){
        setUserInput({
            ...userInput,
            enteredTitle:e.target.value
        })
    }
    function dateHandler(e){
        setUserInput({
            ...userInput,
            enteredDate:e.target.value
        })
    }
    function amountHandler(e){
        setUserInput({
            ...userInput,
            enteredAmount : e.target.value
        })
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="title">
                <label>Title</label>
                <input type="text" value={userInput.enteredTitle} onChange={titleHandler} required/>
            </div>
            <div className="date-amount">
                <label>Date
                <input type="date" value={userInput.enteredDate} onChange={dateHandler} required/>
                </label>

                <label>Amount
                <input type="number" value={userInput.enteredAmount} step="0.5" onChange={amountHandler} required/>
                </label>
            </div>

            <div className="button-box">
                <button onClick={props.onCancel} className="cancel" >Cancel</button>
                <button type="submit" className="addExpense">Add Expense</button>
            </div>
        </form>
    )
}