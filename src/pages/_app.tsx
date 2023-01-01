import { Provider } from "react-redux"
import type { AppPropsWithLayout } from "src/next"
import "src/adapters/primary/reset.css"
import { createStore } from "src/store"
import { InMemoryPlayerGateway } from "src/adapters/secondary/inMemoryPlayerGateway"

const store = createStore({
  playerGateway: new InMemoryPlayerGateway([
    { id: "UUID-JOHN", name: "John Doe" },
    { id: "UUID-JANE", name: "Jane Doe" },
  ]),
})

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <section>{page}</section>)

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  )
}
