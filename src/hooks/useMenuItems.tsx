import React from "react";
import { AiOutlineNotification } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { FaProjectDiagram, FaUserEdit } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { LuGalleryVertical, LuShoppingBasket } from "react-icons/lu";
import {
  MdChangeHistory,
  MdDashboard,
  MdOutlineDonutSmall,
  MdOutlineSettingsApplications,
  MdOutlineSwitchAccount,
  MdOutlineWidgets,
  MdPriceChange,
} from "react-icons/md";
import {
  RiPagesLine,
  RiPriceTag2Line,
  RiProductHuntLine,
} from "react-icons/ri";
import { SiAuthelia } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { TbReorder } from "react-icons/tb";
import { TiSocialLastFm } from "react-icons/ti";
import { VscDebugContinueSmall } from "react-icons/vsc";

interface MenuItem {
  id: number;
  title: string;
  route?: string;
  icon: React.ReactElement | null;
  subMenu: MenuItem[] | null;
}

const useMenuItems: MenuItem[] = [
  {
    id: 1,
    title: "Dashboard",
    route: "/dashboard",
    icon: <MdDashboard />,
    subMenu: null,
  },
  {
    id: 2,
    title: "Pages",
    icon: <RiPagesLine />,
    subMenu: [
      {
        id: 1,
        title: "Profile",
        route: "/",
        icon: <CgProfile />,
        subMenu: null,
      },
      {
        id: 2,
        title: "User",
        route: "/",
        icon: <FaUserEdit />,
        subMenu: null,
      },
      {
        id: 3,
        title: "Account",
        route: "/",
        icon: <MdOutlineSwitchAccount />,
        subMenu: null,
      },
      {
        id: 4,
        title: "Projects",
        route: "/",
        icon: <FaProjectDiagram />,
        subMenu: null,
      },
      {
        id: 5,
        title: "Pricing Page",
        route: "/",
        icon: <MdPriceChange />,
        subMenu: null,
      },
      {
        id: 6,
        title: "RTL",
        route: "/",
        icon: <RiPriceTag2Line />,
        subMenu: null,
      },
      {
        id: 7,
        title: "Widgets",
        route: "/",
        icon: <MdOutlineWidgets />,
        subMenu: null,
      },
      {
        id: 8,
        title: "Charts",
        route: "/",
        icon: <IoStatsChartSharp />,
        subMenu: null,
      },
      {
        id: 9,
        title: "Notifications",
        route: "/",
        icon: <AiOutlineNotification />,
        subMenu: null,
      },
    ],
  },
  {
    id: 3,
    title: "Applications",
    icon: <MdOutlineSettingsApplications />,
    subMenu: [
      {
        id: 1,
        title: "Kanban",
        route: "/",
        icon: <MdOutlineDonutSmall />,
        subMenu: null,
      },
      {
        id: 2,
        title: "Wizard",
        route: "/",
        icon: <TiSocialLastFm />,
        subMenu: null,
      },
      {
        id: 3,
        title: "Data Tables",
        route: "/",
        icon: <LuGalleryVertical />,
        subMenu: null,
      },
      {
        id: 4,
        title: "Calendar",
        route: "/",
        icon: <SlCalender />,
        subMenu: null,
      },
    ],
  },
  {
    id: 4,
    title: "Ecommerce",
    icon: <LuShoppingBasket />,
    subMenu: [
      {
        id: 1,
        title: "Products",
        route: "/",
        icon: <RiProductHuntLine />,
        subMenu: null,
      },
      {
        id: 2,
        title: "Orders",
        route: "/",
        icon: <TbReorder />,
        subMenu: null,
      },
    ],
  },
  {
    id: 5,
    title: "Authentication",
    icon: <SiAuthelia />,
    subMenu: [
      {
        id: 1,
        title: "Sign In",
        route: "/",
        icon: <VscDebugContinueSmall />,
        subMenu: null,
      },
      {
        id: 2,
        title: "Sign Up",
        route: "/",
        icon: <VscDebugContinueSmall />,
        subMenu: null,
      },
      {
        id: 3,
        title: "Reset Password",
        route: "/",
        icon: <VscDebugContinueSmall />,
        subMenu: null,
      },
    ],
  },
  {
    id: 6,
    title: "Config",
    route: "/",
    icon: <CiSettings />,
    subMenu: null,
  },
  {
    id: 7,
    title: "Change Log",
    route: "/",
    icon: <MdChangeHistory />,
    subMenu: null,
  },
];

export default useMenuItems;
