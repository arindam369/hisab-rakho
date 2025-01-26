import React from 'react';
import './ExpensesFilter.css';

export default function ExpensesFilter(props){
  function optionHandler(e){
    const filteredYear = e.target.value;
    props.onSaveFilteredYear(filteredYear);
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={optionHandler} >
          <option value='2025'>2025</option>
          <option value='2024'>2024</option>
        </select>
      </div>
    </div>
    
  );
};