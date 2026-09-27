import React from "react";

interface SectionHeadingProps {
  title: string;
  badgeColor?: string;
  className?: string;
}

export function SectionHeading({
  title,
  badgeColor = "bg-[#0284c7]",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex items-center gap-2 border-b-2 border-[#0f2942] pb-1.5 mb-3.5 ${className}`}
    >
      <span className={`w-2.5 h-2.5 ${badgeColor} inline-block rounded-[1px] shrink-0`} />
      <h2 className="text-xs sm:text-sm md:text-[13.5px] font-extrabold uppercase tracking-[0.5px] text-[#0f2942]">
        {title}
      </h2>
    </div>
  );
}
