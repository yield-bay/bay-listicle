import { Tooltip as FBtooltip } from "flowbite-react";
import { useTheme } from "next-themes";

type TooltipProps = {
  children: React.ReactNode;
  content: string;
  position?: "auto" | "bottom" | "right" | "top" | "left";
  onButtonClick?: () => void;
  className?: string;
};

export default function Tooltip({
  children,
  content,
  position,
  onButtonClick,
  className,
}: TooltipProps) {
  const { theme } = useTheme();

  return (
    <div className={className}>
      <FBtooltip
        content={content}
        style={theme == "dark" ? "light" : "dark"}
        placement={position}
        trigger="hover"
        animation="duration-150"
        arrow={true}
        onClick={onButtonClick}
      >
        {children}
      </FBtooltip>
    </div>
  );
}
