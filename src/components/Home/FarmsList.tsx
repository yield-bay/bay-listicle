import Image from "next/image";
import toDollarFormat from "@utils/toDollarFormat";

const FarmsList = ({ farms }: any) => {
  function formatFarmType(farmType: string): string {
    let formatted = farmType.slice(0, -4); // removed _AMM
    // formatted = formatted.slice(0, 1) + formatted.slice(1).toLowerCase();
    return formatted.concat(" SWAP"); // added "Swap"
  }

  function formatChain(chainName: string): string {
    let formatted = chainName.slice(0, 1) + chainName.slice(1).toLowerCase();
    return formatted;
  }

  return (
    <>
      {farms.map((farm: any) => (
        <tr key={farm.id}>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
            <div className="flex items-center">
              <div className="flex md:hidden lg:flex flex-row items-center justify-center -space-x-2">
                <div className="z-0 flex overflow-hidden ring-2 ring-neutral-300 dark:ring-neutral-500 rounded-full bg-white dark:bg-neutral-800">
                  <Image
                    src={farm?.asset?.tokens[0]?.logo}
                    alt={farm?.asset?.tokens[0]?.symbol}
                    width={36}
                    height={36}
                  />
                </div>
                <div className="z-10 flex overflow-hidden ring-2 ring-neutral-300 dark:ring-neutral-500 rounded-full bg-white dark:bg-neutral-800">
                  <Image
                    src={farm?.asset?.tokens[1]?.logo}
                    alt={farm?.asset?.tokens[1]?.symbol}
                    width={36}
                    height={36}
                  />
                </div>
              </div>
              <div className="ml-2 flex flex-col gap-y-0.5">
                <div className="flex flex-row items-center">
                  <div className="font-medium">
                    <span>{farm?.asset?.tokens[0]?.symbol}</span>
                    {" • "}
                    <span>{farm?.asset?.tokens[1]?.symbol}</span>
                  </div>
                  <div className="ml-2">
                    <span className="tracking-wider items-center rounded bg-primary-50 dark:bg-primary-300 px-2 py-0.5 text-xs font-semibold text-primary-500 dark:text-neutral-900">
                      {formatFarmType(farm?.farmType)}
                    </span>
                  </div>
                </div>
                <div className="text-neutral-500 dark:text-neutral-400">
                  {farm?.protocol} on {formatChain(farm?.chain)}
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
              <button className="inline-flex items-center duration-50 rounded bg-primary-50 dark:bg-primary-300 px-5 py-2 transition-all duration-100 hover:shadow-lg font-semibold text-primary-500 dark:text-primary-800 active:bg-primary-200 hover:ring-2 ring-primary-400 dark:hover:bg-primary-200 dark:active:bg-primary-300">
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
