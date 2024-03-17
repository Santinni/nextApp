import { auth, signIn, signOut } from "@/auth"
import { Button } from "@/src/components"

async function ProfileDropdown() {
  const session = await auth()
  return (
    <div className="ProfileDropdown">
      {session && session.user ? (
        <div className="flex gap-2 items-center justify-center">
          <img
            className="rounded-full h-8 w-8"
            src={session.user.image!}
            alt={session.user.name!}
          />
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
