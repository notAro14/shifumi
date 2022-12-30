import { rest } from "msw"
import { setupServer } from "msw/node"

import type { User } from "src/api/user/user.type"
import { USER_URLS } from "src/api/user/user.constants"

export function mockUsers(): User[] {
  return [
    {
      id: "1",
      name: "John",
      username: "john.doe",
      email: "john.doe@email.com",
      website: "https://www.johndoe.com",
    },
  ]
}

export function mockServer() {
  return setupServer(
    rest.get(USER_URLS.all(), function (_req, res, ctx) {
      return res(ctx.json(mockUsers()))
    })
  )
}
