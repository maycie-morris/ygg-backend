import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

// Components
import HomePage from './home';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>YGG | Yield Guild Games</title>
        <meta name='description' content='Yield Guild Games' />
        <link rel='icon' href='/ygg_shield.png' />
      </Head>
      <>
        <HomePage />
      </>
    </div>
  );
};

export default Home;
