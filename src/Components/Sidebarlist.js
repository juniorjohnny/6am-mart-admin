import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { MdDashboard } from "react-icons/md";
import { MdOutlineNewLabel } from "react-icons/md";
import { RiRefund2Line } from "react-icons/ri";
import { IoIosFlash } from "react-icons/io";
import { SiCampaignmonitor } from "react-icons/si";
import { RxGroup } from "react-icons/rx";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { MdCategory } from "react-icons/md";
import { MdEditAttributes } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BadgeIcon from "@mui/icons-material/Badge";
import { RiTeamLine } from "react-icons/ri";
import { FaBuildingColumns, FaGear, FaUserLarge } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoMdHome } from "react-icons/io";
import { HiOutlineWallet } from "react-icons/hi2";
import { MdStarOutline } from "react-icons/md";
import { IoMdChatbubbles } from "react-icons/io";
import { PiMoneyFill } from "react-icons/pi";
import { RiPhoneCameraFill } from "react-icons/ri";
import { BsIncognito } from "react-icons/bs";

import { FaShoppingCart } from "react-icons/fa";

function Sidebarlist() {
  const [open, setOpen] = React.useState(true);
  const [Isopen, setIsOpen] = React.useState({
    Dropdown1: false,
    Dropdown2: false,
    Dropdown3: false,
    Dropdown4: false,
    Dropdown5: false,
    Dropdown6: false,
    Dropdown7: false,
  });

  const toggleDropdown = (dropdown) => {
    setIsOpen((prevState) => ({
      ...Object.fromEntries(
        Object.entries(prevState).map(([key]) => [key, key === dropdown])
      ),
      [dropdown]: !prevState[dropdown],
    }));
  };
  return (
    <>
      <List className="overflow-x-hidden text-sm">
        <List>
          <Link to="/">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MdDashboard className="text-white"/>
                </ListItemIcon>
                <ListItemText className="-mx-6" primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </Link>
          <div className="flex justify-start items-center mx-4 text-sm mt-4 text-[#99A7BA]">
            POS SECTION
          </div>
        </List>
        <List>
          <Link to="/newsale">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MdOutlineNewLabel className="text-white" />
                </ListItemIcon>
                <ListItemText className="-mx-6" primary="New Sale" />
              </ListItemButton>
            </ListItem>
          </Link>
          <div className="flex justify-start items-center mx-4 text-sm mt-4 mb-2 text-[#99A7BA]">
            ORDER MANAGEMENT
          </div>
        </List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => toggleDropdown("Dropdown1")}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: "black",
              }}
            >
              <FaShoppingCart className="text-white"  />
            </ListItemIcon>
            <ListItemText
              className="-mx-3"
              primary="Orders"
              sx={{ opacity: open ? 1 : 0 }}
            />
            {Isopen.Dropdown1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={Isopen.Dropdown1} timeout={"auto"} unmountOnExit>
          <Link onClick={""} to={""}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
<FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/>
              </ListItemIcon>
              

              <ListItemText primary="All" sx={{ opacity: open ? 1 : 0 }} />
              <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
                {30}
              </span>
            </ListItemButton>
          </Link>

          <Link onClick={""} to={""}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/>

              </ListItemIcon>

              <ListItemText
                primary="Scheduled"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Link>

          <Link onClick={""} to={""}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/>

              </ListItemIcon>

              <ListItemText primary="Pending" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </Link>
          <Link onClick={""} to={""}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/>

              </ListItemIcon>

              <ListItemText primary="Accepted" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </Link>

          <Link onClick={""} to={""}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/>

              </ListItemIcon>

              <ListItemText
                primary="Processing"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Link>
          <Link onClick={""} to={""}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/>

              </ListItemIcon>

              <ListItemText
                primary="Processing"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Link>
          <Link onClick={""} to={""}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/>

              </ListItemIcon>

              <ListItemText
                primary="Order On The Way"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Link>
          <Link onClick={""} to={""}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/>

              </ListItemIcon>

              <ListItemText primary="Deliverd" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </Link>
          <Link onClick={""} to={""}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/>

              </ListItemIcon>

              <ListItemText primary="Canceled" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </Link>
          <Link onClick={""} to={""}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/>

              </ListItemIcon>

              <ListItemText
                primary="Payment Failed"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Link>
          <Link onClick={""} to={""}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/>

              </ListItemIcon>

              <ListItemText primary="Refunded" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </Link>
          <Link onClick={""} to={""}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/>

              </ListItemIcon>

              <ListItemText
                primary="Ofline Payments"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Link>
        </Collapse>

        <ListItem disablePadding sx={{display: "block", marginTop: '-10px'}}>
          <ListItemButton
            onClick={() => toggleDropdown("Dropdown2")}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: "black",
              }}
            >
              <RiRefund2Line className="text-white"  />
            </ListItemIcon>
            <ListItemText
              className="-mx-3"
              primary="Order Refunds"
              sx={{ opacity: open ? 1 : 0 }}
            />
            {Isopen.Dropdown2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={Isopen.Dropdown2} timeout={"auto"} unmountOnExit>
          <Link onClick={""} to={"/OrderRefunds"}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/>
              </ListItemIcon>

              <ListItemText
                primary="Refund Requests"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
        </Collapse>
        <List style={{ marginTop: '-14px' }}>
          <Link to="/FlashSale">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <IoIosFlash className="text-white"  />
                </ListItemIcon>
                <ListItemText className="-mx-6" primary="Flash Sales"/>
              </ListItemButton>
            </ListItem>
          </Link>
          <div className="flex justify-start items-center mx-2 text-sm mt-4 text-[#99A7BA]">
            PROMOTION MANAGEMENT
          </div>
        </List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => toggleDropdown("Dropdown3")}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: "black",
              }}
            >
              <SiCampaignmonitor className="text-white"  />
            </ListItemIcon>
            <ListItemText
              className="-mx-2"
              primary="Campaigns"
              sx={{ opacity: open ? 1 : 0 }}
            />
            {Isopen.Dropdown3 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={Isopen.Dropdown3} timeout={"auto"} unmountOnExit>
          <Link onClick={""} to={"/BasicCampaigns"}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/>
              </ListItemIcon>

              <ListItemText
                primary="Basic Campaigns"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
          <Link onClick={""} to={"/ItemCampaigns"}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/>
              </ListItemIcon>

              <ListItemText
                primary="Item Campaigns"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
        </Collapse>
        <List style={{ marginTop: '-10px' }}>
          <Link to="/Banners">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <RxGroup className="text-white"  />
                </ListItemIcon>
                <ListItemText className="-mx-5" primary="Banners" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <List style={{ marginTop: '-14px' }}>
          <Link to="/OtherBanners">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <RxGroup className="text-white"  />
                </ListItemIcon>
                <ListItemText className="-mx-5" primary="Other Banners" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <List style={{ marginTop: '-14px' }}>
          <Link to="/Coupons">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CiDiscount1 className="text-white"  />
                </ListItemIcon>
                <ListItemText className="-mx-5" primary="Coupons" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <List style={{ marginTop: '-14px' }}>
          <Link to="/PushNotification">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <IoIosNotifications className="text-white"  />
                </ListItemIcon>
                <ListItemText className="-mx-5" primary="Push Notification" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <div className="flex justify-start items-center mx-4 text-sm mt-4 text-[#99A7BA]">
          PRODUCT MANAGEMENT
        </div>

        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => toggleDropdown("Dropdown4")}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: "black",
              }}
            >
              <MdCategory className="text-white"  />
            </ListItemIcon>
            <ListItemText
              className="-mx-2"
              primary="Categories"
              sx={{ opacity: open ? 1 : 0 }}
            />
            {Isopen.Dropdown4 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={Isopen.Dropdown4} timeout={"auto"} unmountOnExit>
          <Link onClick={""} to={"/Category"}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/>
              </ListItemIcon>

              <ListItemText
                primary="Categories"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
          <Link onClick={""} to={"/SubCategory"}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/>
              </ListItemIcon>

              <ListItemText
                primary=" Sub Categories"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
          <Link onClick={""} to={"/CategoryBulkImport"}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/>
              </ListItemIcon>

              <ListItemText
                primary="Bulk Import"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
          <Link onClick={""} to={"/CategoryBulkExport"}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              ><FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/></ListItemIcon>

              <ListItemText
                primary="Bulk Export"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
        </Collapse>
        <List style={{ marginTop: '-14px' }}>
          <Link to="/Attributes">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MdEditAttributes className="text-white"  />
                </ListItemIcon>
                <ListItemText className="-mx-5" primary="Attributes" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <List style={{ marginTop: '-14px' }}>
          <Link to="/Units">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FaBalanceScale className="text-white"  />
                </ListItemIcon>
                <ListItemText className="-mx-5" primary="Units" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <ListItem disablePadding sx={{ display: "block", marginTop: '-10px' }}>
          <ListItemButton
            onClick={() => toggleDropdown("Dropdown5")}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: "black",
              }}
            >
              <FaShoppingCart className="text-white"  />
            </ListItemIcon>
            <ListItemText
              className="-mx-2"
              primary="Product Setup"
              sx={{ opacity: open ? 1 : 0 }}
            />
            {Isopen.Dropdown5 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={Isopen.Dropdown5} timeout={"auto"} unmountOnExit>
          <Link onClick={""} to={"/Addnew"}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/>
              </ListItemIcon>

              <ListItemText primary="Add New" sx={{ opacity: open ? 1 : 0 }} />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
          <Link onClick={""} to={"/List"}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/>
              </ListItemIcon>

              <ListItemText primary="List" sx={{ opacity: open ? 1 : 0 }} />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
          <Link onClick={""} to={"/ProductGallery"}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/>
              </ListItemIcon>

              <ListItemText
                primary="Product Gallery"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
          <Link onClick={""} to={"/NewItemReqeust"}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/>
              </ListItemIcon>

              <ListItemText
                primary="New Item Request"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
          <Link onClick={""} to={"/Review"}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/>
              </ListItemIcon>

              <ListItemText primary="Review" sx={{ opacity: open ? 1 : 0 }} />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
          <Link onClick={""} to={"/ProductImport"}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              ><FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/></ListItemIcon>

              <ListItemText
                primary="Bulk Import"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
          <Link onClick={""} to={"/ProductBulkExport"}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiberManualRecordIcon style={{ fontSize: '4px', color: 'white',marginLeft:'4px' }}/>
              </ListItemIcon>

              <ListItemText
                primary="Bulk Export"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
        </Collapse>
        <div className="flex justify-start items-center mx-2 text-sm mt-4 text-[#99A7BA]">
          STORE MANAGEMENT
        </div>

        <div>
        <List>
          <Link to="/NewStore">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText className="-mx-5" primary="New Stores" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <List style={{ marginTop: '-14px' }}>
          <Link to="/AddStore">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText className="-mx-5" primary="Add Stores" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <List style={{ marginTop: '-14px' }}>
          <Link to="/StoreList">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText className="-mx-5" primary="Stores List" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <List style={{ marginTop: '-14px' }}>
          <Link to="/RecommendedStore">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText className="-mx-5" primary="Recommended Store" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <List style={{ marginTop: '-14px' }}>
          <Link to="/BulkImport">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText className="-mx-5" primary="Bulk Import" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <List style={{ marginTop: '-14px' }}>
          <Link to="/BulkExport">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText className="-mx-5" primary="Bulk Export" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        </div>
      </List>
      <div className="flex justify-start items-center mx-3 text-sm mt-5 mb-2">
        EMPLOYEE MANAGEMENT
      </div>
      <Link className="" to="">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BadgeIcon />
            </ListItemIcon>
            <ListItemText className="-mx-3" primary="Employee Role" />
          </ListItemButton>
        </ListItem>
      </Link>
      <ListItem disablePadding sx={{ display: "block" }}>
        <ListItemButton
          onClick={() => toggleDropdown("Dropdown3")}
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
              color: "black",
            }}
          >
            <RiTeamLine />
          </ListItemIcon>
          <ListItemText primary="Employee" sx={{ opacity: open ? 1 : 0 }} />
          {Isopen.Dropdown3 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>
      </ListItem>
      <div className="flex justify-start items-center mx-3 text-sm mt-5 mb-2">
        Business Section
      </div>
      <Link className="" to="/store_config">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <FaGear fill="white" />
            </ListItemIcon>
            <ListItemText className="-mx-3" primary="Store Config" />
          </ListItemButton>
        </ListItem>
      </Link>
      <Link className="" to="/my_shop">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <IoMdHome fill="white" />
            </ListItemIcon>
            <ListItemText className="-mx-3" primary="My Shop" />
          </ListItemButton>
        </ListItem>
      </Link>
      <Link className="" to="/my_wallet">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <HiOutlineWallet fill="white" />
            </ListItemIcon>
            <ListItemText className="-mx-3" primary="My Wallet" />
          </ListItemButton>
        </ListItem>
      </Link>
      <Link className="" to="/disbursement">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <FaBuildingColumns fill="white" />
            </ListItemIcon>
            <ListItemText className="-mx-3" primary="Disbursement Method" />
          </ListItemButton>
        </ListItem>
      </Link>
      <Link className="" to="/review">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MdStarOutline className="text-white text-xl" />

            </ListItemIcon>
            <ListItemText className="-mx-3" primary="Review" />
          </ListItemButton>
        </ListItem>
      </Link>

      <Link className="" to="/chat">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <IoMdChatbubbles className="text-white text-xl" />

            </ListItemIcon>
            <ListItemText className="-mx-3" primary="Chat" />
          </ListItemButton>
        </ListItem>
      </Link>

      <div className="flex justify-start items-center mx-3 text-sm mt-5 mb-2">
        REPORT SECTION
      </div>
      <Link className="" to="/expencereport">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PiMoneyFill className="text-white text-xl" />

            </ListItemIcon>
            <ListItemText className="-mx-3" primary="Expence Report" />
          </ListItemButton>
        </ListItem>
      </Link>
      <Link className="" to="/disbursementreport">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <RiPhoneCameraFill className="text-xl text-white" />

            </ListItemIcon>
            <ListItemText className="-mx-3" primary="Disbursment Report" />
          </ListItemButton>
        </ListItem>
      </Link>
      <div className="flex justify-start items-center mx-3 text-sm mt-5 mb-2">
        EMPLOYEE MANAGEMENT
      </div>
      <Link className="" to="/employeerole">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <BsIncognito className="text-white text-xl" />

            </ListItemIcon>
            <ListItemText className="-mx-3" primary="Employee Role" />
          </ListItemButton>
        </ListItem>
      </Link>
      
      <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => toggleDropdown("Dropdown6")}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: "black",
              }}
            >
              
              <FaUserLarge className="text-white"/>

            </ListItemIcon>
            <ListItemText
              className="-mx-2"
              primary="Employee"
              sx={{ opacity: open ? 1 : 0 }}
            />
            {Isopen.Dropdown6 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={Isopen.Dropdown6} timeout={"auto"} unmountOnExit>
          <Link onClick={""} to={"/addnew"}>
            <ListItemButton>
            <GoDotFill />

              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              ></ListItemIcon>

              <ListItemText
                primary="Add new"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
          <Link onClick={""} to={"/listemployee"}>
            <ListItemButton>
            <GoDotFill />

              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              ></ListItemIcon>

              <ListItemText
                primary="List"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
          <Link onClick={""} to={""}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              ></ListItemIcon>

              
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
          <Link onClick={""} to={""}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              ></ListItemIcon>

              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
        </Collapse>
    </>
  );
}

export default Sidebarlist;
