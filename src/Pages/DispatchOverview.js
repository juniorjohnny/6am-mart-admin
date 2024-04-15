import React from "react";
import DispatchOrderStatisticsCard from "../Components/DispatchOrderStatisticsCard";

const DispatchOverview = () => {
  return (
    <>
      <div className="page-header">
        <div className="py-2">
          <div className="flex items-center">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/new-img/users.svg"
              alt="img"
            />
            <div className="flex-grow pl-3">
              <h1 className="page-header-title mb-1 text-xl font-medium">
                Dispatch Overview
              </h1>
              <p className="page-header-text text-dark m-0">
                Monitor your{" "}
                <span className="font-semibold">Dispatch Management</span>{" "}
                Statistics by zone
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="flex gap-8 flex-wrap w-full">
        <div className="w-[60%]">
          <div className="container mx-auto py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Active Delivery Man */}
              <div className="p-6 bg-white rounded-lg shadow-md flex items-center">
                <img
                  src="https://6ammart-admin.6amtech.com/public/assets/admin/img/new-img/deliveryman/active.svg"
                  alt="Active delivery man"
                  className="w-16 h-16 mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">5</h3>
                  <p className="text-gray-600">Active Delivery Men</p>
                </div>
              </div>

              {/* Inactive and Suspended */}
              <div className="p-6 bg-white rounded-lg shadow-md flex items-center">
                <img
                  src="https://6ammart-admin.6amtech.com/public/assets/admin/img/new-img/deliveryman/newly.svg"
                  alt="Inactive and Suspended"
                  className="w-16 h-16 mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">1</h3>
                  <p className="text-gray-600">Inactive</p>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold">0</h3>
                  <p className="text-gray-600">Suspended</p>
                </div>
              </div>

              {/* Fully Booked Delivery Man */}
              <div className="p-6 bg-white rounded-lg shadow-md flex items-center">
                <img
                  src="https://6ammart-admin.6amtech.com/public/assets/admin/img/new-img/deliveryman/active.svg"
                  alt="Fully Booked Delivery Man"
                  className="w-16 h-16 mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">0</h3>
                  <p className="text-gray-600">Fully Booked Delivery Men</p>
                </div>
              </div>

              {/* Available to Assign Orders */}
              <div className="p-6 bg-white rounded-lg shadow-md flex items-center">
                <img
                  src="https://6ammart-admin.6amtech.com/public/assets/admin/img/new-img/deliveryman/in-active.svg"
                  alt="Available to Assign Orders"
                  className="w-16 h-16 mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">5</h3>
                  <p className="text-gray-600">Available to Assign Orders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%]">
        <div className="col-span-1">
      <div className="shadow--order-card bg-white rounded-lg overflow-hidde">
        <div className="p-4">
          <DispatchOrderStatisticsCard
            iconSrc="https://6ammart-admin.6amtech.com/public/assets/admin/img/dashboard/food/unassigned.svg"
            title="Unassigned orders"
            count="41"
            color="text-blue-500"
          />
          <DispatchOrderStatisticsCard
            iconSrc="https://6ammart-admin.6amtech.com/public/assets/admin/img/dashboard/food/accepted.svg"
            title="Accepted by Delivery Man"
            count="2"
            color="text-green-500"
          />
          <DispatchOrderStatisticsCard
            iconSrc="https://6ammart-admin.6amtech.com/public/assets/admin/img/dashboard/food/out-for.svg"
            title="Out for Delivery"
            count="4"
            color="text-green-500"
          />
        </div>
      </div>
    </div>
        </div>
      </div>
    </>
  );
};

export default DispatchOverview;
