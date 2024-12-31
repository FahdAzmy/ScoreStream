import React from "react";
import Search from "../Search/Search";
import ButtonGame from "../defaults/ButtonGame";

export default function NavBar() {
  return (
    <nav>
      <header className="flex justify-between items-center ">
        <Search />
        <div className="text-gray-200 flex items gap-3 font-bold">
          <ButtonGame link="/login" text="Login" />
          <ButtonGame link="/signup" text="Sign up" />
        </div>
      </header>
    </nav>
  );
}
