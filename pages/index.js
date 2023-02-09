import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AwsTranscribe from '../components/awstranscribe'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aws Transcribe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AwsTranscribe />
      </main>
    </div>
  )
}
