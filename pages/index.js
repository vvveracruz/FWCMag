import Head from 'next/head'
import Link from 'next/Link'
import SplashScreen from '../components/splashscreen.js'

export default function Home() {
  return (
    <SplashScreen>
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="title">
            Filmmakers Without Cameras
          </h1>

          <p>
            <Link href="vibe"><a>What are we about?</a></Link>
          </p>

          <p>
            Get the current issue.
          </p>

          <p>
            <Link href="authors"><a>Who are we?</a></Link>
          </p>

        </main>
      </div>
    </SplashScreen>
  )
}
