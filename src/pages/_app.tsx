import Head from "next/head"

import type { AppPropsWithLayout } from "src/types/next"
import Layout from "src/adapters/primary/react/components/Layout"
import ReduxProvider from "src/adapters/primary/react/components/ReduxProvider"
import ThemeProvider from "src/adapters/primary/react/components/ThemeProvider"
import "src/styles/reset.css"
import "src/styles/open-props.css"

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)

  return (
    <ReduxProvider>
      <ThemeProvider>
        <Head>
          <title>Rock Paper Scissors</title>
        </Head>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </ReduxProvider>
  )
}
