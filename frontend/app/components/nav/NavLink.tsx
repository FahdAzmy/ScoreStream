"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactElement } from "react";

function NavLink({
  navLink,
}: {
  navLink: { link: string; label: string; icon: ReactElement };
}) {
  const pathName = usePathname();
  const isActive = pathName === navLink.link;
  return (
    <Link
      href={navLink.link}
      className={`flex gap-2 ${
        isActive ? "text-red-500" : "text-white "
      }  duration-150 flex  items-center p-2 my-2 hover:bg-gray-600 w-full rounded-md`}
    >
      {React.cloneElement(navLink.icon, { className: "w-6 h-6" })}
      {navLink.label}
    </Link>
  );
}

export default NavLink;
