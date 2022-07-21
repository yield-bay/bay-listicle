import { useState } from "react";
import { Popover } from "@headlessui/react";
import { usePopper } from "react-popper";

type TooltipProps = {
  children: React.ReactNode;
  tooltipText: string;
  onButtonClick: () => any;
  className?: string;
};

const Tooltip = ({
  children,
  tooltipText,
  onButtonClick,
  className,
}: TooltipProps) => {
  const [refElement, setRefElement] = useState<HTMLElement | null>(null);
  const [popperElement, setPopperElemenet] = useState<HTMLElement | null>(null);
  const [isShowingTip, setIsShowingTip] = useState(false);
  const { styles, attributes } = usePopper(refElement, popperElement, {
    placement: "top",
  });

  return (
    <Popover>
      <Popover.Button
        as="span"
        ref={setRefElement}
        onMouseEnter={() => setIsShowingTip(true)}
        onMouseLeave={() => setIsShowingTip(false)}
        onClick={onButtonClick}
        // className="flex  items-center"
      >
        {children}
      </Popover.Button>

      {isShowingTip && (
        <Popover.Panel
          static
          ref={setPopperElemenet}
          style={styles.popper}
          {...attributes.popper}
          onMouseEnter={() => setIsShowingTip(true)}
          onMouseLeave={() => setIsShowingTip(false)}
          className={`border-2 bg-neutral-100 border-neutral-200 text-gray-800 text-sm shadow-md px-3 py-2 mb-2 max-w-[250px] text-center rounded-md dark:bg-neutral-800 dark:border-neutral-700 dark:text-white ${className}`}
        >
          <p>{tooltipText}</p>
        </Popover.Panel>
      )}
    </Popover>
  );
};

export default Tooltip;
