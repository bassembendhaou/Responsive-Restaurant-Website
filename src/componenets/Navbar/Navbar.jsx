import Logo from "../../assets/food-logo.png";
import { FaCartArrowDown } from "react-icons/fa";
import DarkMode from "../DarkMode/DarkMode";

export default function Navbar() {
  return (
    <>
      <div className="shadow-md bg-slate-50 dark:bg-gray-900 dark:text-white duration-200">
        <div className="container">
          <div className="flex justify-between items-center gap-2 h-14">
            <div>
              <a
                href="#"
                className="flex justify-center items-center gap-2 text-2xl sm:text-3xl font-bold"
              >
                <img src={Logo} alt="logo" className="w-10" />
                Foodie
              </a>
            </div>
            <div className="flex gap-2">
              <div className="flex justify-center items-center">
                <DarkMode />
              </div>
              <ul className="hidden sm:flex gap-2 items-center">
                <li>
                  <a href="#" className="hover:text-primary px-2">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary px-2">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary px-2">
                    Contact
                  </a>
                </li>
              </ul>
              <button className=" flex gap-2 bg-gradient-to-r  from-primary to-secondary px-4 py-1 rounded-full text-white">
                Order
                <FaCartArrowDown className="text-2xl text-white cursor-pointer drop-shadow-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
