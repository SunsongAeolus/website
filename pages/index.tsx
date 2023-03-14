import type { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import HeroHome from "@/components/HeroHome";
import Footer from "@/components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>朝歌风伯</title>
      </Head>
      <Header />

      <main className="flex-grow bg-gray-900">
        <HeroHome />
      </main>
      <Footer />
    </>
  );
};

export default Home;
