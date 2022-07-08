import { useTheme } from "next-themes";
import Image from "next/image";

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="w-full flex items-center p-2 pl-6 md:pl-4 z-10 bg-primary-50 border-b dark:border-neutral-800 dark:bg-neutral-800 dark:bg-opacity-60 font-medium text-sm md:text-base text-neutral-800 dark:text-white">
      <div
        className="inline-flex items-center px-4 py-1.5 text-xl font-bold space-x-2 rounded cursor-pointer"
      >
        <Image
          src="/yieldbay-logo-shine.png"
          alt="YieldBay Icon"
          width={32}
          height={32}
        />
        <span>YieldBay</span>
      </div>
      <button
        className="flex p-2 bg-white dark:bg-neutral-900 transition-all duration-200 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:shadow-md cursor-pointer ml-auto"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Image
          src={theme === "dark" ? "/sun.svg" : "/moon.svg"}
          alt="theme toggle"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
}
