import Head from 'next/head';
import type { NextPage } from 'next';
import Navbar from '../../components/layout/Navbar';
import Hero from '../../components/home/Hero';
import Blog from '../../components/home/Blog';
import Footer from '../../components/layout/Footer';
import Terms from '../../components/terms/Text';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PrivePay</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
 
        <Terms/>

      <Footer />
    </>
  );
};

export default Home;
