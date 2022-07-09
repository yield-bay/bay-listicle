import { QuestionMarkCircleIcon } from "@heroicons/react/outline";
import FarmsList from "./FarmsList";
import Tooltip from "@components/Tooltip";

const ListicleTable = ({ farms }: any) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:p-8 dark:bg-neutral-900">
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
                    className="px-3 py-3.5 text-left text-sm font-medium tracking-wider"
                  >
                    <div className="flex items-center">
                      <span>TVL</span>
                      <Tooltip
                        tooltipText={
                          "Total Value Locked. Amount of money currently invested in the farm, denoted in USD."
                        }
                      >
                        <QuestionMarkCircleIcon className="w-4 h-5 ml-1 text-neutral-500 dark:text-neutral-400" />
                      </Tooltip>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="flex px-3 py-3.5 text-left text-sm font-medium tracking-wider"
                  >
                    <div className="flex items-center">
                      <span>Yield</span>
                      <Tooltip
                        tooltipText={
                          "The percentage of returns the farm offers on staking for an year."
                        }
                      >
                        <QuestionMarkCircleIcon className="w-4 h-4 ml-1 text-neutral-500 dark:text-neutral-400" />
                      </Tooltip>
                    </div>
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Go to farm</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-neutral-600 bg-white dark:bg-neutral-800">
                <FarmsList farms={farms} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListicleTable;
