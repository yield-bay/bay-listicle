import { useEffect, useState } from "react";
import FarmsList from "./FarmsList";
import Tooltip from "@components/common/Tooltip";

type FarmType = {
  farms: any;
  noResult: boolean;
};

const SpecificFarm = ({ farms, noResult }: FarmType) => {
  const [farm, setFarm] = useState([]);

  useEffect(() => {
    if (farms.length > 0) setFarm(farms);
  }, [farms]);

  return (
    <div className="flex flex-col">
      {/* <div className="-my-2 -mx-4 overflow-x-auto border border-red-500 sm:-mx-6 lg:-mx-8"> */}
      <div className="-my-2 -mx-4 overflow-x-auto min-w-full border border-red-500 align-middle sm:-mx-6 lg:-mx-8 lg:px-8 lg:py-4 px-5">
        {farms.length > 0 ? (
          <div className="shadow ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-20 md:rounded-lg">
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
                <FarmsList farms={farm} />
              </tbody>
            </table>
          </div>
        ) : noResult ? (
          <div className="px-6 py-10 text-center border border-neutral-200 dark:border-neutral-600 sm:rounded-lg transition duration-200">
            Sorry, there is no farm available according to your preference 😔
          </div>
        ) : (
          <div className="px-6 py-10 text-center animate-pulse text-lg text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-600 sm:rounded-lg">
            🌾 Finding Farms 🌾
          </div>
        )}
      </div>
      {/* </div> */}
    </div>
  );
};

export default SpecificFarm;
