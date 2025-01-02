import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function CardInfo({
  src,
  title,
  info,
  textBtn,
  btnClasses,
}: {
  src: string;
  title: string;
  info: string;
  textBtn?: string;
  btnClasses?: string;
}) {
  return (
    <div className="flex flex-col items-start absolute left-20 top-20 max-w-md">
      <div className="w-full h-40 relative">
        <Image src={src} alt={title} fill className="object-contain" />
      </div>
      <h1 className="text-white text-2xl font-bold mb-2">{title}</h1>
      <p className="text-base text-muted-foreground">{info}</p>
      <Button className={`rounded-full mt-2 ${btnClasses || ""}`}>
        {textBtn || "Find out more"}
      </Button>
    </div>
  );
}

export default CardInfo;
