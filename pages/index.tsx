import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';

export default function Home(): React.ReactElement {
  return (
    <main className={styles.main}>
      <Head>
        <title>TrainLCD</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="theme-color" content="#333333" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:title" content="TrainLCD" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trainlcd.tinykitten.me/" />
        <meta
          property="og:image"
          content="https://trainlcd.tinykitten.me/ogp.png"
        />
        <meta property="og:image:width" content="1266" />
        <meta property="og:image:height" content="585" />
        <meta
          property="og:description"
          content="TrainLCDは、位置情報と連動して電車のLCDを再現するアプリです。"
        />
        <meta property="og:site_name" content="TrainLCD" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tinykitten8" />
        <meta name="twitter:creator" content="@tinykitten8" />
        <meta property="fb:app_id" content="596269604527027" />
      </Head>
    </main>
  );
}
