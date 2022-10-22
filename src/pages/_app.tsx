import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar, Footer } from '@elements'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CSUI 22</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Navbar />
      <main className="w-full min-h-screen overflow-x-hidden">
        <div className="w-full min-h-screen bg-primary">
          <Component {...pageProps} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default MyApp
