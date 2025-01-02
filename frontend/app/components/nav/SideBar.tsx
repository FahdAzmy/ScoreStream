import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import NavLink from "./NavLink";
import { GiAmericanShield } from "react-icons/gi";
import Logo from "../defaults/Logo";
export const NAV_LINKS = [
  {
    link: "/",
    label: "Home",
    icon: <GoHomeFill />,
  },
  {
    link: "/category",
    label: "Category",
    icon: <MdDashboard />,
  },
  {
    link: "/games",
    label: "Games",
    icon: <GiAmericanShield />,
  },
  {
    link: "/wishlist",
    label: "WIshlist",
    icon: <FaHeart />,
  },
  {
    link: "/friends",
    label: "Friends",
    icon: <BsFillPeopleFill />,
  },
];

export default function SideBar() {
  return (
    <div className="  h-full sticky   bg-black/20 col-span-2 text-xl min-lg:py-5 min-lg:px-6 font-semibold max-md:hidden">
      <div className="py-5 px-6  sticky inset-0 flex flex-col items-start ">
        <Logo />
        {NAV_LINKS.map((navLink) => (
          <NavLink navLink={navLink} />
        ))}
      </div>
    </div>
  );
}
