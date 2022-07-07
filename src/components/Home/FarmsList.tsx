import Image from "next/image";
import { useRouter } from "next/router";
import toDollarFormat from "@utils/toDollarFormat";

const FarmsList = ({ farms }: any) => {
  const router = useRouter();

  console.log("farms", farms);
  return (
    <>
      {farms.map((farm: any) => (
        <tr key={farm.id}>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
            <div className="flex items-center">
              <div className="relative z-0 flex -space-x-2 overflow-hidden p-0.5">
                <img
                  className="relative z-10 inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-neutral-500"
                  src={farm?.asset?.tokens[0]?.logo}
                  alt=""
                />
                <img
                  className="relative z-20 inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-neutral-500"
                  src={farm?.asset?.tokens[1]?.logo}
                  alt=""
                />
              </div>
              <div className="ml-2">
                <div className="flex">
                  <div className="font-medium">
                    {farm?.asset?.tokens[0]?.name} •{" "}
                    {farm?.asset?.tokens[1]?.name}
                  </div>
                  <span className="ml-2.5 inline-flex items-center rounded bg-primary-100 dark:bg-primary-500 px-1.5 text-xs font-medium text-primary-800 dark:text-primary-900">
                    {farm?.farmType}
                  </span>
                </div>
                <div className="text-neutral-500 dark:text-neutral-400">
                  {farm?.protocol} on {farm?.chin}
                </div>
              </div>
            </div>
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-500">
            <div className="text-neutral-900 dark:text-neutral-100">
              {toDollarFormat(farm?.tvl)}
            </div>
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-900 dark:text-neutral-100">
            {farm?.apr?.farm + farm?.apr?.trading}%
          </td>
          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
            <a href={farm?.url} target="_blank">
              <button
                // onClick={(e) => {
                //   e.preventDefault();
                //   router.push(farm?.url);
                // }}
                className="inline-flex items-center duration-50 rounded-lg bg-primary-500 dark:bg-primary-500 px-5 py-2 transition-all duration-100 hover:shadow-lg font-medium text-white dark:text-neutral-800 active:bg-primary-600 hover:ring-2 ring-primary-700 dark:hover:bg-primary-400 dark:active:bg-primary-500"
              >
                <p>Go to farm</p>
              </button>
            </a>
          </td>
        </tr>
      ))}
    </>
  );
};

export default FarmsList;
