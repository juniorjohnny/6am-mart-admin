import React from 'react'
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
  } from "@mui/material";
  import ExpandLessIcon from "@mui/icons-material/ExpandLess";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import Collapse from "@mui/material/Collapse";
  import { MdDashboard } from "react-icons/md";
  import { Link } from "react-router-dom";
  import { GoHome } from "react-icons/go";
  import { FaCarSide } from "react-icons/fa";
  import { IoIosAddCircleOutline } from "react-icons/io";
  import { IoMan } from "react-icons/io5";
  import { TbTruckDelivery } from "react-icons/tb";
  import { MdReviews } from "react-icons/md";
  import { IoIosContacts } from "react-icons/io";
  import { FaWallet } from "react-icons/fa";
  import { CiWallet } from "react-icons/ci";
  import { MdLoyalty } from "react-icons/md";
  import { CiMail } from "react-icons/ci";
  import { IoIosContact } from "react-icons/io";
  import { RiTeamLine } from "react-icons/ri";
  import BadgeIcon from "@mui/icons-material/Badge";
  import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const DispatchSidebaar = () => {
  return (
    <>
      
      <List className="overflow-x-hidden text-sm">
        <List>
          <Link to="/dispatch">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GoHome className="text-white" />
                </ListItemIcon>
                <ListItemText className="-mx-6" primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <div className="flex justify-start items-center mx-2 text-sm mt-2 text-[#99A7BA]">
        DISPATCH MANAGEMENT
      </div>
        
      </List>
    </>
  )
}

export default DispatchSidebaar
