"use client";
import React, { ReactElement } from "react";
import Link from "next/link";
import Spinner from "./Spinner";

function ButtonGame({
  className,
  onClick,
  link,
  text,
  icon,
  disabled = false,
}: {
  className?: string;
  onClick?: () => void;
  link?: string;
  text: string;
  icon?: ReactElement;
  disabled?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      onClick={() => onClick && onClick}
      className={`${
        className || ""
      }  px-4 border-2 rounded-lg border-red-600 hover:text-red-400 duration-100 cursor-pointer flex-initial gap-2 py-2 m-auto text-center `}
    >
      {disabled ? <Spinner /> : link ? <Link href={link}>{text}</Link> : text}
      {icon && icon}
    </button>
  );
}

export default ButtonGame;
