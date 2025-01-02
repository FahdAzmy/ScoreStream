import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={"/"}>
      <div className="font-bold text-3xl  mb-4  text-white flex gap-1">
        <h1 className="">Score</h1>
        <span className="text-red-500">Stream</span>
      </div>
    </Link>
  );
}
export default Logo;
