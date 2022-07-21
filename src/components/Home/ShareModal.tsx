// NextJS Imports
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";

// External Lib Imports
import { Dialog, Transition } from "@headlessui/react";
import {
  XIcon,
  DuplicateIcon,
  CheckCircleIcon,
  ExternalLinkIcon,
} from "@heroicons/react/outline";

type SharePropTypes = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function ShareModal({ open, setOpen }: SharePropTypes) {
  const [isCopied, setIsCopied] = useState(false);
  // const toast = useToast();

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
            <div className="relative inline-block align-bottom bg-white dark:bg-neutral-800 rounded-xl px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-3/4 sm:max-w-md sm:w-full sm:py-6">
              <div className="absolute top-0 right-0 pt-2 pr-2 sm:block">
                <div className="flex items-center p-1 group rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer">
                  <button
                    type="button"
                    className="text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white focus:outline-none"
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
                    Share Farm to...
                  </Dialog.Title>
                  <div className="border border-neutral-300 dark:border-neutral-600 w-full rounded-xl py-5 mt-3 px-4">
                    <div className="mt-4 flex flex-col justify-center sm:justify-start sm:flex-row w-full text-neutral-500 dark:text-neutral-300">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText("https://sarthak.wtf");
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
}
