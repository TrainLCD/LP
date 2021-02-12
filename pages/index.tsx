import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import AboutSection from '../components/sections/About';
import DownloadSection from '../components/sections/Download';
import FeatureSection from '../components/sections/Feature';
import WelcomeSection from '../components/sections/Welcome';
import { ShowingImage } from '../models/ShowingImage';
import styles from '../styles/pages/Home.module.css';

const images: ShowingImage[] = [
  {
    bg: '/images/bg/fukuoka.jpg',
    mock: '/images/mockup/mojiko.png',
  },
  {
    bg: '/images/bg/kyoto.jpg',
    mock: '/images/mockup/nijo.png',
  },
];

const Home: React.FC = () => {
  const [showingImg, setShowingImg] = useState<ShowingImage>();

  useEffect(() => {
    const index = Math.floor(Math.random() * Math.floor(images.length));
    setShowingImg(images[index]);
  }, []);

  if (!showingImg) {
    return null;
  }

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
      <WelcomeSection showingImg={showingImg} />
      <AboutSection showingImg={showingImg} />
      <FeatureSection />
      <DownloadSection />
    </main>
  );
};

export default Home;