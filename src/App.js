import React, { useState, useEffect } from 'react';
import Dashboard from "./Pages/Dashboard";
import Layout from "./Components/Layout";
import { Route, Routes, Navigate } from "react-router-dom";
import Allshop from "./Pages/Allshop";
import Newsale from "./Pages/Newsale";
import OrderRefunds from "./Pages/OrderRefunds";
import FlashSale from "./Pages/FlashSale";
import BasicCampaigns from "./Pages/BasicCampaigns";
import ItemBasicCampaigns from "./Pages/ItemBasicCampaigns";
import Banners from "./Pages/Banners";
import OtherBanners from "./Pages/OtherBanners";
import Coupons from "./Pages/Coupons";
import Themes from "./Themes/Themes"
import PushNotification from "./Pages/PushNotification";
import Category from "./Pages/Category";
import SubCategory from "./Pages/SubCategory";
import Attributes from "./Pages/Attributes";
import Units from "./Pages/Units";
import AddNew from "./Pages/AddNew";
import List from "./Pages/List";
import ProductGallery from "./Pages/ProductGallery";
import NewItemRequest from "./Pages/NewItemRequest";
import Review from "./Pages/Review";
import Login from "./Pages/Login";
import UserOverview from "./Pages/UserOverview";
import Customers from './Pages/Customers';
import AddFund from './Pages/AddFund';
import Report from './Pages/Report';
import Bonus from './Pages/Bonus';
import Userscustomerloyaltypointreport from './Pages/Userscustomerloyaltypointreport'
import SubcribedMailList from './Pages/SubcribedMailList';
import ContactMassage from './Pages/ContactMassage';
import EmpolyeeRole from './Pages/EmpolyeeRole';
import AddNewEmployees from './Pages/AddNewEmployees';
import EmployeeList from './Pages/EmployeeList';
import ZoneSetup from './Pages/ZoneSetup';
import AddBusinessModule from './Pages/AddBusinessModule';
import Modules from './Pages/Modules';
import BusinessSettings from './Pages/BusinessSettings';
import ThirdParty from './Pages/ThirdParty';
import FirebaseNotification from './Pages/FirebaseNotification';
import LoginUrlPage from './Pages/LoginUrlPage';
import OfflinePaymentSetup from './Pages/OfflinePaymentSetup';

function App() {

  // Define state for loggedIn using useState
  const [loggedIn, setLoggedIn] = useState(false);

  // Use useEffect to retrieve isLoggedIn value from localStorage
  useEffect(() => {
    // Retrieve isLoggedIn value from localStorage
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if(localStorage.getItem('isLoggedIn') === 'true') {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }

    // Update the state of loggedIn using setLoggedIn
  }, [localStorage.getItem('isLoggedIn')]);

  return (
    <>
      <Routes>
        <Route path="/" element={loggedIn ? <Layout/> : <Login />}>
        <Route index element={<Dashboard/>}></Route>
        <Route path="/allshop" element={<Allshop/>}></Route>
        <Route path="/newsale" element={<Newsale/>}></Route>
        <Route path="/OrderRefunds" element={<OrderRefunds/>}></Route>
        <Route path="/FlashSale" element={<FlashSale/>}></Route>
        <Route path="/BasicCampaigns" element={<BasicCampaigns/>}></Route>
        <Route path="/ItemCampaigns" element={<ItemBasicCampaigns/>}></Route>
        <Route path="/Banners" element={<Banners/>}></Route>
        <Route path="/OtherBanners" element={<OtherBanners/>}></Route>
        <Route path="/Coupons" element={<Coupons/>}></Route>
        <Route path="/PushNotification" element={<PushNotification/>}></Route>
        <Route path="/Category" element={<Category/>}></Route>
        <Route path="/SubCategory" element={<SubCategory/>}></Route>
        <Route path="/Attributes" element={<Attributes/>}></Route>
        <Route path="/Units" element={<Units/>}></Route>
        <Route path="/Addnew" element={<AddNew/>}></Route>
        <Route path="/List" element={<List/>}></Route>
        <Route path="/ProductGallery" element={<ProductGallery/>}></Route>
        <Route path="/NewItemReqeust" element={<NewItemRequest/>}></Route>
        <Route path="/Review" element={<Review/>}></Route>
        <Route path="/Users/UserOverView" element={<UserOverview/>}></Route>
        <Route path='/Users/Customers' element={<Customers/>}></Route>
        <Route path='/Users/AddFund' element={<AddFund/>}></Route>
        <Route path='/Users/Report' element={<Report/>}></Route>
        <Route path='/Users/Bonus' element={<Bonus/>}></Route>
        <Route path='users/customer/loyalty-point/report' element={<Userscustomerloyaltypointreport/>}></Route>
        <Route path='/users/customer/subscribed' element={<SubcribedMailList/>}></Route>
        <Route path='users/contact/contact-list' element={<ContactMassage/>}></Route>
        <Route path='users/custom-role/create' element={<EmpolyeeRole/>}></Route>
        <Route path='/users/employee/AddNewEmployees' element={<AddNewEmployees/>}></Route>
        <Route path='/users/employee/List' element={<EmployeeList/>}></Route>
        <Route path='/business-settings/zoneSetup' element={<ZoneSetup/>}></Route>
        <Route path='/business-settings/moduleSetup/AddBusinessModule' element={<AddBusinessModule/>}></Route>
        <Route path='/business-settings/module' element={<Modules/>}></Route>
        <Route path='/business-settings/business-setup' element={<BusinessSettings/>}></Route>
        <Route path='/business-settings/third-party/payment-method' element={<ThirdParty/>}></Route>
        <Route path='/business-settings/FirebaseNotification' element={<FirebaseNotification/>}></Route>
        <Route path='/business-settings/login-url-setup' element={<LoginUrlPage/>}></Route>
        <Route path='/business-settings/offline-payment' element={<OfflinePaymentSetup/>}></Route>
        
        </Route>
        {/* <Route path="/login" element={<Login/>}></Route> */}
      </Routes>
     
    </>
  );
}

export default App;
