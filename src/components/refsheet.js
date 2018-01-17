import React from 'react';

const RefTable = ({refArray}) => {
  return (
    <table>
      <tbody>
        {refArray.map( (row) => {
          return(
            <tr key={row[0]}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default RefTable;
