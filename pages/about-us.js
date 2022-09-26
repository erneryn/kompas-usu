import Layout from "@/components/layout/mainlayout"
import HTMLReactParser from "html-react-parser"
export default function About({data}){
    const pagesContent = data[0]
    return (
        <div>
            <Layout type='pages'>
            <div className='flex items-center justify-center w-full relative pt-40 py-10'>
            <div className='w-1/2'>
            <h1 className='text-4xl text-black font-bold text-left mb-2' >{pagesContent.title.rendered}</h1>
            <div className="text-gray-700">
            <div className="post">
            {
                HTMLReactParser(pagesContent.content.rendered)
            }
            </div>
            </div>
            </div>
            </div>
            </Layout>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://kuapi.rucciartcycles.com/wp-json/wp/v2/posts?categories=5')
    const data = await res.json()

    return {
        props: {
            data,
        }
    }
}