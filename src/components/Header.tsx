import { useTheme } from "next-themes";
import Image from "next/image";

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center justify-between w-full p-2 pl-6 md:pl-4 z-10 bg-primary-50 border-b dark:border-neutral-800 dark:bg-neutral-800 dark:bg-opacity-60 font-medium text-sm md:text-base text-neutral-800 dark:text-white transition duration-200">
      <div className="inline-flex items-center px-4 py-1.5 text-xl font-bold space-x-2 rounded cursor-pointer">
        <Image
          src="/yieldbay-logo-shine.png"
          alt="YieldBay Icon"
          width={32}
          height={32}
        />
        <span>YieldBay</span>
      </div>
      <div className="inline-flex items-center gap-x-4">
        <a
          href="https://discord.gg/AKHuvbz7q4"
          target="_blank"
          rel="noreferrer"
        >
          <button className="px-8 py-2.5 bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 text-white text-sm font-semibold font-heading tracking-[0em] rounded-full active:scale-[0.98] transition duration-150">
            list your protocol
          </button>
        </a>
        <button
          className="flex p-2 h-max bg-white dark:bg-neutral-900 transition-all duration-200 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:shadow-md cursor-pointer ml-auto"
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
    </div>
  );
}
