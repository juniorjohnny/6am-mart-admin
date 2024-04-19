import * as React from 'react';
import { LuListFilter } from "react-icons/lu";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Tabs } from '@mui/material';
import { useState, useEffect } from 'react';


import { FaSearch } from 'react-icons/fa';

import { IoMdStar } from "react-icons/io";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ToggleButton from '../Components/ToggleButton';

const tableData = [

  {
    "id": 1,
    "storeName": "Organic Shop",
    "imageUrl": "https://6ammart-admin.6amtech.com/storage/app/public/store/2022-03-22-62395ac6e1750.png",
    "ratings": '98**************1',
    "totalProducts": 4,
    "totalOrders": 2,
    "statusChecked": true,
    "actionUrl": "https://6ammart-admin.6amtech.com/admin/store/recommended-store-remove/1"
  },
  {
    "Sl": "1",
    "Store information": {
      "title": "Country Fair",
      "Id": "34",
      "imgSrc": "https://6ammart-admin.6amtech.com/storage/app/public/store/2022-03-23-623aa192a4278.png"
    },
    "Owner information": {
      "name": "John Doe G",
      "phoneNumber": "020000000015"
    },
    "Zone": "Main Demo Zone",
    "Featured": true,
    "Status": true,
    "Action": {
      "viewLink": "https://6ammart-admin.6amtech.com/admin/store/view/34",
      "editLink": "https://6ammart-admin.6amtech.com/admin/store/edit/34",
      "deleteLink": "https://6ammart-admin.6amtech.com/admin/store/delete/34"
    }
  },

];


function NewStore() {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your search logic here
  };

  return (
    <div>

      <div>
        <Box sx={{ typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Pending Stores" value="1" />
                <Tab label="Denied Stores" value="2" />

              </TabList>
            </Box>
            <TabPanel value="1">
              <h1 className="page-header-title capitalize m-0 flex text-2xl gap-3 font-semibold ">
                <span className="page-header-icon text-2xl">
                  <LuListFilter style={{ height: '2rem', width: '2rem' }} />
                </span>
                <span> New Joining Requests  </span>
              </h1>

              <div className="md:flex  items-center justify-between md:gap-4 mt-5 border  ">
                <h1 className="page-header-title capitalize m-0 flex text-lx ml-2 gap-3 font-extrabold">
                  <span>
                    Stores List
                    <span className="badge badge-soft-dark ml-2 text-sm bg-gray-300 p-1">1</span>
                  </span>
                </h1>

                <form className="search-form  sm:min-w-0" onSubmit={handleSubmit}>
                  <div className="relative flex items-center gap-0 ml-2 ">
                    <input
                      id="datatableSearch_"
                      type="search"
                      name="search"
                      className="px-8 py-3 my-3  placeholder-gray-400 border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Search..."
                      value={searchInput}
                      onChange={handleInputChange}
                      aria-label="Search"
                    />
                    <button type="submit" className="p-4 bg-slate-400 text-gray-600 rounded-r-lg">
                      <FaSearch />
                    </button>
                  </div>
                </form>



              </div>
              <div className='overflow-x-auto max-w-[350px] md:max-w-full mt-4 shadow-sm'>
                <table className="table-auto min-w-full border-collapse  border border-gray-200">
                  <thead className="bg-gray-100">
                    <tr className=' text-sm'>
                      <th className=" px-4 py-2 ">Sl</th>
                      <th className=" px-4 py-2 ">Store Information</th>
                      <th className=" px-4 py-2 ">Owber Information</th>
                      <th className=" px-4 py-2">Zone</th>
                      <th className=" px-4 py-2 ">Featured</th>
                      <th className=" px-4 py-2  text-center">Status</th>
                      <th className=" px-4 py-2  text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody id="set-rows  ">
                    {tableData?.map(item => (
                      <tr key={item.id}>
                        <td><span className="ml-5">{item.id}</span></td>
                        <td >
                          <div className='flex items-center gap-3 ml-5'>
                            <div>
                              <img className=" circle w-10" data-onerror-image="https://6ammart-admin.6amtech.com/public/assets/admin/img/160x160/img1.jpg" src={item.imageUrl} />
                            </div>

                            <div className="   ">
                              <div className="text-sm text-center ">{item.storeName}</div>
                              <div className="font-light text-sm">Id: {item.id}</div>
                            </div>


                          </div>
                        </td>

                        <td className='flex text-center gap-1 items-center ml-5 p-3'><i className="  "><IoMdStar /></i>{item.ratings}</td>
                        <td className=' text-center'>{item.totalProducts}</td>
                        <td className='text-center'> {item.totalOrders}</td>
                        <td className=''>
                          <label className="toggle-switch flex justify-center items-center toggle-switch-sm  " htmlFor={`publishCheckbox${item.id}`}>
                            <ToggleButton id={`publishCheckbox${item.id}`} checked={item.statusChecked} />
                          </label>
                        </td>


                        <td className="py-3 px-2 m-2   flex items-center justify-center ">
                          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded md:mr-2">
                            <EditIcon />
                          </button>
                          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3  rounded">
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </TabPanel>


            <TabPanel value="2">

              <h1 className="page-header-title capitalize m-0 flex text-2xl gap-3 font-semibold ">
                <span className="page-header-icon text-2xl">
                  <LuListFilter style={{ height: '2rem', width: '2rem' }} />
                </span>
                <span> Denied Stores </span>
              </h1>

              <div className="md:flex  items-center justify-between md:gap-4 mt-5 border  ">
                <h1 className="page-header-title capitalize m-0 flex text-lx ml-2 gap-3 font-extrabold">
                  <span>
                    Stores List
                    <span className="badge badge-soft-dark ml-2 text-sm bg-gray-300 p-1">0</span>
                  </span>
                </h1>

                <form className="search-form  sm:min-w-0" onSubmit={handleSubmit}>
                  <div className="relative flex items-center gap-0 ml-2 ">
                    <input
                      id="datatableSearch_"
                      type="search"
                      name="search"
                      className="px-8 py-3 my-3  placeholder-gray-400 border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Search..."
                      value={searchInput}
                      onChange={handleInputChange}
                      aria-label="Search"
                    />
                    <button type="submit" className="p-4 bg-slate-400 text-gray-600 rounded-r-lg">
                      <FaSearch />
                    </button>
                  </div>

                </form>



              </div>


              <div className='overflow-x-auto max-w-[350px] md:max-w-full mt-4 shadow-sm'>
                <table className="table-auto min-w-full border-collapse  border border-gray-200">
                  <thead className="bg-gray-100">
                    <tr className=' text-sm'>
                      <th className=" px-4 py-2 ">Sl</th>
                      <th className=" px-4 py-2 ">Store Information</th>
                      <th className=" px-4 py-2 ">Owber Information</th>
                      <th className=" px-4 py-2">Zone</th>
                      <th className=" px-4 py-2 ">Featured</th>
                      <th className=" px-4 py-2  text-center">Status</th>
                      <th className=" px-4 py-2  text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody id="set-rows  ">
                    {tableData?.map(item => (
                      <tr key={item.id}>
                        <td><span className="ml-5">{item.id}</span></td>
                        <td >
                          <div className='flex items-center gap-3 ml-5'>
                            <div>
                              <img className=" circle w-10" data-onerror-image="https://6ammart-admin.6amtech.com/public/assets/admin/img/160x160/img1.jpg" src={item.imageUrl} />
                            </div>

                            <div className="   ">
                              <div className="text-sm text-center ">{item.storeName}</div>
                              <div className="font-light text-sm">Id: {item.id}</div>
                            </div>


                          </div>
                        </td>

                        <td className='flex text-center gap-1 items-center ml-5 p-3'><i className="  "><IoMdStar /></i>{item.ratings}</td>
                        <td className=' text-center'>{item.totalProducts}</td>
                        <td className='text-center'> {item.totalOrders}</td>
                        <td className=''>
                          <label className="toggle-switch flex justify-center items-center toggle-switch-sm  " htmlFor={`publishCheckbox${item.id}`}>
                            <ToggleButton id={`publishCheckbox${item.id}`} checked={item.statusChecked} />
                          </label>
                        </td>


                        <td className="py-3 px-2 m-2   flex items-center justify-center ">
                          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded md:mr-2">
                            <EditIcon />
                          </button>
                          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3  rounded">
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabPanel>
          </TabContext>
        </Box>

      </div>
    </div>
  )
}

export default NewStore
