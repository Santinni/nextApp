import { z } from "zod"

const schema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  surname: z.string().min(2).max(50),
  username: z.string().min(2).max(50),
})

export default schema
