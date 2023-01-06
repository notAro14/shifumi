import Head from "next/head"
import type { AppPropsWithLayout } from "src/types/next"

import Layout from "./layout"
import "src/styles/reset.scss"
import "src/styles/open-props.scss"

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)

  return (
    <>
      <Head>
        <title>Rock Paper Scissors</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}
