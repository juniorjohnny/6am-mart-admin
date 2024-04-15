import React from 'react'
import TabsComponent from '../Components/TabsComponent'
import SubCategoryTable from '../Components/SubCategoryTable'
import SearchIcon from "@mui/icons-material/Search";
import { Card } from '@mui/material';

function SubCategory() {
  return (

    <>
    <div className=" py-4 px-8 rounded-md">
      <div className="flex items-center">
        <img src="https://6ammart-admin.6amtech.com/public/assets/admin/img/edit.png" className="w-5 h-5 mr-4" alt="" />
        <h1 className="text-xl font-bold text-gray-800">Add New Subcategory</h1>
      </div>
    </div>

    <div className="card-body bg-white rounded-lg shadow-md p-6">
      <form action="https://6ammart-admin.6amtech.com/admin/category/add" method="post">
        <input type="hidden" name="_token" value="F2RW86XrrL4o4tubR354dofyJRPGNfmdzOj9fgGX" autoComplete="off" />
        <div><TabsComponent placeholder={"New Sub Category"}/></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="form-group">
            <label className="input-label block py-2" htmlFor="mainCategory">Main category <span className="input-label-secondary text-red-600">*</span></label>
            <select id="mainCategory" name="parent_id" className="form-control border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" required>
              <option value="" disabled>Select Main Category</option>
              <option value="12">Home and Kitchen Appliance (Grocery)</option>
              <option value="11">Dairy Needs (Grocery)</option>
              <option value="10">Baby Care (Grocery)</option>
              <option value="9">Fruits &amp; Vegetables (Grocery)</option>
              <option value="8">BreakFast (Grocery)</option>
              <option value="7">Pest Control (Grocery)</option>
              <option value="6">Cleaning Supplies (Grocery)</option>
              <option value="5">Cooking Essentials (Grocery)</option>
              <option value="4">Personal Care (Grocery)</option>
              <option value="3">Fish &amp; Meat (Grocery)</option>
              <option value="2">Skin Care (Grocery)</option>
              <option value="1">Office Stationery (Grocery)</option>
            </select>
          </div>
          <input name="position" value="1" type="hidden" />
          <div className="flex justify-end col-span-2">
            <button type="reset" id="reset_btn" className="btn btn--reset mr-4 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-md focus:outline-none focus:bg-gray-400" fdprocessedid="4ipsds">Reset</button>
            <button type="submit" className="btn hover:bg-[#20A7AF] bg-[#24bac3] text-white">Add</button>
          </div>
        </div>
      </form>
    </div>

    <div>
    <Card className="p-2 mt-8">
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mr-4">
            Sub Category List
            </h2>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
              2
            </span>
            <form className="ml-auto flex items-center">
              <input
                id="datatableSearch"
                type="search"
                name="search"
                className="form-input border border-gray-300 rounded-l-lg px-4 py-2"
                placeholder="Search Notification"
                aria-label="Search here"
              />
              <button
                type="submit"
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold px-4 py-2 rounded-r-lg "
              >
                <SearchIcon />
              </button>
            </form>
          </div>
        </Card>
    <SubCategoryTable/>
    </div>
    </>
  )
}

export default SubCategory
