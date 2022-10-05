import HTMLReactParser from 'html-react-parser';
import Layout from '@/components/layout/mainlayout';
import moment from 'moment';

export default function DetailRekamJejak({ post }){
    const generateDate = (date) => {
        return moment(date).format('LL')
    }

    return(
        <div>
            <Layout type='pages'>
            <div className='flex items-center justify-center w-full relative pt-28 py-10'>
                <div className='sm:w-8/12  p-5'>
                    <h1 className='text-2xl text-black font-bold text-left' >{post.title.rendered}</h1>
                    <div className='my-3 text-gray-600'>
                        <p>Diposting pada { generateDate(post.date) }</p>
                    </div>
                    <div className='mt-5'>
                    <div className='post'>
                    {HTMLReactParser(post.content.rendered)}
                    </div>
                    </div>
                </div>
            </div>
            </Layout>
        </div>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch('https://kuapi.rucciartcycles.com/wp-json/wp/v2/posts?categories=7')
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