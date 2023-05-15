import { BiUser } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";

const dropDownLinks = [
  {
    name: "Profile",
    url: "/dashboard/profile",
    icon: <BiUser />,
  },
  {
    name: "Settings",
    url: "/dashboard/settings",
    icon: <IoSettingsOutline />,
  },
];
export default dropDownLinks;
