import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Top Scratcher here</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Top Scratcher!" />
        <p className="description">
          We'd love to share with you Top Scratchers and Most Popular projects on Scratch.
        </p>
      </main>

      <Footer />
    </div>
  )
}
