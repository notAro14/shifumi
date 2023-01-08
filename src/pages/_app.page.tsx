import Head from "next/head"
import { Provider } from "react-redux"
import type { AppPropsWithLayout } from "src/types/next"
import { configureAppStore } from "src/core/store/configureAppStore"

import Layout from "./layout"
import "src/styles/reset.css"
import "src/styles/open-props.css"
import { InMemoryRandomShifumiGateway } from "src/adapters/secondary/gateways/inMemoryRandomShifumiGateway"

const shifumiGateway = new InMemoryRandomShifumiGateway()
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
