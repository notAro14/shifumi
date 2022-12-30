import {
  render,
  waitForElementToBeRemoved,
  screen,
} from "@testing-library/react"
import { Provider } from "react-redux"

import { store } from "src/store"
import ViewUsers from "./ViewUsers"
import { mockServer, mockUsers } from "./ViewUsers.mock"

const server = mockServer()
beforeAll(function () {
  server.listen()
})
afterAll(function () {
  server.close()
})
afterEach(function () {
  server.resetHandlers()
})

it("renders a list of users", async () => {
  render(
    <Provider store={store}>
      <ViewUsers />
    </Provider>
  )
  await waitForElementToBeRemoved(screen.getByRole("progressbar"))
  expect(screen.queryAllByRole("listitem")).toHaveLength(mockUsers().length)
})
