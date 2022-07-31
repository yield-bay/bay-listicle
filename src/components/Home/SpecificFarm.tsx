import Image from "next/image";
import Tooltip from "@components/common/Tooltip";
import { trackEventWithProperty } from "@utils/analytics";
import toDollarFormat from "@utils/toDollarFormat";
import {
  formatFirstLetter,
  farmURL,
  formatTokenSymbols,
} from "@utils/farmlistMethods";
import ShareFarm from "./ShareFarm";

type FarmType = {
  farms: any;
  noResult: boolean;
};

const SpecificFarm = ({ farms, noResult }: FarmType) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:overflow-visible min-w-full align-middle sm:-mx-6 lg:-mx-8 px-0 lg:px-8 lg:py-4">
        {farms.length > 0 ? (
          <div className="shadow ring-1 ring-black dark:ring-neutral-700 ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y ring-1 ring-black dark:ring-white ring-opacity-5 rounded-lg dark:ring-opacity-20 divide-neutral-300 dark:divide-neutral-600 text-neutral-900 dark:text-white">
              <thead className="bg-red-50 dark:bg-neutral-700 rounded-lg transition duration-200">
                <tr className="rounded-lg">
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-medium sm:pl-6 tracking-wider rounded-tl-lg"
                  >
                    <span>Farm</span>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-medium tracking-wider cursor-pointer"
                  >
                    <div className="flex items-center">
                      <Tooltip content="Total Value Locked. Amount of money currently invested in the farm, denoted in USD.">
                        <span>TVL</span>
                      </Tooltip>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="flex px-3 py-3.5 text-left text-sm font-medium tracking-wider cursor-pointer"
                  >
                    <div className="flex items-center">
                      <Tooltip content="The percentage of returns the farm offers on staking for an year.">
                        <span>Yield</span>
                      </Tooltip>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="relative py-3.5 pl-3 pr-4 sm:pr-6 rounded-tr-lg"
                  >
                    <span className="sr-only">Go to farm</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-neutral-600 bg-white dark:bg-neutral-800 transition duration-200">
                {farms.map((farm: any) => (
                  <tr key={`${farm.asset.address}-${farm.tvl}`}>
                    <td className="whitespace-nowrap py-6 pl-4 pr-3 text-sm sm:pl-6 rounded-bl-lg">
                      <div className="flex items-center">
                        <div className="hidden md:flex flex-row items-center justify-center -space-x-2">
                          {farm?.asset.logos.map(
                            (logo: string, index: number) => (
                              <div
                                key={index}
                                className="z-10 flex overflow-hidden ring-2 ring-neutral-300 dark:ring-neutral-500 rounded-full bg-white dark:bg-neutral-800"
                              >
                                <Image
                                  src={logo}
                                  alt={logo}
                                  width={36}
                                  height={36}
                                />
                              </div>
                            )
                          )}
                        </div>
                        <div className="ml-2 flex flex-col gap-y-0.5">
                          <div className="flex flex-row items-center">
                            <div className="font-semibold tracking-wide">
                              <span>
                                {formatTokenSymbols(farm?.asset.symbol)}
                              </span>
                            </div>
                          </div>
                          <div className="text-neutral-500 dark:text-neutral-400 font-medium">
                            {formatFirstLetter(farm?.protocol)} on{" "}
                            {formatFirstLetter(farm?.chain)}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-900 dark:text-neutral-100 font-semibold">
                      {toDollarFormat(farm?.tvl)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-900 dark:text-neutral-100 font-semibold">
                      {(farm?.apr.base + farm?.apr.reward).toFixed(2)}%
                    </td>
                    <td className="whitespace-nowrap rounded-br-lg py-4 px-7 sm:px-4 text-right text-sm font-medium">
                      <div className="relative flex items-center justify-start lg:justify-center">
                        <a
                          href={farmURL(farm?.protocol)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button
                            className="inline-flex items-center duration-50 rounded bg-primary-50 dark:bg-primary-300 px-5 py-2 transition-all duration-200 hover:shadow-lg font-semibold text-primary-500 dark:text-primary-800 active:bg-primary-200 hover:ring-2 ring-primary-400 dark:hover:bg-primary-200 dark:active:bg-primary-300"
                            onClick={() =>
                              trackEventWithProperty("go-to-farm", {
                                protocol: farm?.protocol,
                              })
                            }
                          >
                            <p>Go to farm</p>
                          </button>
                        </a>
                        <div className="ml-3 sm:ml-0 w-1/3 text-center">
                          <ShareFarm
                            farm={farm}
                            apr={(farm?.apr.base + farm?.apr.reward).toFixed(2)}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : noResult ? (
          <div className="px-6 py-10 text-center border border-neutral-200 dark:border-neutral-600 sm:rounded-lg transition duration-200">
            Sorry, there is no farm available according to your preference 😔
          </div>
        ) : (
          <div className="px-6 py-10 text-center animate-pulse text-lg text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-600 sm:rounded-lg">
            🌾 Finding farm 🌾
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecificFarm;
