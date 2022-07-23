import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { sortedFarmsAtom, sortStatusAtom } from "@store/atoms";
import {
  ArrowNarrowDownIcon,
  ArrowNarrowUpIcon,
} from "@heroicons/react/outline";
import FarmsList from "./FarmsList";
import Tooltip from "@components/common/Tooltip";

enum Order {
  ASC,
  DESC,
}

type ListicleType = {
  farms: any;
  noResult?: boolean;
};

const ListicleTable = ({ farms, noResult }: ListicleType) => {
  // const [sortStatus, setSortStatus] = useState({
  //   key: "tvl",
  //   order: Order.DESC,
  // });
  // const [sortedFarms, setSortedFarms] = useState(farms);

  const [sortStatus, sortStatusSet] = useAtom(sortStatusAtom);
  const [sortedFarms, sortedFarmsSet] = useAtom(sortedFarmsAtom);

  useEffect(() => {
    if (farms.length > 0) sortedFarmsSet(farms);
  }, [farms, sortedFarmsSet]);

  const handleSort = (key: string) => {
    let newSortStatus = {
      key,
      order: sortStatus.order == Order.ASC ? Order.DESC : Order.ASC, // Flip the order
    };
    if (key !== sortStatus.key) newSortStatus.order = Order.DESC; // if the key is not same as before, set the Order to DESC
    sortStatusSet(newSortStatus);

    let sortFn; // to be used to sort the pools
    if (newSortStatus.key == "tvl") {
      sortFn = (a: any, b: any) =>
        newSortStatus.order == Order.ASC
          ? a.tvl >= b.tvl
            ? 1
            : -1
          : a.tvl < b.tvl
          ? 1
          : -1;
    } else if (newSortStatus.key == "yield") {
      sortFn = (a: any, b: any) =>
        newSortStatus.order == Order.ASC
          ? a.apr.farm + a.apr.trading >= b.apr.farm + b.apr.trading
            ? 1
            : -1
          : a.apr.farm + a.apr.trading < b.apr.farm + b.apr.trading
          ? 1
          : -1;
    }

    sortedFarmsSet([...farms].sort(sortFn));
  };

  return (
    <div className="flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full align-middle md:px-0 lg:px-8 lg:py-4 dark:bg-neutral-900">
          {farms.length > 0 ? (
            <div className="overflow-hidden shadow ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-20 md:rounded-lg">
              <table className="min-w-full divide-y divide-neutral-300 dark:divide-neutral-600 text-neutral-900 dark:text-white">
                <thead className="bg-neutral-50 dark:bg-neutral-700">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-medium sm:pl-6 tracking-wider"
                    >
                      <span>Farm</span>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium tracking-wider cursor-pointer"
                      onClick={() => handleSort("tvl")}
                    >
                      <div className="flex items-center">
                        <Tooltip
                          content="Total Value Locked. Amount of money currently invested in the farm, denoted in USD."
                          onButtonClick={() => handleSort("tvl")}
                        >
                          <span>TVL</span>
                          {/* <QuestionMarkCircleIcon className="w-4 h-5 ml-1 text-neutral-500 dark:text-neutral-400" /> */}
                          {sortStatus.key == "tvl" &&
                            (sortStatus.order == Order.DESC ? (
                              <ArrowNarrowDownIcon className="w-4 h-4 inline -mt-0.5" />
                            ) : (
                              <ArrowNarrowUpIcon className="w-4 h-4 inline mb-0.5" />
                            ))}
                        </Tooltip>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="flex px-3 py-3.5 text-left text-sm font-medium tracking-wider cursor-pointer"
                      onClick={() => handleSort("yield")}
                    >
                      <div className="flex items-center">
                        <Tooltip
                          content="The percentage of returns the farm offers on staking for an year."
                          onButtonClick={() => handleSort("yield")}
                        >
                          <span>Yield</span>
                          {/* <QuestionMarkCircleIcon className="w-4 h-4 ml-1 text-neutral-500 dark:text-neutral-400" /> */}
                          {sortStatus.key == "yield" &&
                            (sortStatus.order == Order.DESC ? (
                              <ArrowNarrowDownIcon className="w-4 h-4 inline -mt-0.5" />
                            ) : (
                              <ArrowNarrowUpIcon className="w-4 h-4 inline mb-0.5" />
                            ))}
                        </Tooltip>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Go to farm</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 dark:divide-neutral-600 bg-white dark:bg-neutral-800">
                  <FarmsList farms={sortedFarms} />
                </tbody>
              </table>
            </div>
          ) : noResult ? (
            <div className="px-6 py-10 text-center border border-neutral-200 dark:border-neutral-600 sm:rounded-lg">
              Sorry, there is no farm available according to your preference 😔
            </div>
          ) : (
            <div className="px-6 py-10 text-center animate-pulse text-lg text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-600 sm:rounded-lg">
              🌾 Finding Farms 🌾
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListicleTable;
