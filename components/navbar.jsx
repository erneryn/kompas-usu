import Style from "../styles/Home.module.css";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";
import { useState } from "react";
import Link from 'next/link';
import { Link  as Scroll  } from "react-scroll";
import Image from 'next/image'


export default function Navbar({type}) {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const HomeNavbar = ({type}) => {
    return (
      <>
     <Link href='/tentang-kami'>
      <li className="text-lg mr-10 text-gray-600 my-3 cursor-pointer">
        Tentang Kami
      </li>
      </Link>
      <Link href='/rekam-jejak'>
      <li className="text-lg mr-10 text-gray-600 my-3 cursor-pointer">
        Rekam Jejak
      </li>
      </Link>
      <Link href='/prestasi'>
      <li className="text-lg mr-10 text-gray-600 my-3 cursor-pointer">
        Prestasi
      </li>
      </Link>
      <Link href='/news-and-article'>
      <li className="text-lg mr-10 text-gray-600 my-3 cursor-pointer">
        News & Article
      </li>
      </Link>
      {/* <Scroll
          to="division"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
      <li className="text-lg mr-10 hover:text-yellow-400 cursor-pointer">
        Minat
      </li>
      </Scroll> */}
      </>
    )
  }

  return (
    <>
      <div className="hidden  bg-gray-100 w-full sm:flex px-28 py-1 bg-bottom border-b-4 border-b-gray-700 z-50 fixed">
        <div className="w-3/12 ">
        <Link href='/' passHref>
          <Image src="/logo.png" height={80} width={80} alt="logo kompas usu" />
          </Link>
        </div>
        <div className="w-9/12 flex items-center justify-end">
          <ul className="flex items-center">
            <Link href='/' passHref>
            <li className="text-lg mr-10 hover:text-yellow-400 cursor-pointer">
              Home
            </li>
            </Link>
            <HomeNavbar type={type}/>
          </ul>
        </div>
      </div>
      <div className="sm:hidden flex justify-between items-center z-10 w-screen">
        <div className="p-4">
        <Link href='/' passHref>
          <Image src="/logo.png" height={80} width={80} alt="logo kompas usu" />
          </Link>
        </div>
        <div className="p-10" onClick={showDrawer}>
          <MenuOutlined className="text-3xl text-yellow-300" />
        </div>
        <Drawer
          width={200}
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          {/* <p className="text-lg mr-10 text-gray-600 my-3 cursor-pointer">
              Home
            </p>
            <p className="text-lg mr-10 text-gray-600 my-3 cursor-pointer">
              Tentang Kami
            </p>
            <p className="text-lg mr-10 text-gray-600 my-3 cursor-pointer">
              Rekam Jejak
            </p>
            <p className="text-lg mr-10 text-gray-600 my-3 cursor-pointer">
              Divisi
            </p>
            <p className="text-lg mr-10 text-gray-600 my-3 cursor-pointer">
              Kontak Kami
            </p> */}
            <Link href='/tentang-kami'>
      <p className="text-lg mr-10 text-gray-600 my-3 cursor-pointer">
        Tentang Kami
      </p>
      </Link>
      <Link href='/rekam-jejak'>
      <p className="text-lg mr-10 text-gray-600 my-3 cursor-pointer">
        Rekam Jejak
      </p>
      </Link>
      <Link href='/prestasi'>
      <p className="text-lg mr-10 text-gray-600 my-3 cursor-pointer">
        Prestasi
      </p>
      </Link>
      <Link href='/news-and-article'>
      <p className="text-lg mr-10 text-gray-600 my-3 cursor-pointer">
        News & Article
      </p>
      </Link>
        </Drawer>
      </div>
    </>
  );
}
