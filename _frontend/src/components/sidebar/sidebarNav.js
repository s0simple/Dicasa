import { RxDashboard } from "react-icons/rx";
import { BiUser } from "react-icons/bi";
import { TbUsers } from "react-icons/tb";
import { BsBarChart, BsListTask, BsCardChecklist } from "react-icons/bs";
import { RiSettings3Line, RiAddLine } from "react-icons/ri";
import { AiOutlineSchedule } from "react-icons/ai";

const MenuItems = [
  {
    id: 1,
    name: "Dashboard",
    icon: <RxDashboard />,
    url: "/dashboard/mainpage",
  },
  {
    id: 2,
    name: "Listings",
    icon: <BsCardChecklist />,
    url: "/dashboard/listings",
    child: [
      {
        id: 2.1,
        name: "new product",
        icon: <RiAddLine />,
        drop_url: "/dashboard/newproduct",
      },
      {
        id: 2.2,
        name: "new product",
        icon: <RiAddLine />,
        drop_url: "/dashboard/newproduct",
      },
      {
        id: 2.3,
        name: "new product",
        icon: <RiAddLine />,
        drop_url: "/dashboard/newproduct",
      },
    ],
  },
  { id: 3, name: "Members", icon: <BiUser />, url: "/dashboard/member" },
  {
    id: 4,
    child: [
      {
        id: 4.1,
        name: "new product",
        icon: <RiAddLine />,
        drop_url: "/dashboard/newproduct",
      },
    ],
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
    id: 5,
    name: "Schdule",
    icon: <AiOutlineSchedule />,
    url: "/dashboard/schedule",
  },
  { id: 6, name: "Tasks", icon: <BsListTask />, url: "/dashboard/tasks" },
  {
    id: 7,
    name: "Settings",
    icon: <RiSettings3Line />,
    url: "/dashboard/settings",
  },
];

export default MenuItems;
