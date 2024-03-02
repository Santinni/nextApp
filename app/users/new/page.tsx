"use client"

import { useRouter } from "next/navigation"

const NewUserPage = () => {
  const router = useRouter()
  return (
    <>
      <h1>New User</h1>
      {/* <form className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={() => router.push("/users")}
        >
          Create
        </button>
      </form> */}
      <button className="btn btn-primary" onClick={() => router.push("/users")}>
        Create
      </button>
    </>
  )
}

export default NewUserPage
