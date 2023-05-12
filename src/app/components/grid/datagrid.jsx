import React, { useState } from 'react';
import './datagrid.css';
import getDaysOfWeek from './getDaysOfWeek';
import {
  randomTraderName,
  randomCity,
  randomUpdatedDate } from '@mui/x-data-grid-generator';

const traderName = randomTraderName();
const randomDate = randomUpdatedDate();
const location = randomCity();

function Datagrid2() {
  const [numRows] = useState(45); // Set the initial number of rows
  const [data, setData] = useState(Array(numRows).fill('').map((_, index) => ({
    id: index,
    col1: '',
    col2: '',
    col3: '',
    col4: '',
    col5: ''
  })));

  const handleChange = (event, id) => {
    const newData = data.map(item => {
      if (item.id === id) {
        const newString = getDaysOfWeek(event.target.value) 
        return { ...item, col1: event.target.value, col2: newString };
      }
      return item;
    });
    setData(newData);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Days To Air</th>
          <th>Numerical Days To Air</th>
          <th>Account Holder Name</th>
          <th>Previous Run Time</th>
          <th>Air City</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>
              <input
                type="text"
                value={item.col1}
                onChange={event => handleChange(event, item.id)}
              />
            </td>
            <td>
              <input type="text" value={item.col2} readOnly />
            </td>
            {/* <td><input type="text" value={randomTraderName()} readOnly /></td>
            <td><input type="text" value={randomUpdatedDate()} readOnly /></td>
            <td><input type="text" value={randomCity()} readOnly /></td> */}
            <td><input type="text" value={traderName} readOnly /></td>
            <td><input type="text" value={randomDate} readOnly /></td>
            <td><input type="text" value={location} readOnly /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Datagrid2;
