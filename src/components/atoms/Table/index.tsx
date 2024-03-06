import { ReactNode } from "react"

import clsx from "clsx"

import styles from "./styles.module.css"

export interface Column<T extends {}> {
  title: string
  dataIndex: keyof T
  key?: string
  colWidth?: string
  minWidth?: string
  maxWidth?: string
  columnClass?: string
  render?: (value: T[keyof T], record: T, index: number) => ReactNode
  renderHeader?: (title: string) => ReactNode
}

export interface TableProps<T extends {}> {
  columns: Column<T>[]
  data: T[]
  rowHeight?: string
}

const Table = <T extends {}>({ columns, data, rowHeight }: TableProps<T>) => {
  const tableRows = data?.map((row, rowIndex) => (
    <tr
      className={clsx(
        styles.bodyRow,
        rowIndex % 2 === 0 ? styles.evenRow : styles.oddRow
      )}
      key={rowIndex}
      style={{ height: rowHeight }}
      aria-label="Table row"
    >
      {columns.map((col) => (
        <td
          className={styles.bodyCell}
          key={`${col.key || col.dataIndex.toString()}-${rowIndex}`}
          aria-label="Table cell"
        >
          {col.render ? (
            col.render(row[col.dataIndex], row, rowIndex)
          ) : (
            <>{row[col.dataIndex] !== undefined ? row[col.dataIndex] : ""}</>
          )}
        </td>
      ))}
    </tr>
  ))

  return (
    <div className={styles.tableContainer}>
      <table className={styles.root}>
        <colgroup>
          {columns.map((col) => (
            <col
              className={col.columnClass}
              style={{
                width: col.colWidth,
                minWidth: col.minWidth,
                maxWidth: col.maxWidth,
              }}
              key={col.key}
            />
          ))}
        </colgroup>
        <thead className={styles.tableHeader}>
          <tr className={styles.headerRow} aria-label="Table header row">
            {columns.map((col) => (
              <th
                className={styles.headerCell}
                key={col.key}
                aria-label="Header cell"
              >
                <div className={styles.headerCellContent}>
                  {col.renderHeader ? col.renderHeader(col.title) : col.title}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tableBody}>{tableRows}</tbody>
      </table>
    </div>
  )
}

export default Table
