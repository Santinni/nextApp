import { ChangeEvent, ReactNode, useState } from "react"

import clsx from "clsx"

import { ChevronLeft, ChevronRight } from "../../icons"
import styles from "./Table.module.scss"

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
  const [currentPage, setCurrentPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(
    rowsPerPageOptions ? rowsPerPageOptions[0] : 10
  )

  const initialSortColumn = columns.find(
    (col) => col.initialSortDirection != null
  )
  const [sortConfig, setSortConfig] = useState<{
    dataIndex?: string | null
    direction?: "asc" | "desc" | null
  }>({
    dataIndex: initialSortColumn ? initialSortColumn.dataIndex : null,
    direction: initialSortColumn
      ? initialSortColumn.initialSortDirection
      : null,
  })

  const activeColumns = columns.filter((column) =>
    data.some((row) => row[column.dataIndex])
  )

  const sortedRowsPerPageOptions = [...rowsPerPageOptions].sort((a, b) => a - b)

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

  // const handleChangePage = (page: number) => {
  //     setCurrentPage(page)
  // }

  const numPages = Math.ceil((pagination!.total || rowsPerPage) / rowsPerPage)

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLSelectElement>) => {
    const newRowsPerPage = parseInt(event.target.value, 10)
    setRowsPerPage(newRowsPerPage)
    handleCurrentPage(0)
    onChangeItemsPerPage(newRowsPerPage)
  }

  const handleChangePageInput = (event: ChangeEvent<HTMLInputElement>) => {
    const pageNumber = parseInt(event.target.value, 10) - 1
    if (pageNumber >= 0 && pageNumber < numPages) {
      handleCurrentPage(pageNumber)
    }
  }

  const handleSortClick = (dataIndex: string) => {
    setSortConfig((prevConfig) => {
      let newDirection = "asc"
      if (prevConfig.dataIndex === dataIndex) {
        newDirection = prevConfig.direction === "asc" ? "desc" : "asc"
      }
      onChangeSort(dataIndex, newDirection)

      return { dataIndex, direction: newDirection }
    })
  }

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page)
    onChangePage(page)
  }

  const paginationControls = pagination && (
    <div className={styles.pagination}>
      <div className={styles.pageNumbers}>
        {/* {Array.from({length: numPages}, (_, i) => (
                    <button
                        key={i}
                        className={`${styles.pageNumber} ${i === currentPage ? 'active' : ''}`}
                        onClick={() => handleChangePage(i)}
                    >
                        {i + 1}
                    </button>
                ))} */}
        <button
          onClick={() => handleCurrentPage(currentPage - 1)}
          disabled={currentPage === 0}
        >
          {<ChevronLeft />}
        </button>
        <input
          type="number"
          min="1"
          max={numPages}
          value={currentPage + 1}
          onChange={handleChangePageInput}
          className={styles.pageInput}
          title="Page Number"
        />
        <span>of {numPages}</span>
        <button
          onClick={() => handleCurrentPage(currentPage + 1)}
          disabled={currentPage === numPages - 1}
        >
          {<ChevronRight />}
        </button>
      </div>
      {rowsPerPageOptions && rowsPerPageOptions.length > 0 && (
        <div className={styles.tableRecordsSelector}>
          <select value={rowsPerPage} onChange={handleChangeRowsPerPage}>
            {sortedRowsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span>&nbsp;items</span>
        </div>
      )}
    </div>
  )

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
                  onClick={() => col.sortable && handleSortClick(col.dataIndex)}
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
      {paginationControls}
    </div>
  )
}

export default Table
