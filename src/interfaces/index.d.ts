export interface UserProps {
  id: number
  email: string
  name: string
  surname: string
  username?: string
  followers: number
  isActive: boolean
  registeredAt: string
  role: string
}
