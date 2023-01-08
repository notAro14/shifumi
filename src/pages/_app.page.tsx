import Head from "next/head"

import type { AppPropsWithLayout } from "src/types/next"
import Layout from "src/adapters/primary/react/components/Layout"
import ReduxProvider from "src/adapters/primary/react/components/ReduxProvider"
import "src/styles/reset.css"
import "src/styles/open-props.css"

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)

  return (
    <>
      <Head>
        <title>Rock Paper Scissors</title>
      </Head>
      <ReduxProvider>{getLayout(<Component {...pageProps} />)}</ReduxProvider>
    </>
  )
}
