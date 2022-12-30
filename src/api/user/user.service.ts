import api from "src/api/api"
import { User } from "./user.type"
import { USER_URLS } from "./user.constants"

export async function get() {
  const response = await api.get<User[]>(USER_URLS.all())
  return response.data
}
export async function getById(id: number) {
  const response = await api.get<User>(USER_URLS.byId(id))
  return response.data
}

export const UserService = {
  get,
  getById,
}

export default UserService
