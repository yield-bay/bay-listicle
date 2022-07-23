import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ShareIcon, ClipboardIcon } from "@heroicons/react/outline";
import { useAtom } from "jotai";
import { isNotificationAtom } from "@store/atoms";
import Tooltip from "@components/common/Tooltip";

function classNames(classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ShareMenu({ farm }: any) {
  const [, isNotificationSet] = useAtom(isNotificationAtom);
  let [url, setUrl] = useState<string>("");
  const tweetUrl =
    `https://twitter.com/share?text=This%20farm%20is%20a%20fabulous%20opportunity,%20must%20check%20it%20out&url=` +
    url;
  useEffect(() => {
    setUrl(`http://localhost:3000?farm=${farm?.asset?.address}&id=${farm?.id}`);
  }, [farm]);

  return (
    <Menu as="div" className="relative inline-block">
      <Tooltip
        content="Share Farm link"
        className="scale-0 group-hover:scale-100 transition-all duration-150"
      >
        <div className="hover:scale-105 active:scale-100">
          <Menu.Button className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-700 cursor-pointer text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white active:bg-neutral-200 dark:active:bg-neutral-600 transition-all duration-150">
            <ShareIcon className="w-[18px]" />
          </Menu.Button>
        </div>
      </Tooltip>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="z-10 origin-top-left absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-neutral-700 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          <div className="py-1.5">
            <Menu.Item>
              {({ active }: any) => (
                <a
                  href={tweetUrl}
                  className={classNames([
                    active
                      ? "bg-blue-400 text-white"
                      : "text-gray-700 dark:text-neutral-100",
                    "group flex items-center px-4 py-2 text-sm",
                  ])}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">Share on Twitter</span>
                  <svg
                    className="h-5 w-5 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  Share on Twitter
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }: any) => (
                <button
                  onClick={(e) => {
                    navigator.clipboard.writeText(url);
                    // Setting toast true for duration 2000
                    isNotificationSet(true);
                    setTimeout(() => {
                      isNotificationSet(false);
                    }, 2000); // Duration for Toast
                  }}
                  className={classNames([
                    active
                      ? "bg-neutral-100 dark:bg-neutral-600 text-neutral-900 dark:text-white"
                      : "text-gray-700 dark:text-neutral-100",
                    "group flex items-center px-4 py-2 text-sm w-full",
                  ])}
                >
                  <ClipboardIcon className="mr-3 h-5 w-5" aria-hidden="true" />
                  Copy link
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
