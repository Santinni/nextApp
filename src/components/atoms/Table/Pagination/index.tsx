'use client'
import {
  ChangeEvent,
  useState,
} from "react"

import {
  ChevronLeft,
  ChevronRight,
} from "@/src/components/icons"

import styles from "./styles.module.css"

export interface Pagination {
  total: number
  numPages: number
    currentPage: number
    handleChangePageInput: (e: ChangeEvent<HTMLInputElement>) => void
    rowsPerPageOptions: number[]
    rowsPerPage: number
    handleChangeRowsPerPage: (e: ChangeEvent<HTMLSelectElement>) => void
    sortedRowsPerPageOptions: number[]
}

const Pagination ({ numPages, currentPage, , handleChangePageInput, rowsPerPageOptions, rowsPerPage, handleChangeRowsPerPage, sortedRowsPerPageOptions }) => {

    const [currentPage, setCurrentPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(
    rowsPerPageOptions ? rowsPerPageOptions[0] : 10
  )

      // const handleChangePage = (page: number) => {
  //     setCurrentPage(page)
  // }

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page)
    onChangePage(page)
  }

  const sortedRowsPerPageOptions = [...rowsPerPageOptions].sort((a, b) => a - b)

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

    return (
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

}

  export default Pagination

