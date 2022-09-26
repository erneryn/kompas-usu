import { useRouter } from 'next/router'
import HTMLReactParser from 'html-react-parser';
import Layout from '@/components/layout/mainlayout';

export default function Articles({ post }){
    const router = useRouter()
    return(
        <div>
            <Layout type='pages'>
            <div className='flex items-center justify-center w-full relative pt-28 py-10'>
                <div className='w-8/12  p-5'>
                    <h1 className='text-2xl text-black font-bold text-left' >{post.title.rendered}</h1>
                    <div className='mt-5'>
                    <div className='post'>
                       {HTMLReactParser(post.content.rendered)}
                    </div>
                    </div>
                </div>
            </div>
            {/* <div className='flex flex-col item-center justify-center my-4 border-b-orange-600 border-b-2'>
                <h1 className='text-2xl text-center mb-2'>Artikel Lainnya</h1>
                <div className='w-full'>
                <Carousel/>
                </div>
            </div> */}
            </Layout>
        </div>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch('https://kuapi.rucciartcycles.com/wp-json/wp/v2/posts?categories=6')
    const data = await res.json()

    const paths = data.map(post => {
        return { params : { slug : post.slug}}
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const slug = context.params.slug
    const res = await fetch('https://kuapi.rucciartcycles.com/wp-json/wp/v2/posts?slug=' + slug)
    const data = await res.json()
    return {
        props: {
            post : data[0]
        }
    }
}