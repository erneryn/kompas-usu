import Layout from "@/components/layout/mainlayout"
import Image from 'next/image'
import BgImages from '../../public/rekamjejakbg.jpg'
import HTMLReactParser, { domToReact } from "html-react-parser"
import moment from "moment"
import Link from "next/link"

export default function RekamJejakList({detailJejak}){
  const CardJejak = ({data}) => {
    return (
      <div>
        <div className="sm:flex p-5 sm:p-0">
          <div className="sm:w-1/2 h-52 relative bg-slate-500">
          <Image src={data.images} layout="fill" objectFit="cover" objectPosition="top"  />
          </div>
          <div className="sm:ml-5 sm:w-1/2 mt-10 sm:mt-0">
            <Link href={'/rekam-jejak/' + data.slug}>
            <h1 className="text-2xl mb-2 cursor-pointer hover:text-yellow-500">{data.title}</h1>
            </Link>
            
            <h1 className="mb-1 text-gray-600">{moment(data.date).format('LL')}</h1>
            {HTMLReactParser(data.content, {
              replace: domNode => {
                if (domNode.name === 'p') {
                  return <p className="line-clamp-5">{domToReact(domNode.children)}</p>;
              }
            }
          })}
            <Link href={'/rekam-jejak/' + data.slug}>
              <div className="sm:hidden flex justify-end items-center">
              <h1 className="mt-4 bg-yellow-300 text-black p-1 px-5 rounded-lg">Selengkapnya</h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="border my-10">
        </div>
      </div>
    )
  }
  return <Layout>
    <div className='flex items-center justify-center w-full relative sm:py-10'>
      <div className="w-full h-half-screen relative">
        <Image src={BgImages} layout="fill" objectFit="cover" objectPosition="top"  />
        <div className="absolute bottom-0 left-0 right-0 top-0 flex justify-center items-center z-100">
          <h1 className=" text-5xl text-white drop-shadow-2xl">Rekam Jejak</h1>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center">
      <div className="sm:w-3/4">
        {
          detailJejak.map((e,index) => <CardJejak key={index} data={e} />)
        }
      </div>
    </div>
  </Layout>
}

export async function getStaticProps() {
  const getRekamJeajakData = await fetch('https://kuapi.rucciartcycles.com/wp-json/wp/v2/posts?categories=6')
  const dataRekamJejak = await getRekamJeajakData.json()
  const detailJejak = await getDataDetails(dataRekamJejak);
  return {
      props: {
        detailJejak
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