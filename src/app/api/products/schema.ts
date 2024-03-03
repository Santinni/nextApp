import { z } from "zod"

const schema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(100),
  price: z.number().int().positive(),
  image: z.string().url(),
})

export default schema
