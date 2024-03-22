import Image from "next/image"

import { auth, signIn, signOut } from "@/auth"
import { Button } from "@/src/components"

import { User } from "../../icons"

async function ProfileDropdown() {
  const session = await auth()
  return (
    <div className="ProfileDropdown">
      {session && session.user ? (
        <div className="flex gap-2 items-center justify-center">
          {session.user.image && session.user.image.length > 0 ? (
            <Image
              className="rounded-full h-8 w-8"
              src={session.user.image!}
              alt={session.user.name!}
              width={32}
              height={32}
            />
          ) : (
            <User className="rounded-full h-8 w-8" />
          )}
          <p>{session.user.name}</p>
          <form
            action={async () => {
              "use server"
              await signOut()
            }}
          >
            <Button className="btn" type="submit">
              Sign Out
            </Button>
          </form>
        </div>
      ) : (
        <>
          <form
            action={async () => {
              "use server"
              await signIn()
            }}
          >
            <Button className="btn" type="submit">
              Sign In
            </Button>
          </form>
        </>
      )}
    </div>
  )
}

export default ProfileDropdown
