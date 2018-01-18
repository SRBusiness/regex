import React from 'react';
import styles from './refsheet.css';

// const RefTables = ({refArray}) => {
//   return (
//     <div className='ref-sheet'>
//       {refArray.map( (table) => {
//         return(
//           <RefTable
//             table={table}
//           />
//         )
//       })}
//     </div>
//   )
// }

const RefTable = ({refArray}) => {
  return(
    <table className={styles.border}>
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
