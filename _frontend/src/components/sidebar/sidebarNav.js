import { RxDashboard } from "react-icons/rx";
import { BiUser } from "react-icons/bi";
import { TbUsers } from "react-icons/tb";
import { BsBarChart, BsListTask, BsCardChecklist } from "react-icons/bs";
import { RiSettings3Line } from "react-icons/ri";
import { AiOutlineSchedule } from "react-icons/ai";

const MenuItems = [
  {
    name: "Dashboard",
    icon: <RxDashboard />,
    url: "/dashboard/mainpage",
  },
  {
    name: "Listings",
    icon: <BsCardChecklist />,
    url: "/dashboard/listings",
    dropdown: {},
    drop_name: "new product",
    drop_url: "/dashboard/newproduct",
  },
  {
    name: "Members",
    icon: <BiUser />,
    url: "/dashboard/member",
  },
  {
    name: "Users",
    icon: <TbUsers />,
    url: "/dashboard/users",
  },
  {
    name: "Charts",
    icon: <BsBarChart />,
    url: "/dashboard/charts",
  },
  {
    name: "Schdule",
    icon: <AiOutlineSchedule />,
    url: "/dashboard/schedule",
  },
  {
    name: "Tasks",
    icon: <BsListTask />,
    url: "/dashboard/tasks",
  },
  {
    name: "Settings",
    icon: <RiSettings3Line />,
    url: "/dashboard/settings",
  },
];

export default MenuItems;
