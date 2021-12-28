import Chart from "../Chart/Chart";

export default function ExpensesChart(props){
    const chartDataPoints = [
        {label: "Jan", value:0},
        {label: "Feb", value:0},
        {label: "Mar", value:0},
        {label: "Apr", value:0},
        {label: "May", value:0},
        {label: "Jun", value:0},
        {label: "Jul", value:0},
        {label: "Aug", value:0},
        {label: "Sep", value:0},
        {label: "Oct", value:0},
        {label: "Nov", value:0},
        {label: "Dec", value:0},
    ]

    for(const expense of props.expenses){
        const expenseMonth = expense.date.split("T")[0].split("-")[1]   // getMonth() gives Jan 0,Feb 1,...
        chartDataPoints[expenseMonth-1].value += parseFloat(expense.price);
    }

    return(
        <div>
            <Chart dataPoints={chartDataPoints} />
        </div>
    )
}