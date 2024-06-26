import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineAim } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { SiSpringsecurity } from "react-icons/si";
import { MdOutlineSocialDistance } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";
import { FaUser } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";
import groceryIcon from "../Assests/Glosary.png";
import HomeIcon from "@mui/icons-material/Home";

const data = [
  {
    id: 1,
    name: "User",
    url: "",
    icon2: <FaUser />,
  },
  {
    id: 2,
    name: "Transaction & Reports",
    url: "",
    icon2: <TbReportAnalytics />,
  },

  {
    id: 3,
    name: "Dispatch Management",
    url: "",
    icon2: <TfiReload />,
  },
];

const subMenuData = [
  { id: 1, name: " System Module Setup", icon: <AiOutlineAim /> },
  { id: 2, name: "Zone Setup", icon: <MdOutlineDashboard /> },
  { id: 3, name: " Business Settings", icon: <MdOutlineSettingsSuggest /> },
  { id: 4, name: " 3rd Party", icon: <SiSpringsecurity /> },
  {
    id: 5,
    name: "  Social Media and Page Setup",
    icon: <MdOutlineSocialDistance />,
  },
];
function NavItemMenu({ showUserSideNav, setShowUserSideNav }) {
  const [showCatMenu, setShowCatMenu] = useState(false);
  const userRoute = showUserSideNav ? "/" : "/Users/UserOverView";
  return (
    <>
      <div className="flex justify-between items-center w-full">
        <div>
          <ul className="nav-list md:flex flex items-center gap-5 font-medium text-black">
            {/* User Navigation Item */}
            <li className="flex items-center ">
              <Link
                to={userRoute}
                onClick={() => setShowUserSideNav(!showUserSideNav)}
                className="flex items-center space-x-2"
              >
                <FaUser className="hidden md:inline" />{" "}
                {/* Show icon on large screens */}
                <span className="hidden md:inline">
                  {" "}
                  {showUserSideNav ? "Home" : "User"}
                </span>{" "}
                {/* Show name on large screens */}
                <FaUser className="block md:hidden" />
                {/* Show icon only on small screens */}
              </Link>
            </li>

            {/* Transaction & Reports Navigation Item */}
            <li className="flex items-center">
              <Link
                to="/transactions-reports"
                onClick={() => setShowUserSideNav(!showUserSideNav)}
                className="flex items-center space-x-2"
              >
                <TbReportAnalytics className="hidden md:inline" />{" "}
                {/* Show icon on large screens */}
                <span className="hidden md:inline">
                  Transaction & Reports
                </span>{" "}
                {/* Show name on large screens */}
                <TbReportAnalytics className="block md:hidden" />{" "}
                {/* Show icon only on small screens */}
              </Link>
            </li>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn m-1">
              <IoSettingsSharp/>
              <span className="hidden md:inline">
                 Settings
                </span>{" "}
                
            
              </div>
              <ul
                tabIndex={0}
                className=" absolute dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box md:w-80 w-40"
              >
                <div className="h-[150px] md:h-[140px] w-full text-white p-4 bg-[#005555] text-2xl rounded-md">
              
                  Settings
                  <p className="text-sm">
                    Monitor your business general settings from here
                  </p>
                </div>
                <ul>
                  <li>
                    <a
                    
                      className="next-tour"
                    >
                      <img
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/img/navbar-setting-icon/module.svg"
                        alt=""
                      />
                      <span>System Module Setup</span>
                    </a>
                  </li>
                  <li>
                    <a
              
                      className="next-tour"
                    >
                      <img
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/img/navbar-setting-icon/location.svg"
                        alt=""
                      />
                      <span>Zone Setup</span>
                    </a>
                  </li>
                  <li>
                    <a

                      className="next-tour"
                    >
                      <img
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/img/navbar-setting-icon/business.svg"
                        alt=""
                      />
                      <span>Business Settings</span>
                    </a>
                  </li>
                  <li>
                    <a

                      className="next-tour"
                    >
                      <img
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/img/navbar-setting-icon/third-party.svg"
                        alt=""
                      />
                      <span>3rd Party</span>
                    </a>
                  </li>
                  <li>
                    <a
                    
                      className="next-tour"
                    >
                      <img
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/img/navbar-setting-icon/social.svg"
                        alt=""
                      />
                      <span>Social Media and Page Setup</span>
                    </a>
                  </li>
                </ul>
                <div className="flex items-center justify-center hover:text-green-300">
                  view all
                </div>
              </ul>
            </div>

            {/* Dispatch Management Navigation Item */}
            <li className="flex items-center">
              <Link
                to="/dispatch-management"
                onClick={() => setShowUserSideNav(!showUserSideNav)}
                className="flex items-center space-x-2"
              >
                <TfiReload className="hidden md:inline" />{" "}
                {/* Show icon on large screens */}
                <span className="hidden md:inline">
                  Dispatch Management
                </span>{" "}
                {/* Show name on large screens */}
                <TfiReload className="block md:hidden" />{" "}
                {/* Show icon only on small screens */}
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-black">
          <li className="nav-item flex items-center justify-between border-b border-gray-200 py-3">
            <Link className="flex items-center space-x-2">
              <img
                src={groceryIcon}
                className="w-8 h-8 rounded-full"
                alt="Module Icon"
              />
              <span className="text-lg font-semibold text-gray-800">
                Grocery
              </span>
            </Link>
            <button className="text-gray-500 hover:text-gray-700">
            
            </button>
          </li>
        </div>
      </div>
    </>
  );
}

export default NavItemMenu;
