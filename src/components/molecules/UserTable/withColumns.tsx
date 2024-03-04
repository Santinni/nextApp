import { useState } from "react"

import { usePlayerTransactionsQuery } from "champion-data/src/hooks/player/transactions"
import type { PlayerTransaction } from "champion-data/src/types/transactions"

import { Column, Table } from "../components/table/table"
import { classes } from "./transactions.st.css"

const columns: Column<PlayerTransaction>[] = [
  {
    title: "Date",
    dataIndex: "dateCreated",
    sortable: true,
    initialSortDirection: "desc",
    colWidth: "25px",
    render: (value) => {
      if (typeof value !== "string") {
        return <div>Invalid date</div>
      }

      const [datePart, timePart] = value.split("T")
      const [hours, minutes, seconds] = timePart.split(":")

      const formattedSeconds = seconds ? seconds.substring(0, 2) : "00"

      const formattedDate = datePart.split("-").reverse().join(".")
      const formattedTime = `${hours}:${minutes}:${formattedSeconds}`

      return (
        <div className={classes.cellContentWrap}>
          <div className={classes.dateWrapper}>
            <div className={classes.date}>{formattedDate}</div>
            <div className={classes.time}>{formattedTime}</div>
          </div>
        </div>
      )
    },
  },
  {
    title: "Amount",
    dataIndex: "amount",
    sortable: true,
    colWidth: "25px",
    render: (value, record) => {
      const currency = record.currency

      return (
        <div className={classes.cellContentWrap}>
          <div className={classes.winWrapper}>
            <div className={classes.win}>{`${String(value)} ${currency}`}</div>
          </div>
        </div>
      )
    },
  },
  {
    title: "Type",
    dataIndex: "type",
    sortable: true,
    colWidth: "30px",
  },
  {
    title: "Balance",
    dataIndex: "balance",
    sortable: true,
    colWidth: "30px",
    render: (value, record) => {
      const currency = record.currency

      return (
        <div className={classes.cellContentWrap}>
          <div className={classes.winWrapper}>
            <div className={classes.win}>{`${String(value)} ${currency}`}</div>
          </div>
        </div>
      )
    },
  },
  {
    title: "Description",
    dataIndex: "description",
    sortable: true,
    colWidth: "45px",
  },
]

const rowsPerPageOptions = [15, 5, 10, 20, 30]

const Transactions = () => {
  const [page, setPage] = useState(0)
  const [sort, setSort] = useState("dateCreated,desc")
  const [itemsPerPage, setItemsPerPage] = useState(rowsPerPageOptions[0])

  const playerTransactions = usePlayerTransactionsQuery({
    dateFrom: null,
    dateTo: null,
    transactionCategory: null,
    transactionType: null,
    page: page,
    size: itemsPerPage,
    sort: sort,
  })

  const handleSortChange = (dataIndex: string, direction: string) => {
    setSort(`${dataIndex},${direction}`)
  }

  return (
    <>
      <Table<PlayerTransaction>
        columns={columns}
        data={playerTransactions.data?.content ?? []}
        rowsPerPageOptions={rowsPerPageOptions}
        pagination={{
          total: playerTransactions.data?.totalElements ?? 0,
        }}
        onChangePage={setPage}
        onChangeSort={handleSortChange}
        onChangeItemsPerPage={setItemsPerPage}
      />
    </>
  )
}

export default Transactions
