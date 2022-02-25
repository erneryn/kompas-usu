import { useRouter } from 'next/router'
import Wording from '../../../wording.json'
import parse from 'html-react-parser';
import Layout from '../../../components/layout/mainlayout';

const Content = (query)=>{
    console.log(query)
    const Article = Wording.Articles.filter(e=>{
        return e.id == query
    })
    return (Article && (
            <div>
            <h1 className='text-2xl'>{Article[0].title}</h1>
            <img src={Article[0].img_url} width="600" className="py-5"></img>
            {
                parse(Article[0].long_desc)
            }
            </div>
    )
    )
}

export default function Articles(){
    const router = useRouter()
    console.log(router)
    return(
        <div>
            <Layout type='pages'>
            <div className='flex items-center justify-center w-full relative bg-zinc-200 pt-28 py-10'>
                <div className='w-10/12 bg-zinc-100 p-5'>
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
            </Layout>
        </div>
    )
}