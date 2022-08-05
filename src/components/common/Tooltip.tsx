import React from "react";
import Tippy from "@tippyjs/react/headless";

type TooltipProps = {
  children: React.ReactElement;
  content: string;
  type?: string;
  onButtonClick?: () => void;
};

export default function Tooltip({
  children,
  content,
  type,
  onButtonClick,
}: TooltipProps) {
  return (
    <Tippy
      render={(attrs) => (
        <div
          className={`box text-sm font-medium text-white dark:text-neutral-700 px-3 py-1.5 tracking-wide shadow-md rounded-lg max-w-sm bg-black dark:bg-white border border-neutral-700 dark:border-neutral-200 ${
            type == "warning" &&
            "bg-red-200 text-neutral-700 dark:bg-red-200 border-none"
          }`}
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
