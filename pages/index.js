import Head from "next/head";
import Jumbotron from "../components/jumbotron";
import Navbar from "../components/navbar";
import About from "../components/section/about";
import Ikrar from "../components/ikrar";
import RekamJejak from "../components/section/rekamJejak";
import Prestasi from "@/components/section/pretasi";
import Division from "../components/division";
import KontakKami from "../components/contact";
import News from '@/components/section/news';
import { Element } from "react-scroll";
import Layout from "../components/layout/mainlayout";

export default function Home({data}) {
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
          <Element >
          <News data={data.dataNewsAndUpdate} />
          </Element>
          <Element name="ikrar">
          <Ikrar />
          </Element>
          <Element name="artikel">
          <RekamJejak data={data.featuredJejak} />
          </Element>
          <Element name="division">
          <Division />
          </Element>
          <Element>
            <Prestasi data={data.featuredPrestasi}/>
          </Element>
        </Layout>
      </div>
    </div>
  );
}


export async function getStaticProps() {
  
  const getRekamJeajakData = await fetch('https://kuapi.rucciartcycles.com/wp-json/wp/v2/posts?tags=9')
  const dataRekamJejak = await getRekamJeajakData.json()
  const featuredJejak = await getDataDetails(dataRekamJejak);
  
  const getPrestasiData = await fetch('https://kuapi.rucciartcycles.com/wp-json/wp/v2/posts?tags=10')
  const dataPrestasi = await getPrestasiData.json()
  const featuredPrestasi = await getDataDetails(dataPrestasi)

  const getNewsAndUpdate = await fetch('https://kuapi.rucciartcycles.com/wp-json/wp/v2/posts?categories=7')
  const dataNewsAndUpdate = await getNewsAndUpdate.json()
  const detailNewsAndUpdate = await getDataDetails(dataNewsAndUpdate)

  return {
      props: {
          data: {
            featuredJejak,
            featuredPrestasi,
            dataNewsAndUpdate :detailNewsAndUpdate
          },
      }
  }

  async function getDataDetails(sourceData) {
    const result = []
    for (let el = 0; el < sourceData.length; el++) {
      const formatResult = {
        title: '',
        content: '',
        images: '',
        slug:''
      };
      let mediaData = null
      if(sourceData[el]['_links']['wp:featuredmedia']){
        const media = await fetch(sourceData[el]['_links']['wp:featuredmedia'][0].href);
        mediaData = await media.json();
      }
      formatResult.title = sourceData[el].title.rendered;
      formatResult.content = sourceData[el].excerpt.rendered;
      formatResult.images = mediaData ? mediaData.link : 'https://kuapi.rucciartcycles.com/wp-content/uploads/2022/10/360_F_324143588_Jk9uwkSlhuSEyrGWkuQT7MM6mFbCayIj.jpeg'
      formatResult.slug = sourceData[el].slug
      result.push(formatResult);
    }
    return result
  }
}
