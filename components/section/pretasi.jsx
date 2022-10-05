import Image from 'next/image'
import Link from 'next/link'
import { GiAchievement } from 'react-icons/gi' 

const LargeBox = (data,idx) => {
  return (
    <div className="rounded-xl w-full row-span-2 relative" key={idx}>
      <Image src={data.images} layout="fill" objectFit='cover' className='rounded-xl'/>
    </div>
  )
}

// const SmallBox = (data, idx) => {
//   return (
//     <>
//     <div className="rounded-xl w-full h-48 bg-slate-400">{data.title}</div>
//     <div className="rounded-xl w-full h-48 bg-slate-400">3</div>
//     <div className="rounded-xl w-full h-48 bg-slate-400">3</div>
//     <div className="rounded-xl w-full h-48 bg-slate-400">3</div>
//     </>
//   )
// }

export default function Prestasi ({data}) {
  const sliceData = data.slice(0,4)
  return (
    <div className="pt-8 pb-8 px-2 flex flex-col items-center bg-gray-200">
    <div className="flex items-center justify-center mb-4 text-gray-600">
            <GiAchievement size={50} />
            <h1 className="text-4xl  text-gray-600 ml-3">PRESTASI</h1>
          </div>
    <div className="grid grid-cols-2 gap-4 w-full sm:w-8/12">
      {
        sliceData.map((prestasi,idx) => {
          return (
            <Link href={'/prestasi/'+ prestasi.slug} key={idx}>
            <div className='relative'>
            <div className="rounded-xl w-full relative h-80" key={idx}>
              <Image src={prestasi.images} layout="fill" objectFit='cover' className='rounded-xl scale-100 hover:scale-105 ease-in duration-100'/>
            </div>
            <div className='bg-black absolute bottom-0 left-0 right-0 rounded-b-2xl'>
                <p className='text-white uppercase p-4 sm:text-xl break-words'>{prestasi.title}</p>
            </div>
            </div>
            </Link>
          )
        })
      }
    </div>
    </div>
  )
}
