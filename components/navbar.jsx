import Style from "../styles/Home.module.css";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";
import { useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <div className="hidden  bg-gray-100 w-full sm:flex px-28 py-1 bg-bottom absolute border-b-4 border-b-gray-700 z-10">
        <div className="w-3/12 ">
          <img src="/logo.png" height={80} width={90} alt="logo kompas usu" />
        </div>
        <div className="w-9/12 flex items-center justify-end">
          <ul className="flex items-center">
            <li className="text-lg mr-10 hover:text-yellow-400 cursor-pointer">
              Home
            </li>
            <li className="text-lg mr-10 hover:text-yellow-400 cursor-pointer">
              Tentang Kami
            </li>
            <li className="text-lg mr-10 hover:text-yellow-400 cursor-pointer">
              Rekam Jejak
            </li>
            <li className="text-lg mr-10 hover:text-yellow-400 cursor-pointer">
              Divisi
            </li>
            <li className="text-lg mr-10 hover:text-yellow-400 cursor-pointer">
              Kontak Kami
            </li>
          </ul>
        </div>
      </div>
      <div className="sm:hidden flex justify-between items-center absolute z-10 w-screen">
        <div className="p-4">
          <img src="/logo.png" height={80} width={90} alt="logo kompas usu" />
        </div>
        <div className="p-10" onClick={showDrawer}>
          <MenuOutlined className="text-3xl text-white" />
        </div>
        <Drawer
          width={200}
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          <p className="text-lg mr-10 text-gray-600 my-3 cursor-pointer">
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
            </p>
        </Drawer>
      </div>
    </>
  );
}
