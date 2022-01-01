import { CompassOutlined, ArrowRightOutlined } from "@ant-design/icons";
import wording from '../wording.json'
export default function About() {
  return (
    <div className="w-screen flex items-center justify-center my-6 rounded-t-2xl">
      <div className="w-10/12 sm:w-full sm:text-left bg-gray-200 sm:bg-white flex justify-center rounded-tr-3xl rounded-bl-3xl sm:rounded-none relative">
        <div className="hidden sm:flex w-full">
            <div className="w-7/12 bg-gray-200 ml-32 mb-11">
              <div className="pt-5 pl-5 py-8">
                <h1 className="text-4xl pb-4 text-gray-600">TENTANG KAMI</h1>
              </div>
              <div className="bg-yellow-300 relative sm:-ml-32 sm:-mb-11 sm:mr-16 sm:pr-10 pl-44 py-5">
                <CompassOutlined className="text-5xl text-black mb-3 mr-4"/>
                <p className="text-xl text-black">
                  {wording.about_us_short_desc}
              </p>
              <div className="flex items-center justify-end mt-10 mr-10">
                <div className="flex items-center p-3 hover:bg-white">
              <h1 className="text-gray-600 mr-4">Selengkapnya</h1>
              <ArrowRightOutlined className="text-3xl" />
                </div>
            </div>
              </div>
            </div>
            <div className="w-5/12 bg-bg-tentang-kami bg-no-repeat bg-cover relative">
            <div className="bg-gray-800 z-0 absolute inset-0 bg-opacity-60"></div>
            </div>
        </div>

        <div className="sm:hidden flex flex-col w-full text-left px-5 py-4 bg-bg-tentang-kami bg-no-repeat bg-cover bg-center relative rounded-tr-3xl rounded-bl-3xl">
          <div className="bg-gray-800 z-0 absolute inset-0 bg-opacity-80 rounded-tr-2xl rounded-bl-3xl"></div>
          <div className="relative">
            <CompassOutlined className="text-4xl text-zinc-50 mb-3 mr-4 text-left" />
            <h1 className="text-3xl pb-4 text-zinc-50">TENTANG KAMI</h1>
            <div>
              <p className="text-xl text-zinc-50">
              {wording.about_us_short_desc}
              </p>
            </div>
            <div className="w-full relative left">
              <div className="flex items-center justify-end mt-5 bg-text-zinc-50 py-2 px-0 cursor-pointer bg-yellow-300 -ml-20">
                <h1 className="text-black mr-4">Selengkapnya</h1>
                <ArrowRightOutlined className="text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
