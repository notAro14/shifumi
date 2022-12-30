const all = () => "https://jsonplaceholder.typicode.com/users"
const byId = (id: number) => `https://jsonplaceholder.typicode.com/users/${id}`

export const USER_TAG = "User" as const
export const USER_URLS = { all, byId }
