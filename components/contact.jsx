import {
  PushpinOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
  GoogleOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

export default function Ikrar() {
  return (
    <div className="flex flex-col w-full bg-gray-200 items-center justify-center mt-10">
      <div className="flex w-full">
        <div className="w-4/12 h-24 sm:h-80 bg-bg-footer-2 bg-no-repeat bg-cover bg-right-top opacity-80"></div>
        <div className="w-4/12 sm:h-80 bg-bg-footer-1 bg-no-repeat bg-cover bg-right opacity-80"></div>
        <div className="w-4/12 sm:h-80 bg-bg-footer-3 bg-cover bg-no-repeat opacity-80"></div>
      </div>

      <h1 className="text-2xl italic pb-4 text-gray-600 mt-8">TEMUKAN KAMI</h1>

      <div className="w-9/12 bg-gray-500 border-t-2 border-gray-500"></div>

      <div className="flex flex-col sm:flex-row justify-center w-9/12 mt-10">
        <div className="sm:w-6/12 pl-9 pr-2">
          <h1 className="text-lg text-g text-gray-500 mb-5 font-bold">
            Sekretariat
          </h1>
          <PushpinOutlined className="text-2xl mb-2 text-gray-500" />
          <p className="text-gray-500">
            Jalan Alumni No.2 Kampus Universitas Sumatera Utara
          </p>
        </div>
        <div className="sm:w-6/12 pl-9 sm:mt-0 mt-10">
          <h1 className="text-lg text-g text-gray-500 mb-5 font-bold">
            Social Media
          </h1>
          <div className="flex items-center">
            <div className="mr-2 w-20">
              <InstagramOutlined className="text-gray-500 text-4xl" />
              <h1 className="text-gray-500 mt-2">Instagram</h1>
            </div>
            <div className="mr-2 w-20">
              <WhatsAppOutlined className="text-gray-500 text-4xl" />
              <h1 className="text-gray-500 mt-2">Whatsapp</h1>
            </div>
            <div className="mr-2 w-20">
              <GoogleOutlined className="text-gray-500 text-4xl" />
              <h1 className="text-gray-500 mt-2">Gmail</h1>
            </div>
            <div className="mr-2 w-20">
              <TwitterOutlined className="text-gray-500 text-4xl" />
              <h1 className="text-gray-500 mt-2">Twitter</h1>
            </div>
          </div>
        </div>
      </div>

			<div className="flex items-center justify-between mt-10 mb-10">
			<img src="/logo_usu.png" height={100} width={130} alt="logo kompas usu" />
			<div className="mx-5"></div>
			<img src="/logo.png" height={100} width={100} alt="logo kompas usu" />
			</div>

			<div className="bg-black w-full py-1 text-center">
				<h1 className="text-white font-light text-xs">
				Korps Mahasiswa Pecinta Alam Universitas Sumatera Utara @ 2022
				</h1>
			</div>

    </div>
  );
}
