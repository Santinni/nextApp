'use client'
import { ReactNode } from "react"

import clsx from "clsx"

import Pagination from "./Pagination"
import styles from "./styles.module.css"

export interface Pagination {
  total: number
}

export interface Column<T extends {}> {
  title: string
  dataIndex: keyof T
  key?: string
  colWidth?: string
  minWidth?: string
  maxWidth?: string
  sortable?: boolean
  initialSortDirection?: "asc" | "desc"
  columnClass?: string
  render?: (value: T[keyof T], record: T, index: number) => ReactNode
  renderHeader?: (title: string) => ReactNode
}

export interface TableProps<T extends {}> {
  columns: Column<T>[]
  data: T[]
  rowHeight?: string
  pagination?: Pagination
  rowsPerPageOptions?: number[]
  onChangePage?: (page: number) => void
  onChangeSort?: (sort: string, direction: "asc" | "desc") => void
  onChangeItemsPerPage?: (itemsPerPage: number) => void
}

const Table = <T extends {}>({
  columns,
  data,
  rowHeight,
  pagination,
  rowsPerPageOptions = [10, 20, 50],
  onChangePage = () => void 0,
  onChangeSort = () => void 0,
  onChangeItemsPerPage = () => void 0,
}: TableProps<T>) => {
  

  const initialSortColumn = columns.find(
    (col) => col.initialSortDirection != null
  )
  // const [sortConfig, setSortConfig] = useState<{
  //   dataIndex?: string | null
  //   direction?: "asc" | "desc" | null
  // }>({
  //   dataIndex: initialSortColumn ? initialSortColumn.dataIndex : null,
  //   direction: initialSortColumn
  //     ? initialSortColumn.initialSortDirection
  //     : null,
  // })

  const activeColumns = columns.filter((column) =>
    data.some((row) => row[column.dataIndex])
  )

  

  const tableRows = data?.map((row, rowIndex) => (
    <tr
      className={clsx(
        styles.bodyRow,
        rowIndex % 2 === 0 ? styles.evenRow : styles.oddRow
      )}
      key={rowIndex}
      style={{ height: rowHeight }}
    >
      {columns.map((col) => (
        <td
          className={styles.bodyCell}
          key={`${col.key || col.dataIndex.toString()}-${rowIndex}`}
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

  // const handleSortClick = (dataIndex: string) => {
  //   setSortConfig((prevConfig) => {
  //     let newDirection = "asc"
  //     if (prevConfig.dataIndex === dataIndex) {
  //       newDirection = prevConfig.direction === "asc" ? "desc" : "asc"
  //     }
  //     onChangeSort(dataIndex, newDirection)

  //     return { dataIndex, direction: newDirection }
  //   })
  // }

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
          <tr className={styles.headerRow}>
            {columns.map((col) => (
              <th
                className={styles.headerCell}
                key={col.key}
                aria-label={
                  col.sortable ? "Sortable header cell" : "Header cell"
                }
              >
                <div
                  className={clsx(
                    styles.headerCellContent,
                    col.sortable && styles.sortable
                  )}
                  // onClick={() => col.sortable && handleSortClick(col.dataIndex)}
                >
                  {col.renderHeader ? col.renderHeader(col.title) : col.title}
                  {col.sortable && (
                    <div
                      className={clsx(
                        styles.sortIcon,
                        col.dataIndex === sortConfig.dataIndex &&
                          sortConfig.direction === "asc" &&
                          styles.asc,
                        col.dataIndex === sortConfig.dataIndex &&
                          sortConfig.direction === "desc" &&
                          styles.desc
                      )}
                    ></div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tableBody}>{tableRows}</tbody>
      </table>
      <Pagination/>
    </div>
  )
}

export default Table
