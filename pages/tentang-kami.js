import Layout from "@/components/layout/mainlayout"
import HTMLReactParser, {domToReact} from "html-react-parser"
export default function About({data}){
    const pagesContent = data[0]
    return (
        <div>
            <Layout type='pages'>
            <div className='flex items-center justify-center w-full relative pt-40 py-10'>
            <div className='sm:w-1/2 w-11/12'>
            <h1 className='text-4xl text-black font-bold text-left mb-2' >{pagesContent.title.rendered}</h1>
            <div className="text-gray-700">
            <div className="post">
            {
                HTMLReactParser(pagesContent.content.rendered,{
                    replace : ({ attribs, children }) => {
                        if(attribs && attribs.class === 'has-large-font-size') {
                            return (
                                <h2 className="text-3xl">{domToReact(children,{
                                    replace: ({attribs, children}) => {
                                        if(!attribs) return;
                                        return <span>{domToReact(children)}</span>
                                    }
                                })}</h2>
                            )
                        }
                    }
                })
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