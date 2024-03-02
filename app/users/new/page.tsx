"use client"

import { useRouter } from "next/navigation"

import { Button } from "@/app/components"

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
        <Button
          className="btn btn-primary"
          type="submit"
          onClick={() => router.push("/users")}
        >
          Create
        </Button>
      </form> */}
      <Button className="btn btn-primary" onClick={() => router.push("/users")}>
        Create
      </Button>
    </>
  )
}

export default NewUserPage
