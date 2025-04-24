import { BiText } from "react-icons/bi"; 
import { BiCartAdd } from "react-icons/bi"; 
import { BsPerson } from "react-icons/bs"; 
import { BsListNested } from "react-icons/bs"; 
import { AiOutlineHome } from "react-icons/ai"; 
import { AiOutlinePlusCircle } from "react-icons/ai"; 
import { BiHomeAlt } from "react-icons/bi"; 
import ListMenu from "../components/ListMenu.jsx";
export default function Sidebar() {
    return (
      <div
        id="sidebar"
        className="flex min-h-screen w-90 flex-col bg-[#9FB3DF] p-10 shadow-lg"
      >
        {/* Logo */}
        <div id="sidebar-logo" className="flex flex-col">
          <span
            id="logo-title"
            className="font-poppins text-[48px] text-white
                -900"
          >
            Kuliner Kita
          </span>
          <span
            id="logo-subtitle"
            className=" font-barlow font-semibold text-white
                -400"
          >
            {" "}
            Admin Panel{" "}
          </span>
        </div>

        {/* List menu*/}
        <div id="sidebar-menu" className="mt-10">
          <ul id="menu-list" className="space-y-3">
            <ListMenu
              id="menu 1"
              icon={<AiOutlineHome />}
              label="Dashboard"
              isActive
              to="/"
            />
            <ListMenu id="menu 2" icon={<BiCartAdd />} label="Produk" to="produk" />
            <ListMenu id="menu 3" icon={<BiText />} label="Artikel" to="artikel" />
            <ListMenu id="menu 4" icon={<BsPerson />} label="Karyawan" to="karyawan" />

            {/* List Menu
            
            <div id="sidebar-menu" className="mt-10">
                <ul id="menu-list"className="space-y-3">
                    <li>
	                    <div id="menu-1" className="hover:text-hijau flex 
                        cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"> <BiHomeAlt  className="mr-4 text-xl"/> Dashboard</div>
	                  </li>
                    <li>
	                    <div id="menu-2" className="hover:text-hijau flex cursor-pointer items-center
                         rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"> <BsList  className="mr-4 text-xl" /> Orders</div>
	                  </li>
	                  <li>
	                    <div id="menu-3" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium
                         text-gray-600 hover:bg-green-200 hover:font-extrabold"> <BsFillPersonFill  className="mr-4 text-xl" />Customers</div>
	                  </li> */}
          </ul>
        </div>

        {/* Footer */}
        <div id="sidebar-footer" className="mt-auto">
          <div
            id="footer-card"
            className="bg-[#FFF1D5] px-4 py-2 rounded-md shadow-lg 
                mb-10 flex items-center"
          >
            <div id="footer-text" className="flex-1 p-2 text-white text-sm">
              <span className="text-black text-sm">
                {" "}
                ask you query, our support team will contact 24/7 to you !
              </span>
              <div
                id="add-menu-button"
                className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2"
              >
                <span className="text-gray-600 flex items-center">
                  {" "}
                  <AiOutlinePlusCircle className="mr-4 text-xl" />
                  Add Menus
                </span>
              </div>
            </div>
            <img
              id="footer-avatar"
              className="w-20 rounded-full"
              src="https://avatar.iran.liara.run/public/28"
            />
          </div>
          <span id="footer-brand" className="font-bold text-gray-400">
            Sedap Restaurant Admin Dashboard
          </span>
          <p id="footer-copyright" className="font-light text-gray-400">
            &copy; 2025 All Right Reserved
          </p>
        </div>
      </div>
    );
}
