import React,{ useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import AddExpense from "./components/AddExpense/AddExpense";
import "./App.css"


const INITIAL_Expenses = [
  // {
  //   id:1,
  //   title: "Car Insurance",
  //   price: 3412.56,
  //   date: new Date(2020,2,23)
  // }
]

var fetchedExpenseArray;

function App() {
  
//                                 fetching from localStorage :
  if(!localStorage.getItem("localExpenses")){
    localStorage.setItem("localExpenses",JSON.stringify(INITIAL_Expenses));
  }

    fetchedExpenseArray = JSON.parse(localStorage.getItem("localExpenses"));
  
    const [myExpenses,setMyExpenses] = useState(fetchedExpenseArray);

    function changeFetchedItems(){
      setMyExpenses(JSON.parse(localStorage.getItem("localExpenses")));
    }

  return (
    <div className="page-container">
      <AddExpense changeExpenses={changeFetchedItems}/>
      <Expenses onChange={ ()=> setMyExpenses(JSON.parse(localStorage.getItem("localExpenses")))} expenses={myExpenses} changeDelExpenses={changeFetchedItems}/>
    </div>
  );
}

export default App;
