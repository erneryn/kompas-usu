import React from "react";
import Wording from '../../wording.json'
import Link from 'next/link'
import Image from 'next/image'
import NextCarousel from "../utils/Carousel";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import HTMLReactParser, { domToReact } from "html-react-parser"
import { ImNewspaper } from 'react-icons/im'
import { GiSteeltoeBoots } from 'react-icons/gi'


export const CarouselList = ({data}) => (
  <NextCarousel items={1}>
    {data.map((e, key) => <Link href={`/news-and-article/${e.slug}`} passHref key={e}>
      <div className="sm:mx-40 rounded-t-3xl mb-5 cursor-pointer flex  pb-10 h-72">
        <div className="relative h-72 w-1/2 bg-slate-500">
          <Image src={e.images} layout="fill" objectFit="cover" alt={e.title} />
        </div>
        <div className="p-5 h-72 px-4 w-1/2 border">
          <h1 className="font-bold text-black sm:text-xl mb-1">{e.title}</h1>
          {HTMLReactParser(e.content, {
            replace: domNode => {
              if (domNode.name === 'p') {
                return <p className="line-clamp-5">{domToReact(domNode.children)}</p>;
              }
            }
          })}
        </div>
      </div>
    </Link>)}
  </NextCarousel>
)

export default function SimpleSlider ({data}) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="w-11/12">
          <div className="flex items-center justify-center mb-8 text-gray-600">
            {/* <GiSteeltoeBoots size={50} /> */}
            <h1 className="text-4xl  text-gray-600 ml-3">NEWS AND ARTICLE</h1>
          </div>
          <CarouselList data={data}/>
        </div>
      </div>
    );
}


