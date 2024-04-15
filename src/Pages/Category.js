import React from "react";
import TabsComponent from "../Components/TabsComponent";
import CategoryListTable from "../Components/CategoryListTable";

import SearchIcon from "@mui/icons-material/Search";
import { Card } from "@mui/material";

function Category() {
  return (
    <>
      <div className="page-header  py-4 px-6 mb-6 rounded-lg">
        <h1 className="page-header-title flex items-center">
          <span className="page-header-icon mr-2 w-5 h-5">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/category.png"
              className="w-20"
              alt=""
            />
          </span>
          <h1 className="font-semibold">Add new category</h1>
        </h1>
      </div>
      <div className="flex">
        <div className="w-full">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form
              action="https://6ammart-admin.6amtech.com/admin/category/add"
              method="post"
              encType="multipart/form-data"
            >
              <input
                type="hidden"
                name="_token"
                value="F2RW86XrrL4o4tubR354dofyJRPGNfmdzOj9fgGX"
                autoComplete="off"
              />
              <div className="flex justify-between mb-6 md:w-1/2 w-full"></div>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:w-1/2 w-full ">
                <div className="flex flex-col">
                  <TabsComponent placeholder={"New Category"} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="custom-file" className="mb-2 text-gray-700">
                    Image <span className="text-red-500">* ( Ratio 1:1)</span>
                  </label>
                  <label
                    htmlFor="custom-file"
                    className="flex flex-col items-center justify-center w-full h-32 border border-dashed border-gray-400 rounded-md cursor-pointer hover:bg-gray-50"
                  >
                    <input
                      type="file"
                      id="custom-file"
                      name="image"
                      className="hidden"
                      accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                    />
                    <span className="text-gray-600">Click to upload</span>
                  </label>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  type="reset"
                  id="reset-btn"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-md mr-4"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="bg-[#20A7AF] hover:bg-[#3f8e8e] text-white font-semibold py-2 px-4 rounded-md"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Card className="p-2">
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mr-4">
              Category List
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
        <CategoryListTable />
      </div>
    </>
  );
}

export default Category;
