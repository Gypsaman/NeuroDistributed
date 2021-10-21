import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Neural Network Contracts</title>
        <meta name="description" content="distributed contracts" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Neuro Distributed
        </h1>
        <Image src="/logo.svg" alt="Neuro Distributed Logo" width={400} height={50} />
        <p className={styles.description}>
          Development of Chain Block Distributed Applications
        </p>
        

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>Chain Blocks &rarr;</h2>
            <p>Find in-depth information about Chain Blocks</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Smart Contracts &rarr;</h2>
            <p>Smart Contract Documentation</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover Smart Contracts.</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Deploy a Neural Network into a Smart Contract
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/logo.svg" alt="Neuro Distributed Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
