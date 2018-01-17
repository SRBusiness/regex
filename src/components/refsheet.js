import React from 'react';

const RefTables = ({refArray}) => {
  return (
    <div className='ref-sheet'>
      {refArray.map( (table) => {
        return(
          <RefTable
            table={table}
          />
        )
      })}
    </div>
  )
}

const RefTable = ({table}) => {
  return(
    <table className='refTable'>
      <tbody>
        {table.map( (row) => {
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

export default RefTables;
