import React, { Component } from 'react';
import styles from './refsheet.css';

class RefTables extends Component {

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  render () {
    const {refArray} = this.props
    return (
      <div className={styles.refSheet}>
        {refArray.map( (table) => {
          return(
            <RefTable
              table={table}
            />
          )
        })}
        <div
          ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </div>
    )
  }

}

const RefTable = ({table}) => {
  return(
    <div className={styles.container}>
      <table>
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
    </div>
  )
}

export default RefTables;
