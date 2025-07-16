import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flashcode</title>
        <meta name="description" content="Achat de recharges mobiles et cartes cadeaux" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenue sur Flashcode</h1>
        <p className={styles.description}>Achetez vos recharges mobiles et cartes cadeaux en quelques clics.</p>
        <Image src="/images/logo.png" alt="Logo Flashcode" width={200} height={200} />
      </main>
    </div>
  )
}