export default function Jumbptron () {
  return (
    <div className="relative overflow-x-hidden">
      <div className="h-screen ">
        <div className="bg-gray-700 bg-bg-jumbotron  bg-no-repeat bg-cover w-screen h-screen absolute inset-0">
          <div className="bg-gray-700 bg-opacity-50  absolute inset-0"></div>
        </div>
				<div className="bottom-0 w-screen flex items-center justify-center absolute">
            <div className="w-11/12 sm:w-8/12 bg-gray-400 bg-opacity-30 py-7 px-4 mb-10 sm:mb40 rounded-xl">
            <h1 className="text-4xl text-yellow-300 font-bold text-center">KOMPAS USU</h1>
            <h1 className="text-base text-white text-center mb-4 tracking-wide">Korps Mahasiswa Pencinta Alam dan Studi Lingkungan Hidup</h1>
            <h1 className="text-xl sm:text-2xl text-white font-bold text-center">Membina insan akademis yang sadar, mampu, dan bertanggungjawab untuk melestarikan alam sebagai lingkungan hidup yang sehat.</h1>
            </div>
        </div> 
      </div>
			
    </div>
  );
};
