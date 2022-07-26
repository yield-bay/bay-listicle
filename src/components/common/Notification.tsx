import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import { useAtom } from "jotai";
import { isNotificationAtom } from "@store/atoms";
import { ClipboardIcon } from "@heroicons/react/outline";

export default function Notification() {
  const [isNotification, isNotificationSet] = useAtom(isNotificationAtom);

  return (
    <div
      aria-live="assertive"
      className="fixed z-10 inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
    >
      <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
        <Transition
          show={isNotification}
          as={Fragment}
          enter="transform ease-out duration-500 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="max-w-[350px] w-full bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-500 shadow-md rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="p-4">
              <div className="flex items-center">
                {/* Content */}
                <div className="w-0 flex-1 flex justify-between">
                  <ClipboardIcon className="w-5 text-neutral-700 mr-2" />
                  <p className="w-0 flex-1 text-sm font-medium text-gray-900 dark:text-white">
                    Farm link copied to clipboard.
                  </p>
                </div>
                {/* Close Btn */}
                <div className="ml-4 flex-shrink-0 flex">
                  <button
                    type="button"
                    className="rounded-md inline-flex text-neutral-400 dark:text-neutral-100 focus:outline-none"
                    onClick={() => {
                      isNotificationSet(false);
                    }}
                  >
                    <span className="sr-only">Close</span>
                    <div className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-600 rounded-md">
                      <XIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}
