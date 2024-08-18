import Head from 'next/head';
import type { NextPage } from 'next';
import Navbar from '../../components/layout/Navbar';
import Hero from '../../components/home/Hero';
import Motivation from '../../components/home/Motivation';
import Blog from '../../components/home/Blog';
import Footer from '../../components/layout/Footer';
import Contact from '../../components/Contact/Contact';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PrivePay</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="hidden lg:block w-full h-full absolute">
          
        </div>
        <Contact />
 
      </div>
      <Footer />
    </>
  );
};

export default Home;
