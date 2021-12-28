import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../filter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
    const [year, setYear] = useState("2022");

    function saveFilteredYearHandler(year) {
        const filteredYear = year;
        setYear(filteredYear);

    }

    const filteredExpense = props.expenses.filter((expense) => {
        return (
            expense.date.split("T")[0].split("-")[0] === year
        )
    })

    return (
        <Card className="expenses">
            <ExpensesChart expenses={filteredExpense}/>
            <ExpensesFilter selectedYear={year} onSaveFilteredYear={saveFilteredYearHandler} />

            {filteredExpense.length === 0 ? <p className="noExpenses"> No Expenses Found </p> :
                filteredExpense.map((expense) => {
                    return (
                            <ExpenseItem key={expense.id} title={expense.title} id={expense.id} price={expense.price} date={expense.date} changeDeleteExpenses={props.changeDelExpenses}/>
                    )
                })
            }
        </Card>
    )
}