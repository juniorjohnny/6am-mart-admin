import React from "react";
import TabsComponent from "../Components/TabsComponent";
import { Card } from "@mui/material";
import CategoryListTable from "../Components/CategoryListTable";
import SearchIcon from "@mui/icons-material/Search";
import AttributeListTable from "../Components/AttributeListTable";
import UnitListTable from "../Components/UnitListTable";


function Units() {
  return (
    <>

    <div className="page-header flex ">
    <h1 className="page-header-title flex items-center">
      <span className="page-header-icon">
        <img src="https://6ammart-admin.6amtech.com/public/assets/admin/img/category.png" className="w-26" alt="" />
      </span>
      <span className="ml-2 text-xl font-semibold">Add new Units</span>
    </h1>
  </div>

    <div className="card-body bg-white rounded-md shadow-md p-6 mt-5">
      <form
        action="https://6ammart-admin.6amtech.com/admin/attribute/store"
        method="post"
      >
        <input
          type="hidden"
          name="_token"
          value="F2RW86XrrL4o4tubR354dofyJRPGNfmdzOj9fgGX"
          autoComplete="off"
        />
        <TabsComponent placeholder={"Unit Name"} />
        <div className="flex justify-end">
          <button
            type="reset"
            className="btn btn--reset bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-md mr-2 focus:outline-none focus:bg-gray-400"
            fdprocessedid="qrwx6"
          >
            Reset
          </button>
          <button
            type="submit"
            className="btn btn--primary bg-[#24BAC3] hover:bg-[#20A7AF] text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600"
            fdprocessedid="l9piv"
          >
            Submit
          </button>
        </div>
      </form>
    </div>

    <div className="mt-8">
        <Card className="p-2">
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mr-4">
              Unit List
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
                placeholder="Unit Name"
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
        <UnitListTable/>
      </div>
    </>
  );
}

export default Units;
