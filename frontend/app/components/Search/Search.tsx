import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

function Search() {
  return (
    <div className=" overflow-hidden flex  justify-between group items-center px-4 border border-input rounded-xl max-md:w-[70%] md:w-[50%] bg-black/30">
      <input className="bg-transparent w-full  py-2.5   text-gray-50 border-none outline-none active:outline-none ring-0 placeholder:text-gray400" />
      <SearchIcon className="text-white cursor-pointer duration-50 group-hover:text-gray-300" />
    </div>
  );
}

export default Search;
