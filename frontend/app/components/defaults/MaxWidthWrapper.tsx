import { cn } from "@/lib/utils";
import React from "react";

function MaxWidthWrapper({
  children,
  className,
  noPadding,
}: {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}) {
  return (
    <section
      className={cn(
        "max-w-[1600px] w-full py-5 px-10",
        className || "",
        {
          "py-0": noPadding,
        },
        { "py-8": !noPadding }
      )}
    >
      {children}
    </section>
  );
}

export default MaxWidthWrapper;
