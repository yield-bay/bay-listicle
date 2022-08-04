import React from "react";
import Tippy from "@tippyjs/react/headless";

type TooltipProps = {
  children: React.ReactElement;
  content: string;
  onButtonClick?: () => void;
};

export default function Tooltip({
  children,
  content,
  onButtonClick,
}: TooltipProps) {
  return (
    <Tippy
      render={(attrs) => (
        <div
          className="box text-[15px] font-medium text-white dark:text-neutral-700 px-3 py-1.5 tracking-wide shadow-md rounded-lg max-w-sm bg-black dark:bg-white border border-neutral-700 dark:border-neutral-200"
          tabIndex={-1}
          onClick={onButtonClick}
          {...attrs}
        >
          <span>{content}</span>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}
