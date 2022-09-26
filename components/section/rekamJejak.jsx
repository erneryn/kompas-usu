import React from "react";
import Wording from '../../wording.json'
import Link from 'next/link'
import Image from 'next/image'
import NextCarousel from "../utils/Carousel";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import HTMLReactParser, { domToReact } from "html-react-parser"
import { ImNewspaper } from 'react-icons/im'


export const CarouselList = ({data}) => (
  <NextCarousel items={3}>
    {data.map((e, key) => <Link href={`/rekam-jejak/${e.slug}`} passHref key={e}>
      <div className="bg-gray-100 mx-2 rounded-t-3xl mb-5 cursor-pointer">
        <div className="relative h-72 rounded-t-3xl bg-slate-500">
          <Image src={e.images} layout="fill" objectFit="cover" alt={e.title} className="rounded-t-3xl" />
        </div>
        <div>
        </div>
        <div className="p-2 px-4 h-48">
          <h1 className="font-bold text-black text-xl mb-1">{e.title}</h1>
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
          <div className="flex items-center justify-center mb-4 text-gray-600">
            <ImNewspaper size={50} />
            <h1 className="text-4xl  text-gray-600 ml-3">Article</h1>
          </div>
          <CarouselList data={data}/>
        </div>
      </div>
    );
}


