import { Head } from 'vite-react-ssg'

function Home() {
  return (
    <>
      <Head>
        <title>Part-Time CFO Marketing App</title>
        <meta
          name="description"
          content="A marketing app for part-time CFO services."
        />
      </Head>

      <main>
        <p>Part-Time CFO Marketing App</p>
        <h1>Build an SEO-ready marketing experience.</h1>
        <p>
          This Vite React app is configured to prerender static HTML with
          vite-react-ssg.
        </p>
      </main>
    </>
  )
}

export default Home
