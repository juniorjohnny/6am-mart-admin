import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdArrowDropDown } from 'react-icons/md';

function ProfileButton() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-black">
      <div className="dropdown dropdown-top">
        <div tabIndex={0} className="btn m-1" onClick={toggleDropdown}>
          <div className="flex justify-center items-center">
            <MdArrowDropDown className="text-xl" />
            <div>
              <h1 className="font-bold text-[#00868F]">Jhon Miller</h1>
              <h1 className="text-xs">johnmiller@gmail.com</h1>
            </div>
            <img
              src="https://6ammart-admin.6amtech.com/storage/app/public/vendor/2021-08-22-61214e5a0db7d.png"
              alt=""
              className="w-[35px] h-[35px] rounded-full"
            />
          </div>
        </div>
        {isOpen && (
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-62 h-58 ml-2"
          >
            <li className="border-b border-gray-400">
              <div className="flex justify-center items-center">
                <img
                  src="https://6ammart-admin.6amtech.com/storage/app/public/vendor/2021-08-22-61214e5a0db7d.png"
                  alt=""
                  className="w-[35px] h-[35px] rounded-full"
                />
                <div>
                  <h1 className="font-bold text-[#00868F]">Jhon Miller</h1>
                  <h1 className="text-xs">johnmiller@gmail.com</h1>
                </div>
              </div>
            </li>
            <li className="border-b border-gray-400">
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <button type="button" onClick={() => {return localStorage.setItem('isLoggedIn', false), navigate('/')}}>Sign Out</button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default ProfileButton;
