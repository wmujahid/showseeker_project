import React, { useState, useEffect, ChangeEvent } from 'react';
import './datagrid.css';
import getDaysOfWeek from './getDaysOfWeek';
import {
  randomTraderName,
  randomCity,
  randomUpdatedDate
} from '@mui/x-data-grid-generator';

interface DataItem {
  id: number;
  col1: string;
  col2: Array<string>;
  col3: string;
  col4: string;
  col5: string;
}

interface DatagridProps {
  isMobile: boolean;
}

function Datagrid2({ isMobile }: DatagridProps): JSX.Element {
  const [numRows] = useState(45); // Set the initial number of rows
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const newData = Array(numRows)
      .fill('')
      .map((_, index) => ({
        id: index,
        col1: '',
        col2: getDaysOfWeek(''),
        col3: randomTraderName(),
        col4: randomUpdatedDate().toDateString(),
        col5: randomCity()
      }));
    setData(newData);
  }, [numRows]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>, id: number) => {
    const { value } = event.target;
    const newData = data.map(item => {
      if (item.id === id) {
        const newString = getDaysOfWeek(value);
        return { ...item, col1: value, col2: newString };
      }
      return item;
    });
    setData(newData);
  };

  return (
    <table className={isMobile ? 'mobile' : ''}>
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
            <td>
              <input type="text" value={item.col3} readOnly />
            </td>
            <td>
              <input type="text" value={item.col4} readOnly />
            </td>
            <td>
              <input type="text" value={item.col5} readOnly />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Datagrid2;
