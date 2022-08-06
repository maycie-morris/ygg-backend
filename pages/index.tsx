import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

// Components
import { Layout } from '../components/layout';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>YGG | Yield Guild Games</title>
        <meta name='description' content='Yield Guild Games' />
        <link rel='icon' href='/ygg_shield.png' />
      </Head>
      <Layout />
    </div>
  );
};

export default Home;
