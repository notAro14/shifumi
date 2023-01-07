import Head from "next/head"
import { Provider } from "react-redux"
import type { AppPropsWithLayout } from "src/types/next"
import { configureAppStore } from "src/core/store/configureAppStore"

import Layout from "./layout"
import "src/styles/reset.scss"
import "src/styles/open-props.scss"
import { InMemoryShifumiGateway } from "src/adapters/secondary/gateways/inMemoryShifumiGateway"

const shifumiGateway = new InMemoryShifumiGateway()
shifumiGateway.shape = "Rock"
const store = configureAppStore({ shifumiGateway })

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)

  return (
    <Provider store={store}>
      <Head>
        <title>Rock Paper Scissors</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  )
}
