import { Fragment, useEffect, useState } from "react";
import { Menu, Dialog, Transition } from "@headlessui/react";
import {
  ShareIcon,
  ClipboardIcon,
  XIcon,
  DuplicateIcon,
  CheckCircleIcon,
  ExternalLinkIcon,
} from "@heroicons/react/outline";
import { useAtom } from "jotai";
import { isNotificationAtom } from "@store/atoms";
import Tooltip from "@components/common/Tooltip";
import { trackEventWithProperty } from "@utils/analytics";
import Image from "next/image";

function classNames(classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ShareFarm({ farm, apr }: any) {
  const [, isNotificationSet] = useAtom(isNotificationAtom);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  let [url, setUrl] = useState<string>("");
  const tweetUrl =
    `https://twitter.com/share?text=I%20found%20this%20farm%20with%20${apr}﹪%20APR.%20If%20you're%20looking%20for%20yield%20farms%20in%20the%20dotsama%20ecosystem,%20give%20@yield_bay%20a%20shot.%20` +
    encodeURIComponent(url);
  const utmLink =
    "&utm_campaign=share-farm&utm_source=yb-list&utm_medium=textlink";
  useEffect(() => {
    setUrl(
      `${
        typeof window !== "undefined"
          ? window.location.host // for testing locally
          : "https://list.yieldbay.io"
      }/?farm=${farm.asset?.address}&id=${farm.id}` + utmLink
    );
  }, [farm]);

  return (
    <div>
      {/* Menu in Desktop Mode */}
      <ShareMenu
        farm={farm}
        url={url}
        tweetUrl={tweetUrl}
        isNotificationSet={isNotificationSet}
      />
      {/* Modal for Mobile Mode */}
      <div className="sm:hidden">
        {/* <Tooltip
          content="Share Farm link"
          className="transition-all duration-150"
        > */}
        <div
          className="p-2 hover:scale-105 active:scale-100 rounded-md bg-neutral-100 dark:bg-neutral-700 cursor-pointer text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white active:bg-neutral-200 dark:active:bg-neutral-600 transition-all duration-150"
          onClick={() => setModalOpen(true)}
        >
          <ShareIcon className="w-[18px]" />
        </div>
        {/* </Tooltip> */}
        <ShareModal open={modalOpen} setOpen={setModalOpen} />
      </div>
    </div>
  );
}

const ShareMenu = ({ farm, url, tweetUrl, isNotificationSet }: any) => {
  return (
    <Menu as="div" className="relative hidden sm:inline-block">
      <Tooltip
        content="Share Farm link"
        className="transition-all duration-150"
      >
        <div className="hover:scale-105 active:scale-100">
          <Menu.Button className="p-2 rounded-md bg-neutral-100 dark:bg-neutral-700 cursor-pointer text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white active:bg-neutral-200 dark:active:bg-neutral-600 transition-all duration-150">
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
                  onClick={() =>
                    trackEventWithProperty("farm-share", {
                      shareVia: "twitter",
                      farmAddress: farm.asset?.address,
                      farmId: farm.id,
                    })
                  }
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
                    isNotificationSet(true);
                    setTimeout(() => {
                      isNotificationSet(false);
                    }, 2000); // Duration for Toast

                    trackEventWithProperty("farm-share", {
                      shareVia: "copy",
                      farmAddress: farm.asset?.address,
                      farmId: farm.id,
                    });
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
};

const ShareModal = ({ open, setOpen }: any) => {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-zinc-500 backdrop-blur-sm bg-opacity-60 transition-opacity" />
          </Transition.Child>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block sm:hidden align-bottom bg-white dark:bg-neutral-800 rounded-xl px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-3/4 sm:max-w-md sm:w-full sm:py-6">
              <div className="absolute top-0 right-0 pt-2 pr-2 sm:block">
                <div className="flex items-center p-1 group rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer">
                  <button
                    type="button"
                    className="text-neutral-600 dark:text-neutral-200 group-hover:text-neutral-900 dark:group-hover:text-neutral-300 focus:outline-none"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 w-full sm:text-left">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-heading font-medium text-neutral-900 dark:text-white"
                  >
                    Account
                  </Dialog.Title>
                  <div className="border border-neutral-300 dark:border-neutral-600 w-full rounded-xl py-5 mt-3 px-4">
                    <div className="mt-4 flex flex-col justify-center sm:justify-start sm:flex-row w-full text-neutral-500 dark:text-neutral-300">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText("bindaas rehne ka");
                          setIsCopied(true);
                          setTimeout(() => {
                            setIsCopied(false);
                          }, 500);
                        }}
                      >
                        <div className="text-sm font-medium hover:text-neutral-600 hover:dark:text-neutral-100">
                          {isCopied ? (
                            <div className="inline-flex items-center">
                              <CheckCircleIcon className="w-5 h-5 mr-1" />
                              <p>Copied</p>
                            </div>
                          ) : (
                            <div className="inline-flex items-center">
                              <DuplicateIcon className="w-5 h-5 mr-1" />
                              <p>Copy Address</p>
                            </div>
                          )}
                        </div>
                      </button>
                      <div className="sm:ml-8 text-sm font-medium hover:text-neutral-600 hover:dark:text-neutral-100">
                        <ExternalLinkIcon className="h-5 w-5 mr-1" />
                        <p>View on Explorer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
