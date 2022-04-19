import { useRouter } from 'next/router'
import Wording from '../../../wording.json'
import parse from 'html-react-parser';
import Layout from '../../../components/layout/mainlayout';
import Image from 'next/image';
import { Carousel } from '@/components/rekamJejak'

const Content = (query)=>{
    const Article = Wording.Articles.filter(e=>{
        return e.id == query
    })
    return (Article && (
            <div>
            <h1 className='text-2xl'>{Article[0].title}</h1>
            <div className='w-full relative h-half-screen'>
            <Image src={Article[0].img_url} layout="fill" objectFit='cover' alt="Kompas USU"/>
            </div>
            <br />
            {
                parse(Article[0].long_desc)
            }
            </div>
    )
    )
}

export default function Articles(){
    const router = useRouter()
    return(
        <div>
            <Layout type='pages'>
            <div className='flex items-center justify-center w-full relative bg-zinc-200 pt-28 py-10'>
                <div className='w-11/12 bg-zinc-100 p-5'>
                    <h1 className='text-2xl text-black font-bold text-left' >{router.query.title && router.query.title.toUpperCase()}</h1>
                    <div className='mt-5'>
                        <p className='text-xl'>
                            { 
                            router.query.id && Content(router.query.id)
                            }
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col item-center justify-center my-4 border-b-orange-600 border-b-2'>
                <h1 className='text-2xl text-center mb-2'>Artikel Lainnya</h1>
                <div className='w-full'>
                <Carousel/>
                </div>
            </div>
            </Layout>
        </div>
    )
}