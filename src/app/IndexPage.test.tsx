import { render } from "@testing-library/react"

import Index from "./page"

test("Index page renders without throwing", () => {
  expect(() => {
    render(<Index />)
  }).not.toThrow()
})
