"use client"

interface ErrorPageProps {
  error: Error
  reset: () => void
}

const ErrorPage = (props: ErrorPageProps) => {
  const { error, reset } = props
  console.log(
    "%cError: ",
    "color: red; font-size: 18px; font-weight: bold;",
    error
  )

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-center">Error</h1>
      <p className="text-center">
        An unexpected error occurred. Please try again later.
      </p>
      <button className="btn btn-primary" onClick={() => reset()}>
        Retry
      </button>
    </div>
  )
}

export default ErrorPage
