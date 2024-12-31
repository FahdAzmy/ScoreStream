import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={"/"}>
      <div className="font-bold text-2xl  mb-3 -ml-3 text-white flex">
        <h1 className="">Score</h1>
        <span className="text-red-500">Stream</span>
      </div>
    </Link>
  );
}
export default Logo;
