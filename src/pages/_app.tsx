import { Provider } from "react-redux"
import type { AppPropsWithLayout } from "src/next"
import "src/adapters/primary/reset.css"
import { createStore } from "src/store"
import { JsonPlaceHolderGateway } from "src/adapters/secondary/jsonPlaceholerGateway"

const store = createStore({
  playerGateway: new JsonPlaceHolderGateway(),
})

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <section>{page}</section>)

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  )
}
