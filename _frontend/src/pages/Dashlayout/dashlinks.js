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
    icon: <i class="bx bx-grid-alt"></i>,
    url: "/dashboard/mainpage",
  },
  {
    id: 2,
    name: "Listings",
    icon: <i class="bx bx-collection"></i>,
    url: "/dashboard/listings",
    child: [
      {
        id: 2.1,
        name: "Add Property",
        icon: <i class="bx bx-plus"></i>,
        drop_url: "/dashboard/newproduct",
      },
      // {
      //   id: 2.2,
      //   name: "new product",
      //   icon: <i class="bx bx-plus"></i>,
      //   drop_url: "/dashboard/newproduct",
      // },
      // {
      //   id: 2.3,
      //   name: "new product",
      //   icon: <i class="bx bx-plus"></i>,
      //   drop_url: "/dashboard/newproduct",
      // },
    ],
  },
  {
    id: 3,
    name: "Members",
    icon: <i class="bx bx-book-alt"></i>,
    url: "/dashboard/member",
  },
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
    icon: <i class="bx bx-pie-chart-alt-2"></i>,
    url: "/dashboard/users",
  },
  {
    name: "Charts",
    icon: <i class="bx bx-line-chart"></i>,
    url: "/dashboard/charts",
  },
  {
    id: 5,
    name: "Schdule",
    icon: <i class="bx bx-compass"></i>,
    url: "/dashboard/schedule",
  },
  {
    id: 6,
    name: "Tasks",
    icon: <i class="bx bx-history"></i>,
    url: "/dashboard/tasks",
  },
  {
    id: 7,
    name: "Settings",
    icon: <i class="bx bx-cog"></i>,
    url: "/dashboard/settings",
  },
];

export default MenuItems;
