import { z } from "zod"

const schema = z.object({
  name: z.string().min(2).max(50),
})

export default schema
