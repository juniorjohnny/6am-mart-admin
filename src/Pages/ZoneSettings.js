import { Switch } from '@mui/material'
import React from 'react'
import { IoSettingsOutline } from 'react-icons/io5'
import SearchIcon from "@mui/icons-material/Search";
import ExportButton from "../Components/ExportButton";

const ZoneSettings = () => {
    return (
        <div className='h-full w-full'>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-2 items-center text-[2.5vh] font-bold'>
                    <IoSettingsOutline />
                    <h1>Zone Settings</h1>
                </div>

                <div className='shadow rounded '>
                    <div className='flex md:flex-row flex-col w-fit justify-between px-5 py-5 md:items-center'>
                        <div className='font-semibold'>
                            <h1>Zone List</h1>
                        </div>
                        <div className='flex md:flex-row flex-col gap-3'>
                            <form className="ml-auto flex items-center">
                                <input
                                    id="datatableSearch"
                                    type="search"
                                    name="search"
                                    className="form-input border border-gray-300 rounded-l-lg px-4 py-3"
                                    placeholder="Ex: Search Title ..."
                                    aria-label="Search here"
                                />
                                <button
                                    type="submit"
                                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold px-4 py-3 rounded-r-lg "
                                >
                                    <SearchIcon />

                                </button>
                            </form>

                            <ExportButton />
                        </div>
                    </div>
                    <div className='overflow-x-auto max-w-[350px] md:max-w-full mt-4 shadow-sm'> 
                    <table className="table-auto min-w-full border-collapse  border border-gray-200">
                            <thead className=''>
                                <tr className='bg-slate-100 h-10 text-sm md:text-base'>
                                    <th className='px-4 py-2'>SL</th>
                                    <th className='px-4 py-2'>Zone Id</th>
                                    <th className='px-4 py-2'>Business Zone Name</th>
                                    <th className='px-4 py-2'>Stores</th>
                                    <th className='px-4 py-2'>Deliveryman</th>
                                    <th className='px-4 py-2'>Status</th>
                                    <th className='px-4 py-2'>Digtial Payment</th>
                                    <th className='px-4 py-2'>Cash On Delivery</th>
                                    <th className='px-4 py-2'>Offline Payment</th>
                                    <th className='px-4 py-2'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2</td>
                                    <td>1</td>
                                    <td>Some Zone</td>
                                    <td>55</td>
                                    <td>6</td>
                                    <td><Switch /></td>
                                    <td><Switch /></td>
                                    <td><Switch /></td>
                                    <td><Switch /></td>
                                    <td>Data 10</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>Example Zone</td>
                                    <td>3</td>
                                    <td>1</td>
                                    <td><Switch /></td>
                                    <td><Switch /></td>
                                    <td><Switch /></td>
                                    <td><Switch /></td>
                                    <td>Data 10</td>
                                </tr>
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ZoneSettings