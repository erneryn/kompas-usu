import { motion } from "framer-motion";
import Link from "next/link";

export default function Division() {
  const handleClick = (url) => {
    window.open(`${url}`);
  };
  return (
    <div className="bg-no-repeat bg-cover bg-bottom relative mt-10">
      <div className="bg-green-600 w-5/12 sm:w-4/12 p-4">
        <h1 className="text-3xl text-white italic tracking-widest">DIVISI</h1>
      </div>
      <div className="flex justify-center items-center w-full relative">
        <Link href={"/hutan-gunung"} passHref>
          <div className="w-6/12 relative hover:z-20">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
              <div className="bg-gray-400 absolute inset-0 bg-opacity-40 hover:bg-opacity-0 flex items-center justify-center">
                <a className="text-2xl sm:text-3xl text-white relative z-10">
                  HUTAN GUNUNG
                </a>
              </div>
              <div className="w-full h-72 bg-gray-800 bg-bg-hutgun bg-no-repeat bg-center bg-cover flex items-center justify-center"></div>
            </motion.div>
          </div>
        </Link>

        <Link href={"/susur-gua"} passHref>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            className="w-6/12 relative hover:z-20"
          >
            <div className="bg-gray-400 absolute inset-0 bg-opacity-40 hover:bg-opacity-0 flex items-center justify-center">
              <a className="text-2xl sm:text-3xl text-white relative z-10">
                SUSUR GUA
              </a>
            </div>
            <div className="w-full h-72 bg-gray-800 bg-bg-caving bg-no-repeat bg-center bg-cover flex items-center justify-center"></div>
          </motion.div>
        </Link>
      </div>
      <div className="flex justify-center items-center w-full relative">
        <Link href={"/panjat-tebing"} passHref>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            className="w-6/12 relative hover:z-20"
          >
            <div className="bg-gray-400 absolute inset-0 bg-opacity-40 hover:bg-opacity-0 flex items-center justify-center">
              <a className="text-2xl sm:text-3xl text-white relative z-10">
                PANJAT TEBING
              </a>
            </div>
            <div className="w-full h-72 bg-gray-800 bg-bg-panjat bg-no-repeat bg-center bg-cover flex items-center justify-center"></div>
          </motion.div>
        </Link>

        <Link href={"/panjat-tebing"} passHref>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            className="w-6/12 relative hover:z-20 "
          >
            <div className="bg-gray-400 absolute inset-0 bg-opacity-40 hover:bg-opacity-0 flex items-center justify-center">
              <a className="text-2xl sm:text-3xl text-white relative z-10">
                ARUNG JERAM
              </a>
            </div>
            <div className="w-full h-72 bg-gray-800 bg-bg-arjer bg-no-repeat bg-center bg-cover flex items-center justify-center"></div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
