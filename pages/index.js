import Head from "next/head";
import Jumbotron from "../components/jumbotron";
import Navbar from "../components/navbar";
import About from "../components/about";
import Ikrar from "../components/ikrar";
import RekamJejak from "../components/rekamJejak";
import Division from "../components/division";
import KontakKami from "../components/contact";
import { Element } from "react-scroll";
import Layout from "../components/layout/mainlayout";

export default function Home() {
  return (
    <div className="w-screen">
      <Head>
        <title>Kompas USU</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Kompas USU, Korps Mahasiswa Pecinta Alam dan Sttudi Lingkungan Hidup"
        />
        <meta
          name="keywords"
          content="KOMPAS, USU, Universitas Sumatera Utara, Mapala, Lingkungan Hidup, Unit Kegiatan Mahasiswa, Mahasiswa Penggiat Alam"
        />
        <meta name="author" content="Kompas, Universitas Sumatera Utara" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div>
        <Layout>
          <Jumbotron />
          <Element name="about">
            <About />
          </Element>
          <Element name="ikrar">
          <Ikrar />
          </Element>
          <Element name="rekamjejak">
          <RekamJejak />
          </Element>
          <Element name="division">
          <Division />
          </Element>
        </Layout>
      </div>
    </div>
  );
}
