import React, { Component } from "react";
import Slider from "react-slick";
import Wording from '../wording.json'
import Link from 'next/link'
import Image from 'next/image'

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
    {
      Wording.Articles.map((e,idx)=>
    <div className="px-2" key={idx}>
      <div
        
        className="w-full h-60 bg-cover bg-no-repeat bg-center rounded-t-xl"
        style={{
          backgroundImage:
            `url('${e.img_url}')`,
          }}
      ></div>
      <div className=" bg-gray-100 p-2 pl-6 rounded-b-xl">
        <h1 className="text-xl text-gray-600 font-bold mt-2">{e.title.toUpperCase()}</h1>
        <p className="text-gray-600 my-2 text-justify">
          {e.short_desc.slice(0,280) + '...'}
        </p>
          <Link 
            className="text-gray-600 flex items-end justify-end mr-2"
          href={`/articles/${e.id}`}>
          Selengkapnya..
    </Link>
      </div>
    </div>
      )
    }
  </Slider>
  )
}

export default function SimpleSlider () {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="w-full">
          <div className="flex items-center justify-center mb-4">
            <Image src="/footstep.png" height={40} width={30} className="mr-4" alt="Kompas Usu" />
            <h1 className="text-4xl text-gray-600 ">Rekam Jejak</h1>
          </div>
          <Carousel/>
        </div>
      </div>
    );
}
