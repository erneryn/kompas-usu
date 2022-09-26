import Image from "next/image";

const CardActivity = () => {
  return (
    <div style={{ minWidth: '25vw'}}>
      <div className="flex my-5">
        <div>
          <Image src='/rekamjejak.jpg' height={120} width={200} objectFit="cover" alt=""/>
        </div>
        <div className="">
          <h1 className="sm:text-xl">Title Activiy Example</h1>
          <span className="text-xs">September, 2022</span>
        </div>
      </div>
    </div>
  )
}


const KegiatanKami = () => {
  return (
    <div className="">
      {/* <div className="flex overflow-x-auto px-5">
      <CardActivity/>
      <CardActivity/>
      <CardActivity/>
      <CardActivity/>

      </div> */}
    </div>
    // <div className="">
    // <div className="flex overflow-x-auto mt-5 ">
    //   <div className="relative sm:w-1/3 w-2/3 h-auto sm:h-screen ">
    //     <Image src='/rekamjejak.jpg' layout="fill" objectFit="cover" alt="Rekam Jejak"/>
    //     <div className="absolute inset-0 flex items-center justify-center">
    //     <h1 className="sm:text-3xl text-xl text-white border p-2">Rekam Jejak</h1>
    //     </div>
    //   </div>
    //   <div className="w-full p-5 pl-10 sm:flex justify-around items-center hidden">
    //     <div>
    //     <CardActivity/>
    //     <CardActivity/>
    //     <CardActivity/>
    //     <CardActivity/>
    //     </div>
    //     <div>
    //     <CardActivity/>
    //     <CardActivity/>
    //     <CardActivity/>
    //     <CardActivity/>
    //     </div>
    //   </div>
    //   <div className="p-5 pl-10 sm:hidden ">
    //     <div>
    //     <CardActivity/>
    //     <CardActivity/>
    //     </div>
    //     <div>
    //     <CardActivity/>
    //     <CardActivity/>
    //     </div>
    //   </div>
    // </div>
    // </div>
  )
}

export default KegiatanKami;
