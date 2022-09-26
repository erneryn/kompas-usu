import { useRouter } from 'next/router'
import KontakKami from '../../components/contact'
import Wording from '../../wording.json'
import parse from 'html-react-parser';
import Layout from '../../components/layout/mainlayout';
import Image from 'next/image';
import DivisionComp from '@/components/division';

const Content = (query)=>{
    return (
        <div className='text-xl'>
        <Image src={Wording[query].image} width={600} height={400} alt=""/>
        <div>
        {
            parse(Wording[query].desc)
        }
        </div>
        </div>
    )
}

export default function Division(){
    const router = useRouter()
    return(
        <div>
            <Layout type="pages">
            <div className='flex items-center justify-center w-full relative bg-zinc-200 pt-28 py-10'>
                <div className='w-10/12 bg-zinc-100 p-5'>
                    <h1 className='text-2xl text-black font-bold text-left' >{router.query.division && router.query.division.toUpperCase()}</h1>
                    <div className='mt-5'>
                            { 
                            router.query.division && Content(router.query.division)
                            }
                    </div>
                </div>         
            </div>
            <DivisionComp/>
            </Layout>
        </div>
    )
}