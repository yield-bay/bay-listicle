import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { farmURL } from "@utils/farmlistMethods";
import { trackEventWithProperty } from "@utils/analytics";

export default function CriticalFarmModal({
  open,
  setOpen,
  protocol,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  protocol: string;
}) {
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
            <Dialog.Overlay className="fixed inset-0 bg-zinc-500 backdrop-blur-sm bg-opacity-60 transition-opacity duration-300" />
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
            <div className="relative inline-block align-bottom bg-white dark:bg-neutral-800 rounded-xl px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-3/4 sm:max-w-sm sm:w-full sm:py-6">
              <div className="absolute top-0 right-0 pt-2 pr-2 sm:block">
                <div className="flex items-center p-1 group rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer">
                  <button
                    type="button"
                    className="text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white focus:outline-none"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 w-full">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-heading font-medium text-neutral-900 dark:text-white"
                  >
                    Warning!
                  </Dialog.Title>
                  <div className="w-full my-2 border-neutral-200 rounded-lg">
                    <div className="font-normal py-8">
                      This Yield Farm has been affected by the recent Nomad
                      Hack.
                    </div>
                  </div>
                  <div className="inline-flex w-full justify-evenly">
                    <a
                      href="https://twitter.com/yield_bay/status/1554413766694952960"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="px-4 py-2 rounded-md bg-neutral-300 dark:bg-neutral-700">
                        Read More
                      </button>
                    </a>
                    <a
                      href={farmURL(protocol)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        className="px-4 py-2 rounded-md bg-neutral-300 dark:bg-neutral-700"
                        onClick={() =>
                          trackEventWithProperty("go-to-farm", {
                            protocol: protocol,
                          })
                        }
                      >
                        Continue Anyways
                      </button>
                    </a>
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
